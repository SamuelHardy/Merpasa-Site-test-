$(document).ready (function() {

  var p1 = $('.bagEquip');
  var p2 = $('.bagMaterial');
  var p3 = $('.autoEquip');
  var p4 = $('.techEquip');

  p1.on('click', function () {
    $(location).attr('href', 'p1.html');
  });

  p2.on('click', function () {
    $(location).attr('href', 'p2.html');
  });

  p3.on('click', function () {
    $(location).attr('href', 'p3.html');
  });

  p4.on('click', function () {
    $(location).attr('href', 'p4.html');
  });

})
