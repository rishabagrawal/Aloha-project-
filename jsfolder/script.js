

document.addEventListener("DOMContentLoaded", function () {
  // All of your code goes inside here 
  console.log('this is working');

  const flkty = new Flickity('.main-carousel', {
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true,
  });

  // Email alert 
  subscribeForm = document.getElementById("subscribe-form");
  const emailInput = document.getElementById("email-address");

  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emailInput.value != '') {
      alert('Thanks for subscribing');
    } else {
      alert("please enter a valid email");

    }

  });










}); // end of the document 