document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const trackingInput = document.getElementById("tracking-number");
  const shipmentDetails = document.getElementById("shipment-details");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = trackingInput.value.trim();

    // Only show details if correct tracking number entered
    if (code === "TR599652932") {
      shipmentDetails.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      shipmentDetails.style.display = "none";
      errorMessage.style.display = "block";
    }
  });
});