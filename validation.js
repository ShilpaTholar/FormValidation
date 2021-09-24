function formValidation()
{
var name = document.register.name;
var password = document.register.password;
var email = document.register.email;
var pass=document.register.pass;
var gender = document.register.gender;
var size = document.register.size;
var color = document.register.color;
var address = document.register.address;

if(password_validation(password,7,12))
{
if(allLetter(name))
{
 if(alphanumeric(address))
 { 
      if(validate_email(email))
      {
         if(match_password(password,pass))
         {
             if(selectcolor(color))
             {
                     if(selectsize(size))
                     {
                           if(check_gender(gender))
                           {
                                var d = new Date();
                                var new_window=window.open("", "_self");
                                new_window.document.write("<b>Order Confirmed<b>");
                                new_window.document.write("<br><b>Name</b>: "+ name.value);
                                new_window.document.write("<br><b>Email</b>: "+ email.value);
                                new_window.document.write("<br><b>Date of order</b>: "+d.toDateString());

                           }
                     }
             }
         }
      }
 }
} 
}


}
function password_validation(password,min,max)
{
        var password_len = password.value.length;
        if (password_len == 0 || password_len > max || password_len < min)
        {
                alert("Password should not be empty / length be between "+min+" to "+max);
                password.focus();
                return false;
        }
        
        return true;
}
function allLetter(name)
{ 
        var letters = /^[A-Za-z]+$/;
        if(name.value.match(letters))
        {
             return true;
        }
        else
        {
            alert('Name must have alphabet characters only');
            name.focus();
            return false;
        }
}
function alphanumeric(address)
{ 
        var letters = /^[0-9a-zA-Z]+$/;
        if(address.value.match(letters))
        {
                return true;
        }
        else
        {
                alert('User address must have alphanumeric characters only');
                address.focus();
                return false;
        }
}
function validate_email(email)
{
        var x=email.value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
        {  
                alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
                return false;  
        }  
        else
        {
          return true;
        }
}
function match_password(password,pass)
{
        console.log(password.value);
        console.log(pass.value);
        if(password.value==pass.value)
        {  
           return true;  
        }  
        else{  
                alert("password must be same!");  
                password.focus();
                return false;  
        }  
         
}

function selectcolor(color)
{
        if(color.value == "Select")
        {
                alert('Select the colour of the Tshirt');
                color.focus();
                return false;
        }
        else
        {
                 return true;
        }
}
function selectsize(size)
{
        if(size.value == "Select")
        {
                alert('Select the size of the Tshirt');
                size.focus();
                return false;
        }
        else
        {
                 return true;
        }
}
function check_gender(gender){

        var gender = document.getElementsByName('gender');
        var genValue = false;

        for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
            alert("Please Choose the gender");
            return false;
        }
        else{
                return true;
        }


    }



