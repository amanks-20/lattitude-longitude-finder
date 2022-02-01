const x = document.getElementById("coordinates");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(printPosition);
  } catch {
    x.innerHTML = err;
  }
}

function printPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
