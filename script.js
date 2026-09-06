```javascript
// =====================================================
// SEARCH
// =====================================================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function performSearch() {

    const query = searchInput.value.trim();

    if (!query) {

        searchInput.focus();

        return;
    }

    alert(`Searching for "${query}"`);

}

searchButton.addEventListener("click", performSearch);

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        performSearch();
    }

});


// =====================================================
// POPULAR SEARCHES
// =====================================================

const popularButtons =
    document.querySelectorAll(".popular-searches button");

popularButtons.forEach(button => {

    button.addEventListener("click", () => {

        searchInput.value = button.textContent;

        performSearch();

    });

});


// =====================================================
// FAVORITES
// =====================================================

const favorites =
    document.querySelectorAll(".favorite");

favorites.forEach(button => {

    button.addEventListener("click", function(event) {

        event.stopPropagation();

        this.classList.toggle("active");

        if (this.classList.contains("active")) {

            this.textContent = "♥";

        } else {

            this.textContent = "♡";

        }

    });

});


// =====================================================
// LISTING CLICK
// =====================================================

const listings =
    document.querySelectorAll(".listing-card");

listings.forEach(card => {

    card.addEventListener("click", function() {

        const title =
            this.querySelector("h3").textContent;

        console.log("Opening listing:", title);

        alert(`Opening "${title}"`);

    });

});


// =====================================================
// SELL BUTTONS
// =====================================================

const sellButtons =
    document.querySelectorAll(".sell-btn, .large-sell");

sellButtons.forEach(button => {

    button.addEventListener("click", function() {

        alert("Sell an item page coming soon!");

    });

});


// =====================================================
// CATEGORY BUTTONS
// =====================================================

const categories =
    document.querySelectorAll(".category-card");

categories.forEach(category => {

    category.addEventListener("click", function() {

        const name =
            this.querySelector("strong").textContent;

        alert(`Showing ${name} listings`);

    });

});


// =====================================================
// MOBILE MENU
// =====================================================

const mobileMenu =
    document.getElementById("mobileMenu");

mobileMenu.addEventListener("click", function() {

    alert("Mobile navigation coming soon!");

});
```
