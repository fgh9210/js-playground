//console.log("arr_calculation");
var arr = [];
var sum = 0;


var readArr = function() {
  var arr1 = document.getElementById('input1');
  arr = arr1.value.split(" ");
  console.log(arr);

  for(var i =0 ; i < arr.length ; i++){
    if(i%2 === 0){
      arr[i] = Number(arr[i]);
      console.log(arr[i]);
    }
  }

  calculation(arr);
  returnResult();
}

var calculation = function(arr){
  //arr[0], arr[2]-> 숫자
  //arr[1], arr[3]-> 특수문자
  sum = arr[0];
  for(var i =0 ; i < arr.length ; i++){
    if(i%2 === 1){
      switch (arr[i]) {
        case "+":
          sum += arr[i+1];
          break;
        case "-":
          sum -= arr[i+1];
          break;
        case "*":
          sum *= arr[i+1];
          break;
        case "/":
          sum = Math.floor(sum / arr[i+1]); //소수점 버림
          break;
      }//switch
    }//if
  }//for
  //document.write("연산 값은 :" + sum);
}

var returnResult = function () {
  ret = document.getElementById('result');
  ret.innerHTML = "연산 값은 : " + sum;
}
