const fs = require('fs');
const path = require('path');
const cp = require('child_process');

function exec(cmd) {
  return cp.execSync(cmd, { encoding: 'utf8' }).trim();
}

const root = path.resolve(__dirname, '..');
const readmePath = path.join(root, 'README.md');
const mode = process.argv[2] || 'commit';
const remoteName = process.argv[3] || 'origin';
const remoteUrl = process.argv[4] || (remoteName === 'origin' ? exec('git config --get remote.origin.url') : exec(`git config --get remote.${remoteName}.url`));

const branch = exec('git rev-parse --abbrev-ref HEAD');
const sha = exec('git rev-parse --short HEAD');
const author = exec('git log -1 --pretty=format:%an');
const date = exec('git log -1 --date=iso --pretty=format:%ad');
const message = exec('git log -1 --pretty=format:%s');
const generatedAt = new Date().toISOString();
const pushLine = mode === 'push'
  ? `Last pushed to \`${remoteName}\` (${remoteUrl}) at ${generatedAt}`
  : 'Last pushed: not updated yet. Push to refresh this field.';

const statusBlock = `## Repository Status

- Latest commit: \`${sha}\`
- Message: ${message}
- Author: ${author}
- Date: ${date}
- Branch: \`${branch}\`
- Remote: \`${remoteName}\`
- ${pushLine}
`;

const content = fs.readFileSync(readmePath, 'utf8');
const updated = content.match(/## Repository Status[\s\S]*?(?=\n## |$)/)
  ? content.replace(/## Repository Status[\s\S]*?(?=\n## |$)/, statusBlock)
  : content.replace(/(## Notes[\s\S]*)/, `${statusBlock}
$1`);

if (updated !== content) {
  fs.writeFileSync(readmePath, updated, 'utf8');
  process.exit(0);
}
