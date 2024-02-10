const div = document.getElementById('Div')

function getBasket() {
    div.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) =>{
        const box = document.createElement('div')
        box.className = 'myBox col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'
        box.innerHTML = `
        <div class="row box">
            <div class="col-xl-4 col-lg-4 col-md-5 col-sm-5 col-5 img">
                <img src="${item.image}" alt="">
            </div>
            <div class="col-xl-8 col-lg-8 col-md-7 col-sm-7 col-7 details">
                <h4>${item.name}</h4>
                <h5><strong>THE PRICE OF THE PRODUCT :</strong> ₹${item.price}</h5>
                <h5><strong>PRODUCT NUMBER :</strong>  ${item.count} PSC</h5>
                <button class="hhh" onclick="deleteFromCount(${index})">-</button>
                <button class="hhh">+</button>
                <div class="button">
                    <button onclick="deleteFromCart(${index})">Delete</button>
                </div>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 btn">
                <button>Buy It</button>
            </div>
        </div>
        

        `;
        div.appendChild(box)
    })
}
function deleteFromCount(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].count > 1){
        cart[index].count -= 1
    }else{
        cart.splice(index,1)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()
}

function deleteFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()

}
getBasket()


function getTotalPrice() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.count;
    });
    return totalPrice.toFixed(2); // Toplam fiyatı iki ondalık basamağa yuvarla
}


const totalPriceDiv = document.getElementById('totalPrice');
function showTotalPrice() {
    const totalPrice = getTotalPrice();
    totalPriceDiv.textContent = `Total Price : ₹${totalPrice}`;
}

// Sepete ürün eklenince veya silince toplam fiyatı güncelle
function updateTotalPrice() {
    showTotalPrice();
}

showTotalPrice();