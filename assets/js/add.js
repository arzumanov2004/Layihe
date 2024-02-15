const Myform = document.getElementById('Myform')
const exampleInputEmail1 = document.getElementById('exampleInputEmail1')
const exampleInputPassword1 = document.getElementById('exampleInputPassword1')
const exampleInputImg = document.getElementById('exampleInputImg')
const tableDiv = document.getElementById('tableDiv')
const inp = document.getElementById('inp')
const searc = document.getElementById('searc')

//Post Form

function postForm(e) {
    e.preventDefault()
    axios.post('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts',{
        name: exampleInputEmail1.value,
        price: exampleInputPassword1.value,
        image: exampleInputImg.value,
    })
    Myform.reset()
    setTimeout(()=>{
        getForm()
    },1000)
}
Myform.addEventListener('submit',postForm)

//Get Form

function getForm() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        db.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h6>${item.name}</h6></td>
            <td><h6>₹${item.price}</h6></td>
            <td><button onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
getForm()

//Delete Form

function deleteFromForm(id) {
    tableDiv.innerHTML = ''
    axios.delete(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts/${id}`)
    setTimeout(()=>{
        getForm()
    },1000)
}



//search by name


function searchByName() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const filterData = db.filter(item => item.name.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h6>${item.name}</h6></td>
            <td><h6>₹${item.price}</h6></td>
            <td><button onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
searc.addEventListener('click',searchByName)




// // sort a-z z-a azdan-coxa coxdan-aza default



const btnAZ = document.getElementById('btnZA')
const btnZA = document.getElementById('btnAZ')
const yenile = document.getElementById('default')
const btnLitleToLot = document.getElementById('btnLitleToLot')
const btnLotToLitle = document.getElementById('btnLotToLitle')



//Sort A-Z


function sortAZ() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.name.localeCompare(b.name))
        sortData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h6>${item.name}</h6></td>
            <td><h6>₹${item.price}</h6></td>
            <td><button onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
btnAZ.addEventListener('click',sortAZ)


//Sort Z-A


function sortZA() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => b.name.localeCompare(a.name))
        sortData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h6>${item.name}</h6></td>
            <td><h6>₹${item.price}</h6></td>
            <td><button onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}

btnZA.addEventListener('click',sortZA)


//azdan coxa


function sortLitleToLot() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.price - b.price)
        sortData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h6>${item.name}</h6></td>
            <td><h6>₹${item.price}</h6></td>
            <td><button onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
btnLitleToLot.addEventListener('click',sortLitleToLot)


//coxdan aza


function sortLotToLimit() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => b.price - a.price)
        sortData.map(item =>{
           const box = document.createElement('tr')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h6>${item.name}</h6></td>
            <td><h6>₹${item.price}</h6></td>
            <td><button onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}

btnLotToLitle.addEventListener('click',sortLotToLimit)


//Default


yenile.addEventListener('click',getForm)