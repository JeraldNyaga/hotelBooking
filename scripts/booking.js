let dayIn = document.getElementById("checkInDate");
let dayOut = document.getElementById("checkOutDate");

document.addEventListener("DOMContentLoaded", () => {

  if (dayIn) {
    let today = new Date().toISOString().split("T")[0];
    dateIn.setAttribute("min", today);
    dayOut.setAttribute("min", today);
  }
});
// function calculateDatesSpent(){

// }

// dayIn.addEventListener("click", () => {
//   console.log(getElementById("checkInDate").value);
// });
// dayOut.addEventListener("click", () => {
//   console.log(getElementById("checkInDate").value);
// });
