function confirmUpload()
{
  window.alert("New Research Output created!");
}

function disableRadioButton()
{
  var radio=document.getElementsByName("review");
  
  for (var i=0, iLen=radios.length; i<iLen; i++) {
  radios[i].disabled = true;
  }
}