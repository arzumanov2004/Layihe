const div = document.getElementById('wishlistDiv')

function getWishlist() {
    div.innerHTML = ''
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item,index) =>{
        const box = document.createElement('div')
        box.className = 'myBox row'
        box.innerHTML = `
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
            <div class="img">
                <img src="${item.image}" alt="">
            </div>
        </div>
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 colll">
            <div class="details">
                <h4>${item.name}</h4>
                <div class="iii">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>              
                </div>
                <div class="discount">
                    <h6><strong>ABOUT THE PRODUCT :</strong>${item.discount}</h6>
                </div>
                <div class="price">
                    <h5><strong>THE PRICE OF THE PRODUCT :</strong> ₹ ${item.price}</h5>
                </div>
                <div class="btn">
                    <button onclick="deleteFromWishlist(${index})">Delete</button>
                </div>
            </div>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="button">
                <button onclick="adToBasket(${item.id})">Basket</button>
            </div>
        </div>
        `;
        div.appendChild(box)
    })
}


function deleteFromWishlist(index) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index,1)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    getWishlist()

}
getWishlist()