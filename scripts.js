document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            "name": "Fitness Ring",
            "description": "Track your fitness and heart rate.",
            "image": "3.png"
        },
        {
            "name": "Sleep Monitor Ring",
            "description": "Analyze your sleep patterns.",
            "image": "6.png"
        },
        {
            "name": "Health Monitor Ring",
            "description": "Monitor your health metrics.",
            "image": "5.png"
        }
    ];

    const productList = document.getElementById("product-list");

    if (productList) {
        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                    </div>
                </div>
            `;
            productList.appendChild(card);
        });
    } else {
        console.error("Elementillä 'product-list' ei ole löydetty!");
    }
});
