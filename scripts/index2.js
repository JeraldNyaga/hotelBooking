function showNameForm() {
  document.getElementById("showBookForm").classList.toggle("hidden");
}
function getNameUser() {
  let userName = document.getElementById("enterName").value;
  return userName;
}
document.getElementById("userNameForm").addEventListener("submit", getNameUser);
document.getElementById("bookingBut").addEventListener("click", showNameForm);

// class Hotel {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class HotelFeatures {
//   constructor(bedSize, bathType, concierge) {
//     this.bedSize = bedSize;
//     this.bathType = bathType;
//     this.concierge = concierge;
//   }
// }

// class Guest {}

// class GuestHotelBooking {}

// let novotelHotel = new Hotel("Novotel");

