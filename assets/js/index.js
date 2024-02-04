const div = document.getElementById('myDiv');
let db;

async function getProducts() {
    try {
        const response = await axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts');
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
              <a href="./detailed.html"><button onclick="addToCart(${item.id})">Details</button></a>
              </div>
                
            `;
            div.appendChild(box);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

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
let page = 1
let limit = 6

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
              <a href="./detailed.html"><button onclick="addToCartApi(${item.id})">Details</button></a>
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


async function getData() {
    try {
        const response = await axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts');
        const data = response.data;
        db = data;

        db.forEach(item => {
            const box = document.createElement('div');
            box.className = 'myBox col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6';
            box.innerHTML = `
              <div class="div">
              <img src="${item.image}" alt="">
              <h5>₹${item.price}</h5>
              <div>
              <p>Lowest Price</p>
              <i class="fa-solid fa-arrow-trend-down"></i>
              </div>
              <a href="./detailed.html"><button onclick="addToData(${item.id})">Details</button></a>
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
