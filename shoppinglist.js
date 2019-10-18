function addMe(){
  if (document.getElementsByTagName('li').length<7){
    var newList = document.createElement('li');
    var newText= document.createTextNode(document.getElementById('userShit').value);
    newList.appendChild(newText);
    var position = document.getElementsByTagName('ol')[0];
    position.appendChild(newList);
    document.getElementById('userShit').value = "";
  }
  else{
    var ful = document.getElementById('ful').innerHTML = "LIST IS FULL";
    return;
  }
}
function removestuff(){
  var personNum = document.getElementById('remnum').value;
  var y = parseInt(personNum);
  var child = document.getElementsByTagName('li')[y - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('ful').innerHTML="";
}