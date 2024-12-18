updateBalanceDisplay()

if (typeof getBalance === 'undefined') {
    console.error("getBalance is not defined!");
  } else {
    console.log("getBalance is available.");
  }
  
 
  const products = [
    { name: "WhatsappMizu", price: 15, image: "Style/Img/wasapmizuki.jpg" },
    { name: "Mizu6", price: 15, image: "Style/Img/mizu6.jpg" },
    { name: "mizu25", price: 5, image: "Style/Img/skibidimizuki.jpg" },
    { name: "Card", price: 50, image: "Style/Img/mizu5card.jpg" },
    { name: "The Bell Itself", price: 30, image: "Style/Img/mizubell.jpg" }
  ];
  
  const productList = document.getElementById("product-list");
  
 
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button class="buy-btn">Buy Now</button>
    `;
    productList.appendChild(productDiv);
  
    const buyButton = productDiv.querySelector(".buy-btn");

     buyButton.addEventListener("click", function() {
    const balance = getBalance();  

    if (balance >= product.price) {
      alert(`kupiles "${product.name}" za $${product.price}. :D ! ! ! `);

     
      window.updateBalanceAfterPurchase(product.price);

      
      let purchasedProducts = JSON.parse(localStorage.getItem("purchasedProducts")) || [];
      purchasedProducts.push(product.image);
      localStorage.setItem("purchasedProducts", JSON.stringify(purchasedProducts));
    } else {
      alert("biedak");
    }
    });
  });

  if (typeof getBalance === 'undefined') {
    console.error("getbalance NIE MA KURWA");
  
  } else {
    console.log('JEST JEST KLURWA')
  }
  console.log("balance:", localStorage.getItem('balance'));