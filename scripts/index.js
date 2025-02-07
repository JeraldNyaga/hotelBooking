function displayHotel(){
    
}

class Hotel {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class HotelFeatures {
    constructor(bedSize, bathType, concierge){
        this.bedSize = bedSize;
        this.bathType = bathType;
        this.concierge = concierge;
    }   
}

class Guest {}

class GuestHotelBooking {}

let novotelHotel = new Hotel("Novotel");
