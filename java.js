function pop() {
  var x = document.getElementById("name").value;
  document.getElementById('data').innerHTML = x;
  window.alert("Hey!"+"  "+ x );

}

function printEvenNums(){
  var start = parseInt(document.getElementById("start").value);
  var end = parseInt(document.getElementById("end").value);

  var evenNums = "<br>Even Numbers:<br>";

  for(i=start; i<=end; i++){
    if(i % 2 == 0){

        evenNums += i + "<br>";
    }
  }

  document.getElementById("result").innerHTML = evenNums;
}

function Primeornot(){
  var x = parseInt(document.getElementById("prim").value);

  if (x % 2 ==0 ) {
    window.alert(x +" " +"is even number!")
  } else {
    window.alert(x + +" " + "is not even number!")
  }
}
