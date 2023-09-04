function validateform(){
var name=document.myform.name.value;
var phone=Document.myform.value;
if(name==null||name=="")
{
  alert("Name cannot be blank");
  return false;
}
else if(phone.length!=10)
{
  alert("Phone number must be 10 digits");
  return false;
}
function emailvalidation()
  var a=document.myform.email.value;
  if(a.indexOf("@")==-1)
  {
    alert("Please Enter valid email id");
    document.myform.email.focus()
  }

}