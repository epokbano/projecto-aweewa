document.addEventListener("DOMContentLoaded", () => {
    
    let balance = parseFloat(localStorage.getItem('balance')) || 100;


    updateBalanceDisplay(balance);

    const betAmountInput = document.getElementById("bet-amount");
    const headsBtn = document.getElementById("heads-btn");
    const tailsBtn = document.getElementById("tails-btn");
    const playBtn = document.getElementById("play-btn");
    const resultDisplay = document.getElementById("result");


    betAmountInput.addEventListener("input", () => {
        const betAmount = parseFloat(betAmountInput.value);
        if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
            playBtn.disabled = true;
        } else {
            playBtn.disabled = false;
        }
    });

   
    headsBtn.addEventListener("click", () => {
        playGame("heads");
    });

    tailsBtn.addEventListener("click", () => {
        playGame("tails");
    });

   
    function playGame(guess) {
        const betAmount = parseFloat(betAmountInput.value);
        if (betAmount <= 0 || betAmount > balance) {
            resultDisplay.textContent = "Invalid bet amount.";
            return;
        }

        
        const coinFlip = Math.random() < 0.5 ? "heads" : "tails";
        const isWin = guess === coinFlip;

     
        if (isWin) {
            balance += betAmount;  
            resultDisplay.textContent = `o chuj wygrales... wyladowalo na ${coinFlip} i wygrales $${betAmount}.`;
        } else {
            balance -= betAmount; 
            resultDisplay.textContent = `lamus! coin byl na ${coinFlip}. przegrales $${betAmount}.`;
        }

        
        localStorage.setItem('balance', balance);
        updateBalanceDisplay(balance);

   
        if (balance <= 0) {
            resultDisplay.textContent += " You're out of money!";
            playBtn.disabled = true;
        }
    }


    function updateBalanceDisplay(balance) {
        const balanceDisplay = document.getElementById("balance-display");
        balanceDisplay.textContent = `Balance: $${balance.toFixed(2)}`;
    }
});