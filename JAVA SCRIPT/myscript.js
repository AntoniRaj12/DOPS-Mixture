var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    ++counter;
    if(counter > 6){
        counter =1;
    }
}, 3500);

/*login page*/

function lhg(){
    var wronguser="Enter user as Antoni"
    var wrongpass="Enter user as Antoni@123"
    var user=document.getElementById('user').value
    var pass=document.getElementById('pass').value
    if(user=='Antoni'){
        if(pass=='Antoni@123'){
            window.location.href="./HTML/Homepage.html"
        }else{
            alert(wrongpass)
        }
    }else{
        alert(wronguser)
    }
}

/* show password */

function showpass(){
    var show=document.getElementById('pass')
    if(show.type=='password'){
        show.type='text'
    }else{
        show.type='password'
    }
}

/* show confirm password */

function showpass2(){
    var show=document.getElementById('confirmpass')
    if(show.type=='password'){
        show.type='text'
    }else{
        show.type='password'
    }
}

//forgot validation
function forgotvalidate(){
    var wrong="Enter Correct mobile No."
var Phone=document.getElementById("phoneno").value 
            if((Phone>=6000000000)&&(Phone<=9999999999)){
                window.location.href="../HTML/resetverification.html"
            }else{
                alert(wrong)
            }
}
//signup validation

function signupvalidate()
    {
        var wrongfinal="Invalid details"
        var wrongphone="Enter crt Mobile no."
        var wrongmail="Enter crt Email id"
        var wrongconpass="Enter same as Password"
        var wrongpassword="Enter Atleast one Upper case and Atleat one Lower case and one Number and one Special Character and length should be 8 to 16 For ex.(Example@12345)"
        var Phone=document.getElementById("phone").value 
            var flagPhone=false 
            if((Phone>=6000000000)&&(Phone<=9999999999)){
                flagPhone=true
            }else{
                alert(wrongphone)
            }

            // Email Validation
            var Mail=document.getElementById("Email").value
            var flag=true
            var count=0
            var flagMail=false 
            for(var i=0;i<Mail.length;i++){
                var char=Mail[i]
                if((char>='A')&&(char<='Z'))
                {
                    flag=false
                }
                if(char=='@'){
                    count++
                }
            }
            if((flag==true)&&(count==1)){
                flagMail=true
            }else{
                alert(wrongmail)
            }

            // Password Validation
            var Password=document.getElementById("pass").value 
            var upper=0
            var lower=0
            var Num=0
            var special=0
            var flagPassword=false
            for(var i=0;i<Password.length;i++){
                var char=Password[i]
                if((char>='A')&&(char<='Z'))
                {
                    upper++
                }else if((char>='a')&&(char<='z'))
                {
                    lower++
                }else if((char>='0')&&(char<='9'))
                {
                    Num++
                }else
                {
                    special++
                }
            }
            if((Password.length>=8)&&(Password.length<=16)&&(upper>=1)&&(lower>=1)&&(Num>=1)&&(special>=1))
            {
                flagPassword=true
            }else{
                alert(wrongpassword)
            }


            // Confirm Password
            var Confirm=document.getElementById("confirmpass").value 
            var flagconfirm=false
            if(Password==Confirm){
                flagconfirm=true
            }else{
                alert(wrongconpass)
            }


            // Final Validation
            if((flagPhone==true)&&(flagMail==true)&&(flagPassword==true)&&(flagconfirm==true)){
                window.location.href="../HTML/verification.html"
            }else{
                alert(wrongfinal)
            }
    }

// Language change

function language(){
    var userchoice=document.getElementById("choice").value
    if(userchoice=="Tamil"){
        window.location.href="../HTML/tamilmovies.html"
    }else if (userchoice=="Malayalam") {
        window.location.href="../HTML/malayalammovie.html"
    } else {
        window.location.href="../HTML/English.html"
    }
}

//reset password
function resetpassword(){
        var wrongconpass="Enter same as Password"
        var wrongpassword="Enter Atleast one Upper case and Atleat one Lower case and one Number and one Special Character and length should be 8 to 16 For ex.(Example@12345)"
            var Password=document.getElementById("pass").value 
            var upper=0
            var lower=0
            var Num=0
            var special=0
            var flagPassword=false
            for(var i=0;i<Password.length;i++){
                var char=Password[i]
                if((char>='A')&&(char<='Z'))
                {
                    upper++
                }else if((char>='a')&&(char<='z'))
                {
                    lower++
                }else if((char>='0')&&(char<='9'))
                {
                    Num++
                }else
                {
                    special++
                }
            }
            if((Password.length>=8)&&(Password.length<=16)&&(upper>=1)&&(lower>=1)&&(Num>=1)&&(special>=1))
            {
                flagPassword=true
            }else{
                alert(wrongpassword)
            }


            // Confirm Password
            var Confirm=document.getElementById("confirmpass").value 
            var flagconfirm=false
            if(Password==Confirm){
                flagconfirm=true
            }else{
                alert(wrongconpass)
            }

            if((flagPassword==true)&&(flagconfirm==true)){
                window.location.href="../index.html"
            }else{
                alert(wrongfinal)
            }
        }