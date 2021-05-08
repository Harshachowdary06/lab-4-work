function namechecking()
{
a=document.getElementById("t1").value;
if(a.search(/^[A-Z][a-z]+ (\s?[A-Z][a-z]*)*$/)==0)
alert("name is valid");
else
alert("not valid")
 }
function numberchecking()
 {
b=document.getElementById("t2").value;
 if(b.search(/^121810312(00[1-9]|0[1-5][0-9]|06[0-6])$/)==0)
alert("number is valid");
else
alert("number not valid")
}
