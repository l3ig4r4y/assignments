var message = '';
var checks  = 0;
var successmsg = 'Successful Registration!';

function validateUserID() 
{
    var user =  document.getElementById("thisUserID").value;
    var response1 = "User ID should not be empty\n";
    var response2 = "User ID should be between 5 and 12 characters\n";
    if  (   user.length == 0) 
    {   message = message.concat(response1);}
    else if  (   user.length > 0 && !(user.length>=5 && user.length<=12)) 
    {   message = message.concat(response2);}
    else
    {   checks++; return true;}
}

function validateUserPassword() 
{
    var pass =   document.getElementById("thisPass").value;
    var response1 = "User Password should not be empty\n";
    var response2 = "User Password should be between 7 and 12 characters\n"
    if  (   pass.length == 0) 
    {   message = message.concat(response1);}
    else if  (   pass.length > 0 && !(pass.length>=7 && pass.length<=12)) 
    {   message = message.concat(response2);}
    else
    {   checks++; return true;}   
}

function validateUserEmail()
{   
    var email =  document.getElementById("thisUserEmail").value;
    var mailformat  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var response1 =  "Email should not be empty\n";
    var response2 =  "You have entered an invalid email format!\n";
    if( email.length == 0)
    {   message = message.concat(response1);}
    else if  (  email.length>0 && !(email.match(mailformat)))
    {   message = message.concat(response2);}
    else
    {   checks++; return true;}
}

function validateUserName()
{
    var name = document.getElementById("thisUsername").value;
    var response1 = "Name should not be empty\n";
    var response2 = "Name should have alphabet characters only!\n";
    var letters = /^[A-Za-z]+$/;
    if  (   name.length == 0) 
    {   message = message.concat(response1);}
    else if (name.length > 0 && !(name.match(letters)))
    {   message = message.concat(response2);}
    else{checks++; return true;}
}

function validate()
{
    validateUserID();
    validateUserPassword();
    validateUserName();
    validateUserEmail();
     if  (   checks >= 4) 
    {   message = message.concat(successmsg);}
    alert(message);
}