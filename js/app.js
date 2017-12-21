$(document).ready(function(){
  // Añadiendo la clase 'purple' a los elementos 'li'
  $('li:first-child').addClass('purple');
  
  // Añadiendo la clase 'yellow' al elemento con el id 'info'
  $('li:last-child').addClass('yellow');

  // Añadiendo la clase 'red' a los elementos con la clase 'title'
  $('.title:nth-child(1)').addClass('red');
})