$(document).ready(function(){
  // Añadiendo la clase 'purple' al primer elemento li
  $('li:first-child').addClass('purple');
  
  // Añadiendo la clase 'yellow' al ultimo elemento li
  $('li:last-child').addClass('yellow');

  // Añadiendo la clase 'red' al primer elemento con la clase 'title'
  $('.title:nth-child(1)').addClass('red');
})