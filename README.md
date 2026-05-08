# JavaScript Playwright Practice

This repository contains beginner-level JavaScript practice files for Playwright and general JavaScript basics.

## Repository Structure

- `chapter_01_Basics/`
  - `01_Basics.js` - First basic JavaScript examples.
  - `02_Basics2.js` - Second set of JavaScript basics and practice examples.

## Purpose

The repository is intended for learning and experimenting with JavaScript syntax, control flow, and Playwright-related automation concepts.

## Usage

1. Open the repository in your editor.
2. Review the example files in `chapter_01_Basics/`.
3. Run the scripts using Node.js if the files are standalone JavaScript exercises.

```bash
node chapter_01_Basics/01_Basics.js
node chapter_01_Basics/02_Basics2.js
```

## Repository Status

- Latest commit: `7be724e`
- Message: Add keyword identifier example file
- Author: Drishti
- Date: 2026-05-08 08:33:38 +0530
- Branch: `main`
- Remote: `origin`
- Last pushed: not updated yet. Push to refresh this field.

## Notes

- There is currently no dedicated Playwright project configuration in this repository.
- Add Playwright test files and configuration if you want to expand this into an automated browser testing project.

## Automatic README Updates

This repository includes local git hook automation that keeps `README.md` synchronized with commits and pushes.

- `scripts/update-readme.js` generates the `## Repository Status` section.
- `.githooks/pre-commit` updates and stages `README.md` before every commit.
- `.githooks/pre-push` updates and commits `README.md` before every push.
- Enable hooks locally with:

```bash
git config core.hooksPath .githooks
```

After the hooks are installed, `README.md` will be updated automatically as you commit and push changes.
