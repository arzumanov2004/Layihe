const div = document.getElementById('myDiv')

async function getProdact() {
    try{
        const response = await axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
        const data = response.data
        db = data
        db.forEach(item => {
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <h3>${item.title}</h3>
            <h4>$${item.price}</h4>
            <a href="./detailed.html"><button onclick="adToCart(${item.id})">detailed</button></a>
            `;
            div.appendChild(box)
        });
    }catch(error){
        console.error('xeta',error);
    }
}
function adToCart(id) {
    // Yeni ürünü sepete eklemek için önceki verileri temizle
    localStorage.removeItem('cart');

    // Yeni ürünü sepete ekle
    const cart = [db.find(item => item.id == id)];
    
    // Güncellenmiş sepet verilerini localStorage'a kaydet
    localStorage.setItem('cart', JSON.stringify(cart));
}

getProdact()
