let balance = parseFloat(localStorage.getItem('balance')) || 100; 
function updateBalanceDisplay() {
  const balanceDisplay = document.querySelector(".balance-display2");  
  if (balanceDisplay) {
    balanceDisplay.textContent = `Balance: $${balance.toFixed(2)}`;  
  }
  console.log("Updated balance from localStorage:", balance);  
}

if (isNaN(balance)) {
  balance = 100;
  localStorage.setItem('balance', balance);
}
const openMenu = () => {
  console.log("Menu otwarte!");
  menuContainer.style.display = "block";
};

const closeMenu = () => {
  console.log("Menu zamknięte!");
  menuContainer.style.display = "none";
};

menu.addEventListener("click", () => {
  openMenu();
});

menuClose.addEventListener("click", () => {
  closeMenu();
});

function getBalance() {
  return parseFloat(localStorage.getItem('balance')) || 100;  
}

const zesraj_sie = () => {
  const balanceDisplay = document.querySelector('balance-display2');
  balanceDisplay.textContent = getBalance()
};




function updateBalanceAfterPurchase(amount) {
  balance -= amount; 
  if (balance < 0) {
    balance = 0; 
  }
  localStorage.setItem('balance', balance); 
  updateBalanceDisplay(); 
}

if (typeof getBalance === 'undefined') {
  console.error("getbalance NIE MA KURWA");

} else {
  console.log('JEST JEST KLURWA')
}
console.log("balance:", localStorage.getItem('balance'));


document.addEventListener("DOMContentLoaded", function() {
  updateBalanceDisplay();
});


window.getBalance = () => getBalance;
window.updateBalanceAfterPurchase = updateBalanceAfterPurchase;
