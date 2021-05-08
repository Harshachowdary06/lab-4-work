function add() {

  var x =parseInt(document.getElementById("1").value);
  var y =parseInt(document.getElementById("2").value);
  var z = x+y;
  window.alert(x+"+"+y+"="+z);
  document.getElementById("result").innerHTML = "SUm is"+z;
}
function sub() {

    var x =parseInt(document.getElementById("1").value);
    var y =parseInt(document.getElementById("2").value);
    var z = x-y;
    window.alert(x+"-"+y+"="+z);
    document.getElementById("result").innerHTML = "SUb value  is"+z;
}
function mul() {

    var x =parseInt(document.getElementById("1").value);
    var y =parseInt(document.getElementById("2").value);
    var z = x*y;
    window.alert(x+"*"+y+"="+z);
    document.getElementById("result").innerHTML = "multiplied is"+z;
}
function div() {

    var x =parseInt(document.getElementById("1").value);
    var y =parseInt(document.getElementById("2").value);
    var z = x/y;
    window.alert(x+"/"+y+"="+z);
    document.getElementById("result").innerHTML = "division is"+z;
}
function rem() {

    var x =parseInt(document.getElementById("1").value);
    var y =parseInt(document.getElementById("2").value);
    var z = x%y;
    window.alert(x+"%"+y+"="+z);
    document.getElementById("result").innerHTML = "remainder is"+z;
}
