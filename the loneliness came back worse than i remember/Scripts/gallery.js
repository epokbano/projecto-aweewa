document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("gallery-container");
  
    
    const purchasedProducts = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
  
    
    function updateGallery() {
      galleryContainer.innerHTML = ''; 
      purchasedProducts.forEach((image, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "gallery-item";
        productDiv.innerHTML = `
          <img src="${image}" alt="Purchased Item">
          <button class="sell-btn" data-index="${index}">Sell</button>
        `;
        galleryContainer.appendChild(productDiv);
      });
    }
  
    
    galleryContainer.addEventListener("click", function(event) {
      if (event.target.classList.contains("sell-btn")) {
        const index = event.target.getAttribute("data-index");
        const image = purchasedProducts[index];
  
        
        purchasedProducts.splice(index, 1);
        localStorage.setItem("purchasedProducts", JSON.stringify(purchasedProducts)); 
  
       
        updateBalanceAfterPurchase(-10); 
  
       
        updateGallery();
        console.log(`${image} has been sold!`);
      }
    });
  
    
    updateGallery();
  });