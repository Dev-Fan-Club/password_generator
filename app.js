function getPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = 16;
    let password = '';
    for (let i=0; i<length; i++){
       let randomNumber = Math.floor(Math.random() * chars.length); 
       password += chars.substring( randomNumber. randomNumber + 1);
       
   }
   document.getElementById('password').value = password;
}