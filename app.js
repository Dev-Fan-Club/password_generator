function generatePass() {

    const passField = document.getElementById('show-pass');
      var password = '';
      var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
      for (i=0;i<16;i++) {
        var c = Math.floor(Math.random()*chars.length + 1);
        password += chars.charAt(c);
      }
      if(password.length == 16){
         passField.value = password;
      }
 
};

function copyPassword() {
   let copyText = document.getElementById('show-pass');
   copyText.select();
   document.execCommand("copy");  
};



