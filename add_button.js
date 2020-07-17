//console.log("button js");
var readInput = function(){
  var input = document.getElementById('input1');
  console.log(input.value);
}

var btn2 = document.createElement('button');
btn2.innerText ="btn2";
btn2.onclick = readInput;
var test = document.getElementById('test');
test.appendChild(btn2);
