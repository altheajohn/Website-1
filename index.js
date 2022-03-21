document.addEventListener("DOMContentLoaded", initalize);

function initalize() {
  let buttn = document.getElementById("ratebutton");
  let dates = document.querySelector("#dates");
  let base1 = document.querySelector("#base");
  let rates1 = document.querySelector("#rates");
  let units1 = document.querySelector("#units");

  // ---------- variables for form -------
  const form = document.querySelector("#orderform");
  const formbuttn = document.querySelector("#fsbuttn");
  // ------------------------------------------

  function renderRates(obj) {
    dates.textContent = obj.date;
    base1.textContent = obj.base + " " + "$1.00";
    rates1.textContent = obj.rates.XAG + " " + "XAG";
    units1.textContent = obj.unit;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(
      firstname.value + lastname.value + person.value + details.value
    );

    form.reset();
  });

  const firstname = document.querySelector("#fname");
  const lastname = document.querySelector("#lname");
  //"who this order is for", drop down menu
  const person = document.querySelector("#person");
  // comments field
  const details = document.querySelector("#subject");

  // buttn.addEventListener("click", function () {
  //   fetch(
  //     "https://www.metals-api.com/api/latest?access_key=mrg07r05g40j3ukfw267e7496g7a3mzg6n9p23vh86ffz8av2i3j6r2ti6q8&base=USD&symbols=XAG&date=2022-03-11"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => renderRates(data));
  // });

  // when I click submit, we want it to send to an e-mail address

  // funcation to send form data to e-mail

  function sendMail(value) {
    let link =
      "mailto:altheajohn64@gmail.com" +
      "?cc=woferd@yahoo.com" +
      "&subject=" +
      "E.Byjoe Creations Form Data" +
      "&body=" +
      value;
    window.location.href = link;
  }
}
