// Update label text depending on role selected
function updateInputLabel() {
  const role = document.getElementById("role").value;
  const label = document.getElementById("input-label");
  label.textContent = role === "seller" ? "Number of packages sold:" : "Number of customers referred:";
}

// Calculate profit based on role and input
function calculateProfit() {
  const role = document.getElementById("role").value;
  const input = parseInt(document.getElementById("input").value);
  let result = 0;

  if (isNaN(input) || input < 0) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    return;
  }

  if (role === "seller") {
    result = input * 500;
    document.getElementById("result").textContent = `As a ChipsMe Seller, you earn ${result.toLocaleString()} FCFA.`;
  } else if (role === "partner") {
    result = input * 250;
    document.getElementById("result").textContent = `As a Sleeping Partner, you earn ${result.toLocaleString()} FCFA.`;
  }
}
