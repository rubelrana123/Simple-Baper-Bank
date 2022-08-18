document.getElementById('btn').addEventListener('click', function() {
  const email = document.getElementById('emailField').value;
  const password =   document.getElementById('passwordfield').value;
  

  if( email ==='rubelrana@gmail.com' && password === '400310'){
    // console.log(email, password);
    window.location = 'bank.html'
    
  }
  else {
    console.log('not valllid')
  }

})