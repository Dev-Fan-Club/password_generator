function getPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let l = 16;
    let password = '';
    for (let i=0; i<l; i++){
       let randomNumber = Math.floor(Math.random() * chars.length); 
       password += chars.substring( randomNumber, randomNumber + 1);
       
   }
   document.getElementById('password').value = password;
}

 
function copyToClipboard() {
   var copyText = document.getElementById("password");
   copyText.select();
   document.execCommand("copy");
    
}