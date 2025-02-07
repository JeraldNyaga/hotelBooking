function displayHotel() {
  let mtKenya = document.getElementById("mtKenyaBut");
  let mtElgon = document.getElementById("mtElgonBut");
  let mtKasongo = document.getElementById("mtKasongoBut");

  mtKenya.addEventListener("click", () => {
    document.getElementById("mtElgonRes").classList.add("hidden");
    document.getElementById("mtKasongoRes").classList.add("hidden");
    document.getElementById("mtKenyaRes").classList.remove("hidden");
  });
  mtElgon.addEventListener("click", () => {
    document.getElementById("mtKenyaRes").classList.add("hidden");
    document.getElementById("mtKasongoRes").classList.add("hidden");
    document.getElementById("mtElgonRes").classList.remove("hidden");
  });
  mtKasongo.addEventListener("click", () => {
    document.getElementById("mtKenyaRes").classList.add("hidden");
    document.getElementById("mtElgonRes").classList.add("hidden");
    document.getElementById("mtKasongoRes").classList.remove("hidden");
  });
}

displayHotel();
class Hotel {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class HotelFeatures {
  constructor(bedSize, bathType, concierge) {
    this.bedSize = bedSize;
    this.bathType = bathType;
    this.concierge = concierge;
  }
}

class Guest {}

class GuestHotelBooking {}

let novotelHotel = new Hotel("Novotel");
