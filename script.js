function checkTracking() {
  const code = document.getElementById("trackingCode").value.trim();
  const error = document.getElementById("error");

  if (code === "TR599652932") {
    window.location.href = "track.html";
  } else {
    error.textContent = "Invalid tracking code. Please try again.";
  }
}
