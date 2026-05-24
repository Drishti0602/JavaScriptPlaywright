// ✅ Question 4 — Build Health Reporter

let passPercentage = 95;

if (passPercentage === 100) {
    console.log("🟢 Green Build");
} else if (passPercentage >= 90 && passPercentage <= 99) {
    console.log("🟡 Stable — Investigate failures");
} else if (passPercentage >= 70 && passPercentage <= 89) {
    console.log("🟠 Unstable");
} else {
    console.log("🔴 Broken Build — Block deployment");
}