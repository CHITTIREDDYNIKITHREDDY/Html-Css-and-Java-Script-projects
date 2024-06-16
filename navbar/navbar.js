window.addEventListener('scroll', function() {
    var menu = document.getElementsByClassName('navbar');
    if (window.scrollY > 50) {
      menu.style.backgroundColor = '#555';
    } else {
      menu.style.backgroundColor = '#333';
    }
  });
  