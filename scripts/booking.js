document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkInDate").min = new Date()
    .toISOString()
    .split("T")[0];
  document.getElementById("checkOutDate").min = new Date()
    .toISOString()
    .split("T")[0];
});
