$(document).ready(function () {
  let clickCount = 0; // Counter to track the number of clicks

  $(".container").click(function () {
    clickCount++; // Increment the click count on every click
    
    if (clickCount === 1) {
      // First click: move the card up
      $(".card").stop().animate(
        {
          top: "-90px", // Move the card up when clicked
        },
        "slow"
      );
    } else if (clickCount === 2) {
      // Second click: change the text and stop the heart from moving
      $(".text").html('Pwede po ba</br>kitang yayain</br>sa Seniors night??'); // Change the text
      $(".text").css("font-size", "18px"); // Reduce font size to fit the text in the card
      // Remove heart animation (no movement for heart)
      // $(".heart").animate(
      //   {
      //     left: "110px", // New horizontal position
      //     top: "137px",  // New vertical position
      //   },
      //   "slow"
      // );
    } else if (clickCount === 3) {
      // Third click: show the options
      $(".options").fadeIn(); // Show the options (buttons or choices)
    }
  });

  // When "Yes" is clicked
  $("#yes").click(function () {
    $("body").addClass("thank-you"); // Change the body background to light whitish
    $(".text").html("Thank you baby Phiaa danda ko hehe, see you later"); // Change the text
    $(".options").fadeOut(); // Hide the options
  });

  // When "No" is clicked
  $("#no").click(function () {
    // Get the viewport width and height
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    
    // Get the width and height of the "No" button
    var buttonWidth = $(this).outerWidth();
    var buttonHeight = $(this).outerHeight();
    
    // Calculate random positions within the viewport, ensuring the button stays within bounds
    var randomX = Math.floor(Math.random() * (windowWidth - buttonWidth)); // Random horizontal position within the window
    var randomY = Math.floor(Math.random() * (windowHeight - buttonHeight)); // Random vertical position within the window

    // Move the "No" button to the new random position
    $(this).css({
      left: randomX + "px",  // Set the new random horizontal position
      top: randomY + "px"    // Set the new random vertical position
    });
  });
});
