let message=["✨welcome to our fashion store!",
            "💖Discover your Perfect Style!",
            "🎉Special Offers Availble!",
            "🛍️Shop Your Favourite OutFits!"];
            let index=0;
            setInterval(function(){
                index=(index+1)%message.length;
                document.getElementById("text").innerHTML=message[index];
            },1000);
            function openHome(){
    window.location.href="index.html";
}

function openDress(){
    window.location.href="dress.html";
}
function openAccessories(){
    window.location.href="accessories.html";
}

function openFootwear(){
    window.location.href="footwear.html";
}
function openBeauty(){
    window.location.href="Beauty.html";
};
function openlogin(){
    window.location.href="login.html";
}
function openaboutus(){
    window.location.href="about.html";
}

function opencontactus(){
    window.location.href="contact.html";
}
function openaboutus(){
    window.location.href="about.html";
}
function openloginus(){
    window.location.href="login.html";
}
function openCart() {
    window.location.href = "cart.html";
}
function openWishlist() {
    window.location.href = "wishlist.html";
}

let image = [
    "images/dress1.jpeg",
    "images/dress2.jpeg",
    "images/dress3.jpeg",
    "images/dress4.jpeg"
];

let imageIndex = 0;

setInterval(function() {
    imageIndex = (imageIndex + 1) % image.length;

    document.getElementById("slide").src = image[imageIndex];

}, 1000);
function searchProduct() {

let product = document.getElementById("searchInput")
                   .value.trim().toLowerCase();

let searchMessage = document.getElementById("searchMessage");

if (product === "") {
    searchMessage.innerHTML = "Please enter a product name! 💗";
    return;
}

searchMessage.innerHTML = "";

if (
    product.includes("dress") ||
    product.includes("saree") ||
    product.includes("traditional") ||
    product.includes("partywear") ||
    product.includes("casual")
) {
    openDress();
}

else if (
    product.includes("accessories") ||
    product.includes("jewellery") ||
    product.includes("jewelry") ||
    product.includes("hair accessory")
) {
    openAccessories();
}

else if (
    product.includes("footwear") ||
    product.includes("shoe") ||
    product.includes("shoes") ||
    product.includes("heel") ||
    product.includes("heels") ||
    product.includes("flat") ||
    product.includes("slipper")
) {
    openFootwear();
}

else if (
    product.includes("beauty") ||
    product.includes("makeup") ||
    product.includes("skincare") ||
    product.includes("skin care") ||
    product.includes("perfume")
) {
    openBeauty();
}

else {
    searchMessage.innerHTML = "No matching category found! 😔";
}

}