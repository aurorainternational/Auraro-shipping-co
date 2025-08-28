function checkTracking() {
  const trackingInput = document.getElementById("trackingInput").value.trim();
  const shipmentDetails = document.getElementById("shipmentDetails");
  const errorMessage = document.getElementById("errorMessage");

  if (trackingInput === "TR599652932") {
    shipmentDetails.style.display = "block";
    errorMessage.style.display = "none";
  } else {
    shipmentDetails.style.display = "none";
    errorMessage.style.display = "block";
  }
}
