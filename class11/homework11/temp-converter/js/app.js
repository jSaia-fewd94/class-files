$('#submit').click(function(){
  alert(parseInt($('#temp').val()) - 32 / 1.8);
  if (temp > 70){
    alert('It is hot!');
  }
  else if (temp < 70){
    alert('It is cold!');
  }
});