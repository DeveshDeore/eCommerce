// add to cart and open new page


let product = document.getElementById("product1");

document.addEventListener("DOMContentLoaded", function() {

    const cartButtons = document.querySelectorAll(".cart");
    const addtocart = document.getElementById("add-to-cart");

    cartButtons.forEach((button) => {
        button.addEventListener("click", () => {

            alert("Item added to cart!");
            window.open("sproduct.html");
        });
    });

    addtocart.addEventListener("click", () => {

        alert("Item added to cart!");
        window.open("cart.html");
    });



    // Change image 

    var MainImg = document.getElementById("MainImg");
    var smallimg = document.getElementsByClassName("small-img");

    for (let i = 0; i <= 10; i++) {
        smallimg[i].onclick = function() {
            MainImg.src = smallimg[i].src;
        }
    }



});


// Loder 
function loadMap() {
    const iframe = document.querySelector('iframe');
    const loader = document.getElementById('loader');
    const mapContainer = document.getElementById('map-container');

    // Polling mechanism to check if iframe content has loaded
    const interval = setInterval(() => {
        if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
            clearInterval(interval); // Stop polling
            loader.style.display = 'none'; // Hide loader
            mapContainer.style.display = 'block'; // Show map
        }
    }, 1000); // Check every 100ms
}

window.onload = loadMap;