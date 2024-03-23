function sendotp(){
    const email=document.getElementById('email');
    const otpverify=document.getElementsByClassName('otpverify')[0];

    let otp_val=Math.floor(Math.random() * 10000);

    let emailbody= `<h2>your otp is</h2>${otp_val}`;
    Email.send({
        SecureToken : "47d8a887-faa9-49dc-bec9-4ae38ac78b03",
        To : email.value,
        From : "abhilesh14984@gmail.com",
        Subject : "This is the subject",
        Body : emailbody,
    }).then(


      message => {
            if(message === "OK"){
                alert("Otp sent to your email " + email.value);

                otpverify.style.display="flex";
                const otp_inp=document.getElementById('otp_inp');
                const otp_btn=document.getElementById('otp-btn');

                otp_btn.addEventListener('click',() => {
                    if(otp_inp.value == otp_val){
                        alert("Email address verified.....");
                    }
                    else {
                        alert("Invalid otp");
                    }
                })

            }
      }
)
.catch(err=>{
    console.log("Error : ", err);
});
}