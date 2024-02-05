const div = document.getElementById('myDiv');
const myBtn = document.getElementById('myBtn')
let db;
let limit = 12
let page = 1
async function getProducts() {
    try {
        const response = await axios.get(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts?page=${page}&limit=${limit}`);
        const data = response.data;
        db = data;

        db.forEach(item => {
            const box = document.createElement('div');
            box.className = 'myBox col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12';
            box.innerHTML = `
              <div class="div">
              <img src="${item.image}" alt="">
              <h6>${item.name}</h6>
              <h5>${item.discount}</h5>
              <h6>₹${item.price}</h6>
              <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
              </div>
              <a href="./detailed.html"><button class="button" onclick="addToCart(${item.id})">Details</button></a>
              <button class="btn" onclick="adToWishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>
              </div>
                
            `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error:', error);
    }
}
myBtn.addEventListener('click',getProducts)
function addToCart(id) {
    // Önceki sepet verilerini al
    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Eğer başka bir ürün detayına geçiliyorsa önceki sepeti temizle
    existingCart = [];

    // Yeni ürünü sepete ekle
    const newProduct = db.find(item => item.id == id);
    existingCart.push(newProduct);

    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(existingCart));
}

getProducts();



const myApi = document.getElementById('myApi');
const btn = document.getElementById('btn')
limit = 6
page = 1

async function getApi() {
    try {
        const response = await axios.get(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts?page=${page}&limit=${limit}`);
        const data = response.data;
        db = data;

        db.forEach(item => {
            const box = document.createElement('div');
            box.className = 'myBox col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12';
            box.innerHTML = `
              <div class="div">
              <img src="${item.image}" alt="">
              <h6>${item.name}</h6>
              <h5>${item.discount}</h5>
              <h6>₹${item.price}</h6>
              <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>              
              </div>
              <a href="./detailed.html"><button class="button" onclick="addToCartApi(${item.id})">Details</button></a>
              <button class="btn" onclick="adToWishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>
              </div>
                
            `;
            myApi.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error:', error);
    }
}
btn.addEventListener('click',getApi)
function addToCartApi(id) {
    // Önceki sepet verilerini al
    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Eğer başka bir ürün detayına geçiliyorsa önceki sepeti temizle
    existingCart = [];

    // Yeni ürünü sepete ekle
    const newProduct = db.find(item => item.id == id);
    existingCart.push(newProduct);

    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(existingCart));
}

getApi();



const getDataDiv = document.getElementById('getDataDiv')
limit = 9
page = 1

async function getData() {
    try {
        const response = await axios.get(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts?page=${page}&limit=${limit}`);
        const data = response.data;
        db = data;

        db.forEach(item => {
            const box = document.createElement('div');
            box.className = 'myBox col-xl-4 col-lg-2 col-md-2 col-sm-6 col-6';
            box.innerHTML = `
              <div class="div">
              <img src="${item.image}" alt="">
              <h5>${item.discount}</h5>
              <div>
              <p>Lowest Price</p>
              <i class="fa-solid fa-arrow-trend-down"></i>
              </div>
              <a href="./detailed.html"><button class="button" onclick="addToData(${item.id})">Details</button></a>
              <button class="btn" onclick="adToWishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>
              </div>
                
            `;
            getDataDiv.appendChild(box);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

function addToData(id) {
    // Önceki sepet verilerini al
    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Eğer başka bir ürün detayına geçiliyorsa önceki sepeti temizle
    existingCart = [];

    // Yeni ürünü sepete ekle
    const newProduct = db.find(item => item.id == id);
    existingCart.push(newProduct);

    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(existingCart));
}

getData();
