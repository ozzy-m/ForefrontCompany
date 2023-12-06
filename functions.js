document.addEventListener('DOMContentLoaded', function() {
    const animationElement = document.querySelector('.animation-container');
    
    // Trigger animation after a short delay (e.g., 500 milliseconds)
    setTimeout(function() {
      animationElement.classList.add('show');
    }, 500);
  });
  document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.disappear-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        this.style.opacity = '0'; // Fading out the button
        this.style.pointerEvents = 'none'; // Disable pointer events to prevent clicking
        setTimeout(() => {
          this.style.display = 'none'; // Hide the button after the transition
        }, 500); // Wait for the transition duration before hiding
      });
    });
  });