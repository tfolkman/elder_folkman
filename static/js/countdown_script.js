$('#clock').countdown('2018/08/02', function(event) {
  $(this).html(event.strftime('%D days till return'));
});
$('#clock2').countdown('2018/08/02', function(event) {
  $(this).html(event.strftime('%D d'));
});