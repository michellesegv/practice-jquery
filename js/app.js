$(document).ready(function(){
  // Cambiando el contenido al primer elemento li
  $('li:first-child').text('Soy el primer li');
  
  // Cambiando el contenido del ultimo elemento li
  $('li:last-child').html('Soy el ultimo li');

  // Añadiendo la clase 'red' al primer elemento con la clase 'title'
  $('.title:nth-child(1)').addClass('red');
})