document.getElementById('deposit-btn').addEventListener('click', function () {
 const depositField =   document.getElementById('depositField');
 const newdeposit = depositField.value; 
 const newdepositAmount = parseFloat(newdeposit);
//  console.log(typeof newdepositAmount); 

 

 const previousdeposit = document.getElementById('deposit-total');
 const previousdepositString =   previousdeposit.innerText;

 const previousdepositAmount = parseFloat(previousdepositString);
 
  

 
 
 const currentdepositTotal = newdepositAmount + previousdepositAmount;
 previousdeposit.innerText = currentdepositTotal;





 const totalBalance = document.getElementById('total-balance');
 const totalBalanceString = totalBalance.innerText;
 const totalBalanceAmount = parseInt(totalBalanceString);


 const newTOtalBalance = totalBalanceAmount + newdepositAmount;
 totalBalance.innerText = newTOtalBalance;

 depositField.value = '';
})