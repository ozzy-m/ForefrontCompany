document.addEventListener('DOMContentLoaded', function() {
    const animationElement = document.querySelector('.animation-container');
    
    // Trigger animation after a short delay (e.g., 500 milliseconds)
    setTimeout(function() {
      animationElement.classList.add('show');
    }, 500);
  });
  