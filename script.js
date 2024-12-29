function calculatePPI() {
  // Get input values
  let currentPPI = parseFloat(document.getElementById("current-ppi").value);
  let semSPI = parseFloat(document.getElementById("sem-spi").value);
  let currentPPIError = document.getElementById("ppiError");
  let currentSPIError = document.getElementById("spiError");

  // Clear previous error messages
  currentPPIError.innerText = "";
  currentSPIError.innerText = "";

  // Validate current PPI
  if (isNaN(currentPPI) || currentPPI < 0 || currentPPI > 10) {
    currentPPIError.innerText = "Enter value between 0 to 10";
    currentPPIError.style.color = "red";
    return;
  }

  // Validate semester SPI
  if (isNaN(semSPI) || semSPI < 0 || semSPI > 10) {
    currentSPIError.innerText = "Enter value between 0 to 10";
    currentSPIError.style.color = "red";
    return;
  }

  // Perform calculation
  let calculatedPPI = calculatePPIFunction(currentPPI, semSPI);

  // Display result
  document.getElementById(
    "ppi-result"
  ).innerHTML = `Your PPI: ${calculatedPPI.toFixed(2)}`;
}

// Function for PPI calculation
function calculatePPIFunction(currentPPI, semSPI) {
  let ttlCredits = currentPPI * 118;
  ttlCredits += semSPI * 23;
  let totalPPI = ttlCredits / 141;
  return totalPPI;
}
