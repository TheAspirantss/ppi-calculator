function calculatePPI() {
  // Get input values
  let currentPPI = parseFloat(document.getElementById("current-ppi").value);
  let semSPI = parseFloat(document.getElementById("sem-spi").value);

  // Perform calculation (logic left empty as per request)
  let calculatedPPI = calculatePPIFunction(currentPPI, semSPI);

  // Display result
  document.getElementById(
    "ppi-result"
  ).innerHTML = `Your PPI: ${calculatedPPI.toFixed(2)}`;
}

// Function for PPI calculation (to be implemented)
function calculatePPIFunction(currentPPI, semSPI) {
    let ttlCredits = currentPPI*98;
    ttlCredits = ttlCredits + semSPI*20;
    totalPPI = (ttlCredits / 118);
    return totalPPI;
}
