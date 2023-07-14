document.addEventListener('DOMContentLoaded', function() {
  var smoothScrollLinks = document.getElementsByClassName('smooth-scroll');

  for (var i = 0; i < smoothScrollLinks.length; i++) {
    smoothScrollLinks[i].addEventListener('click', function(event) {
      event.preventDefault();

      var targetElement = document.querySelector(this.getAttribute('href'));
      var targetPosition = targetElement.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }
});
