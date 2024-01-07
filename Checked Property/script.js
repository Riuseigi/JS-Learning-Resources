// Checked = property that determines the checked state of an HTML checkbox or radio button element


const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");

const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");
const subResult = document.getElementById("subResult");

mySubmit.onclick = () => {
  if(myCheckbox.checked){
      subResult.textContent = `You are subscribed`
  }
  else{
   subResult.textContent = `You are not subscribed!`
  }
  if(visaBtn.checked){
      paymentResult.textContent = `You are paying Visa`
  }
  else if(masterCardBtn.checked){
   paymentResult.textContent = `You are paying Mastercard`
}
else if(payPalBtn.checked){
   paymentResult.textContent = `You are paying Paypal`
}
else{
   paymentResult.textContent = `You must select payment type`
}
}