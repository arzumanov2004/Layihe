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
        box.className = "box row";
        box.innerHTML = `
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="imges">
                <img src="${item.image}" alt="">
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="detailes">
                    <h3>${item.name}</h3>
                    <div class="iii">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>              
                    </div>
                    <div class="h5h5">
                        <h5><strong>About The Product :</strong> ${item.description}</h5>
                    </div>
                    <div class="discount">
                        <h5><strong>About The Product :</strong>${item.discount}</h5>
                    </div>
                    <div class="price">
                        <h4><strong>The Price Of The Product :</strong> ₹ ${item.price}</h4>
                    </div>
                    <div class="button">
                        <button onclick="addToBasket(${item.id})">Add to Basket</button>
                    </div>
                </div>
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

