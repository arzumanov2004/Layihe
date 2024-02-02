const div = document.getElementById('myDiv')

function getBasket() {
    div.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map(item =>{
        const box = document.createElement('div')
        box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <h3>${item.title}</h3>
        <h4>$${item.price}</h4>
        <button onclick="adToBasket(${item.id})">basket</button>
        `;
        div.appendChild(box)
    })
}
function adToBasket(id) {
    // Sepet verilerini localStorage'dan al
    const basket = JSON.parse(localStorage.getItem('basket')) || [];

    // Tıklanan ürünü sepete ekle
    const selectedProduct = db.find(item => item.id == id);
    basket.push(selectedProduct);

    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('basket', JSON.stringify(basket));

    // İlgili ürünü sepet sayfasına yönlendir
    window.location.href = './basket.html'; // "basket.html" burada ilgili sayfanın adınıza göre güncellenmelidir
}

getBasket()
