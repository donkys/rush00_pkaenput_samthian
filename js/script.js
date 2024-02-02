$(document).ready(function () {
  var typingWords = ["Pkaenput.", "Samthian.", "Developer!"];
  var typingIndex = 0;
  var charIndex = 0;
  var typingSpeed = 100;
  var deletingSpeed = 50;
  var fixedText = "Hello Pisciner! I'm ";

  function typeWriter() {
    if (charIndex < typingWords[typingIndex].length) {
      $("#typing-effect").text(
        fixedText + typingWords[typingIndex].substring(0, charIndex + 1)
      );
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      setTimeout(deleteText, 2000);
    }
  }

  function deleteText() {
    if (charIndex > 0) {
      $("#typing-effect").text(
        fixedText + typingWords[typingIndex].substring(0, charIndex - 1)
      );
      charIndex--;
      setTimeout(deleteText, deletingSpeed);
    } else {
      typingIndex = (typingIndex + 1) % typingWords.length;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  $(".hamburger-menu").click(function () {
    $(".nav-menu").toggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 850) {
      $(".nav-menu").show();
    }
  });

  typeWriter();
});
