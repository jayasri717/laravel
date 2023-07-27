
var name=document.getElementById('name-error');
var phone=document.getElementById('phone-error');
var email=document.getElementById('email-error');
var password=document.getElementById('password-error');
var password1=document.getElementById('password2-error');
var message=document.getElementById('message-error');
var submit=document.getElementById('submit-error');

function validateName()
{
var name=document.getElementById("contact-name");
if(name.value=="")
{
document.getElementById("name-error").innerHTML="*Name is blank";
name.focus();
name.style.borderBottom="solid red 3px";
return false;
}
if(name.value.length<3)
{
document.getElementById("name-error").innerHTML="*Characters should not less than 3";
name.focus();
name.style.borderBottom="solid red 3px";
return false;
}

document.getElementById("name-error").innerHTML='<i class="fa-solid fa-circle-check"></i>';
name.style.borderBottom="solid green 3px";
 return true;
}

function validatePhone()
{
var phone=document.getElementById("contact-phone");
if(phone.value=="")
{
document.getElementById("phone-error").innerHTML="*Please provide valid phone";
phone.focus();
phone.style.borderBottom="solid red 3px";
return false;
}
if(phone.value.length>10||phone.value.length<10)
{
document.getElementById("phone-error").innerHTML="*Please provide valid phone";
phone.focus();
phone.style.borderBottom="solid red 3px";
return false;
}
document.getElementById("phone-error").innerHTML='<i class="fa-solid fa-circle-check"></i>';
phone.style.borderBottom="solid green 3px";
 return true;
}

function validateEmail()
{
var email=document.getElementById("contact-email");
if(email.value=="")
{
document.getElementById("email-error").innerHTML="*Please provide valid email";
email.focus();
email.style.borderBottom="solid red 3px";
return false;
}
document.getElementById("email-error").innerHTML='<i class="fa-solid fa-circle-check"></i>';
email.style.borderBottom="solid green 3px";
 return true;
}

function validatePassword()
{
var password=document.getElementById("contact-Password");
if(password.value==""|| password.value.length<8)
{
document.getElementById("password-error").innerHTML="please set minimum 8 digit password";
password.focus();
password.style.borderBottom="solid red 3px";
return false;
}
document.getElementById("password-error").innerHTML='<i class="fa-solid fa-circle-check"></i>';
password.style.borderBottom="solid green 3px";
 return true;
}

function validatePassword2()
{
var password=document.getElementById("contact-Password");
var password1=document.getElementById("contact-Password2");
if(password.value != password1.value)
{
document.getElementById("password2-error").innerHTML="Password must be same";
password1.focus();
password1.style.borderBottom="solid red 3px";
return false;
}
else(password1==password)
{
document.getElementById("password2-error").innerHTML='<i class="fa-solid fa-circle-check"></i>';
password1.style.borderBottom="solid green 3px";
return true;
 }
}


function validateForm()
{
if(!validateName() ||!validatePhone() || !validateEmail() || !validateMessage() || !validatePassword() || !validatePassword2())
    submitError.style.display="block";
    submitError.innerHTML='please fix error to submit';
    setTimeout(function(){submitError.style.display="none";}, 3000);
return false;

}







