var email = document.getElementById('field1');
var err1 = document.getElementById('err1');
var pwd = document.getElementById('field2');
var err2 = document.getElementById('err2');
var phn = document.getElementById('field3');
var err3 = document.getElementById('err3')

var regex = /^([A-Za-z0-9\-#_.]+)@*([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/;

var pass = /^([A-Za-z0-9])$/;

var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

console.log(email);

function validateEmail(){
    //alert("wrong email")
    if(email.value.trim()==''){
        err1.innerText="Field cannot be empty";
        email.style.border='3px solid red'
        return false
    }
    else if(!email.value.match(regex)){
        err1.innerText="Email is not in the correct Format";
        email.style.border='3px solid red';
        return false
    }

    else{
        err1.innerText="";
        email.style.border='3px solid green';

        return true

    }

}





function validatePassword(){
 
    if(pwd.value.trim()==''){
        err2.innerText="Field cannot be empty";
        pwd.style.border='3px solid red'
        return false
    }

    else if(pwd.value.length<8){
        
        pwd.style.border='3px solid red';
        err2.innerText="Password should be greater than 7";
       return false
    }

    else if(pwd.value.match(pass)){
    err2.innerText="Password is not in the correct Format";
    pwd.style.border='5px solid red';
    return false
    }


   else{
        err2.innerText="";
        pwd.style.border='3px solid green';

        return true
 
    }

}





function validatePhone(){
    if(phn.value.trim()==''){
        err3.innerText="Field cannot be empty";
        phn.style.border='5px solid red'
        return false
    }
    else if(phn.value.length<10){
        
        phn.style.border='3px solid red';
        err3.innerText="Number should contain 10 digits";
       return false
    }

    else if(phn.value.match(phone)){
        err3.innerText="Number is not in the correct Format";
        phn.style.border='5px solid red';
        return false
        }


    else{
        err3.innerText="";
        phn.style.border='3px solid green';

        return true


}
}




function verify(){
    if(!validateEmail()||!validatePassword()||!validatePhone()){
        return false
    }
    else{
        return true
    }
}



