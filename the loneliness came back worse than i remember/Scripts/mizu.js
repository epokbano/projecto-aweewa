const dialogues = [
  "The bells are tolling more each day...",
  "I wonder if Ena likes me still...",
  "Do I really belong here...?",
  "I'm so afraid..."
];
const interactable =[
  "What are you even doing here...?",
  "Leave me alone... Please...",
  "Please... Stop...",
  "Ahh... I want to dissapear...",
]

document.addEventListener("DOMContentLoaded", () => {
  const dialogueBox = document.getElementById("dialogue-box");
  const shopOption = document.getElementById("shop-option");
  const greetingsOption = document.getElementById("greetings-option");

 
  function changeDialogue() {
    const randomDialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
    if (dialogueBox) {
      dialogueBox.innerText = `* ${randomDialogue}`;
    }
  }

 
  if (shopOption) {
    shopOption.addEventListener("click", () => {
      window.location.href = "insideshop.html";
    });
  }

  if (greetingsOption) {
    greetingsOption.addEventListener("click", () => {
      if (dialogueBox) {
        const randomDialogue2 = interactable[Math.floor(Math.random() * interactable.length)];
        dialogueBox.innerText = `* ${randomDialogue2}`;
      }
    });
  }

  
  changeDialogue();
  setInterval(changeDialogue, 3000); 
});
