$('#clock').countdown('2018/07/17', function(event) {
  $(this).html(event.strftime('%D days till return'));
});
$('#clock2').countdown('2018/07/17', function(event) {
  $(this).html(event.strftime('%Dd'));
});