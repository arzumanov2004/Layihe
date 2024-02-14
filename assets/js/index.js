const div = document.getElementById('myDiv');
const myBtn = document.getElementById('myBtn')
// let db;
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
function adToWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let productItem = db.find(item => item.id == id);
    if (productItem) {
        let existingItem = wishlist.find(item => item.id == id);
        if (!existingItem) {
            wishlist.push(productItem);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            console.log('Ürün favorilere eklendi:', productItem.name);
        } else {
            alert('This product is already in your favorites!');
        }
    } else {
        console.error('Product not found.');
    }
}
function addToCart(id) {

    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    
    existingCart = [];

    
    const newProduct = db.find(item => item.id == id);
    existingCart.push(newProduct);

    
    localStorage.setItem('cart', JSON.stringify(existingCart));
}

getProducts();


const inp = document.getElementById('inp')
const searc = document.getElementById('searc')
const myApi = document.getElementById('myApi');
const btn = document.getElementById('btn')
let lim = 6
let pag = 1

async function getApi() {
    try {
        const response = await axios.get(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts?page=${pag}&limit=${lim}`);
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
              <button class="btn" onclick="adToWishlist2(${item.id})"><i class="fa-solid fa-heart"></i></button>
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
function adToWishlist2(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let productItem = db.find(item => item.id == id);
    if (productItem) {
        let existingItem = wishlist.find(item => item.id == id);
        if (!existingItem) {
            wishlist.push(productItem);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            console.log('Ürün favorilere eklendi:', productItem.name);
        } else {
            alert('This product is already in your favorites!');
        }
    } else {
        console.error('Product not found.');
    }
}
function addToCartApi(id) {
    
    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    
    existingCart = [];

    
    const newProduct = db.find(item => item.id == id);
    existingCart.push(newProduct);

    
    localStorage.setItem('cart', JSON.stringify(existingCart));
}

getApi();


//search by name


function searchByName() {
    myApi.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const filterData = db.filter(item => item.name.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item =>{
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
              <button class="btn" onclick="adToWishlist2(${item.id})"><i class="fa-solid fa-heart"></i></button>
              </div>
                
            `;
            myApi.appendChild(box)
        })
    })
}
searc.addEventListener('click',searchByName)


const getDataDiv = document.getElementById('getDataDiv')
let limi = 9
let pa = 1

async function getData() {
    try {
        const response = await axios.get(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts?page=${pa}&limit=${limi}`);
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
              <button class="btn" onclick="adToWishlist3(${item.id})"><i class="fa-solid fa-heart"></i></button>
              </div>
                
            `;
            getDataDiv.appendChild(box);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}
function adToWishlist3(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let productItem = db.find(item => item.id == id);
    if (productItem) {
        let existingItem = wishlist.find(item => item.id == id);
        if (!existingItem) {
            wishlist.push(productItem);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            console.log('Ürün favorilere eklendi:', productItem.name);
        } else {
            alert('This product is already in your favorites!');
        }
    } else {
        console.error('Product not found.');
    }
}
function addToData(id) {
    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    existingCart = [];

    const newProduct = db.find(item => item.id == id);
    existingCart.push(newProduct);

    localStorage.setItem('cart', JSON.stringify(existingCart));
}

getData();


// // sort a-z z-a azdan-coxa coxdan-aza default
const btnAZ = document.getElementById('btnZA')
const btnZA = document.getElementById('btnAZ')
const yenile = document.getElementById('default')
const btnLitleToLot = document.getElementById('btnLitleToLot')
const btnLotToLitle = document.getElementById('btnLotToLitle')
//Sort A-Z

function sortAZ() {
    myApi.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.name.localeCompare(b.name))
        sortData.map(item =>{
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
              <button class="btn" onclick="adToWishlist2(${item.id})"><i class="fa-solid fa-heart"></i></button>
              </div>
                
            `;
            myApi.appendChild(box)
        })
    })
}
btnAZ.addEventListener('click',sortAZ)

//Sort Z-A

function sortZA() {
    myApi.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => b.name.localeCompare(a.name))
        sortData.map(item =>{
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
              <button class="btn" onclick="adToWishlist2(${item.id})"><i class="fa-solid fa-heart"></i></button>
              </div>
                
            `;
            myApi.appendChild(box)
        })
    })
}

btnZA.addEventListener('click',sortZA)


//azdan coxa


function sortLitleToLot() {
    myApi.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.price - b.price)
        sortData.map(item =>{
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
              <button class="btn" onclick="adToWishlist2(${item.id})"><i class="fa-solid fa-heart"></i></button>
              </div>
                
            `;
            myApi.appendChild(box)
        })
    })
}
btnLitleToLot.addEventListener('click',sortLitleToLot)


//coxdan aza


function sortLotToLimit() {
    myApi.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => b.price - a.price)
        sortData.map(item =>{
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
              <button class="btn" onclick="adToWishlist2(${item.id})"><i class="fa-solid fa-heart"></i></button>
              </div>
                
            `;
            myApi.appendChild(box)
        })
    })
}

btnLotToLitle.addEventListener('click',sortLotToLimit)


//Default

yenile.addEventListener('click',getApi)