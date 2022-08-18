document.getElementById('withdraw-btn').addEventListener('click', function() {


  const withdrawField = document.getElementById('withdrawField');
  const withdrawString = withdrawField.value;
  const withdrawAmount = parseFloat(withdrawString);

  const withdrawElement = document.getElementById('withdraw-balance');
  const withdrawTotalString = withdrawElement.innerText;
  const withdrawTotalAmount = parseFloat(withdrawTotalString);


  const currentWithTotal = withdrawTotalAmount + withdrawAmount;
  withdrawElement.innerText = currentWithTotal;




  
  
  
  
  
  
  const previosTOtalBalance =  document.getElementById('total-balance');
  const previosTOtalBalanceString = previosTOtalBalance.innerText;
  const previostotalBalanceAmount =  parseFloat(previosTOtalBalanceString);
  // console.log(totalBalance);
  const newTOtalBalance = previostotalBalanceAmount - withdrawAmount;
  previosTOtalBalance.innerText = newTOtalBalance;
  
  
  withdrawField.value = ''; 
} )