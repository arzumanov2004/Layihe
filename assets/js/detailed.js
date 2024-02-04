const detailDiv = document.getElementById('detailDiv');
let db; // db değişkenini global alanda tanımlıyoruz

function getProducts() {
    detailDiv.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
        cart = []; // Eğer sepette ürün yoksa boş bir dizi oluştur
    }

    cart.map(item => {
        const box = document.createElement('div');
        box.className = "box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3";
        box.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <p>${item.price}</p>
            <div class="btndiv">
            <button onclick="addtowishlist(${item.id})">Wishlist<i class="fa-brands fa-shopify"></i></button>

                <button onclick="addToBasket(${item.id})">Add to Basket<i class="fa-brands fa-shopify"></i></button>
            </div>
        `;
        detailDiv.appendChild(box);
    });
}

getProducts();

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productItem = cart.find(item => item.id == id);

    if (productItem) {
        productItem.count = (productItem.count || 1) + 1;
    } else {
        // Eğer sepet boşsa veya eklenen ürün farklı bir ürünse
        if (cart.length === 0 || !cart.some(item => item.id === id)) {
            const productToAdd = db.find(item => item.id == id);
            if (productToAdd) {
                productToAdd.count = 1; // Yeni məhsul üçün sayı təyin edin
                cart.push(productToAdd);
            } else {
                console.error(`${id} ID-li məhsul tapılmadı.`);
            }
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart updated:', cart); // Sepetin güncellendiğini kontrol etmek için
    getProducts(); // Basketa əlavə edildikdə göstərilən məhsulları yeniləyin
}

