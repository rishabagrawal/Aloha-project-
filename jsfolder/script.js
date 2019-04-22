

document.addEventListener("DOMContentLoaded", function() { 
    // All of your code goes inside here 
    console.log('this is working');

      const flkty = new Flickity( '.main-carousel', {
        cellAlign: 'left',
        wrapAround: true,
        freeScroll: true,
      });

      // Email alert 
      function validateEmail(inputtext)
      {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputtext.value.match(mailformat))
         {
       
          alert("Thank You For Subscribing");
          return true;
        }
        else
        {
          alert("You have entered an invalid email address");
          // document. form.text();
          return false;
        }
      }
       














 });// end of document ready 