const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[type="search"]');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value;
    window.location.href = `http://localhost:63342/untitled4/product-detail.html?q=${searchTerm}`;
});

document.querySelector('.read-more-button').addEventListener('click', function() {
    window.location.href = 'coming-soon.html';
});

document.getElementById("addToCartButton").addEventListener("click", function () {
    alert("Product added to cart! (This is a placeholder. No actual order process is implemented.)");
});

