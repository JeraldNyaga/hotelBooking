document.addEventListener("DOMContentLoaded", function () {
  let mtKenya = document.getElementById("mtKenyaBut");
  let mtElgon = document.getElementById("mtElgonBut");
  let mtKasongo = document.getElementById("mtKasongoBut");
  let userForm =   document.getElementById("userNameForm");
  let bookingBut =  document.getElementById("bookingBut");

  function funMtKenya() {
    document.getElementById("mtElgonRes").classList.add("hidden");
    document.getElementById("mtKasongoRes").classList.add("hidden");
    document.getElementById("mtKenyaRes").classList.remove("hidden");
  }
  function funMtElgon() {
    document.getElementById("mtKenyaRes").classList.add("hidden");
    document.getElementById("mtKasongoRes").classList.add("hidden");
    document.getElementById("mtElgonRes").classList.remove("hidden");
  }
  function funMtKasongo() {
    document.getElementById("mtKenyaRes").classList.add("hidden");
    document.getElementById("mtElgonRes").classList.add("hidden");
    document.getElementById("mtKasongoRes").classList.remove("hidden");
  }
  function showNameForm() {
    document.getElementById("showBookForm").classList.toggle("hidden");
  }
  function getNameUser() {
    let userName = document.getElementById("enterName").value;
    return userName;
  }

  if (mtKenya) mtKenya.addEventListener("click", funMtKenya);
  if (mtElgon) mtElgon.addEventListener("click", funMtElgon);
  if (mtKasongo) mtKasongo.addEventListener("click", funMtKasongo);
  if(userForm) userForm.addEventListener("submit", getNameUser);
  if (bookingBut) bookingBut.addEventListener("click", showNameForm);
});
