// ✅ Question 5 — Login Lockout After Failed Attempts

let attempts = 2;

if (attempts === 0) {
    console.log("Login successful");
} else if (attempts < 3) {
    console.log(`${3 - attempts} attempt left before lockout`);
} else {
    console.log("🔒 Account Locked — Contact support");
}