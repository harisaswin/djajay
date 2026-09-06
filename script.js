```javascript
// ================= SEARCH =================

function searchProducts() {

    const input = document.getElementById("searchInput");

    const query = input.value.trim();

    if (query === "") {
        alert("Please enter something to search.");
        return;
    }

    alert("Searching for: " + query);
}


// ================= HERO SEARCH =================

function heroSearch() {

    const input = document.getElementById("heroSearch");

    const query = input.value.trim();

    if (query === "") {
        alert("What are you looking for?");
        return;
    }

    alert("Searching for: " + query);
}


// ================= CATEGORY =================

function filterCategory(category) {

    alert("Showing " + category + " listings.");

}


// ================= VIEW ALL =================

function showAll() {

    window.scrollTo({
        top: document.querySelector(".products-section").offsetTop,
        behavior: "smooth"
    });

}


// ================= SELL =================

function sellItem() {

    alert("Sell Item page coming soon!");

}


// ================= FAVORITES =================

const hearts = document.querySelectorAll(".heart");

hearts.forEach(function (heart) {

    heart.addEventListener("click", function (event) {

        event.stopPropagation();

        if (heart.textContent === "♡") {

            heart.textContent = "♥";

        } else {

            heart.textContent = "♡";

        }

    });

});


// ================= PRODUCT CLICK =================

const products = document.querySelectorAll(".product-card");

products.forEach(function (product) {

    product.addEventListener("click", function () {

        const title = product.querySelector("h3").textContent;

        alert("Opening: " + title);

    });

});
```
