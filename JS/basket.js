const div = document.getElementById('myDiv')

function getSebet() {
    div.innerHTML = ''
    const basket = JSON.parse(localStorage.getItem('basket')) || []
    basket.map((item,index) =>{
        const box = document.createElement('div')
        box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <h3>${item.title}</h3>
        <h4>$${item.price}</h4>
        <h4>Urun Sayi : ${item.count} edet</h4>
        <button onclick="deleteFromCount(${index})">-</button>
        <button onclick="deleteFromCart(${index})">Delete</button>

        `;
        div.appendChild(box)
    })
}
function deleteFromCount(index) {
    const basket = JSON.parse(localStorage.getItem('basket')) || []
    if(basket[index].count > 1){
        basket[index].count -= 1
    }else{
        basket.splice(index,1)
    }
    localStorage.setItem('basket',JSON.stringify(basket))
    getBasket()
}

function deleteFromCart(index) {
    const basket = JSON.parse(localStorage.getItem('basket')) || []
    cart.splice(index,1)
    localStorage.setItem('basket',JSON.stringify(basket))
    getSebet()

}
getSebet()