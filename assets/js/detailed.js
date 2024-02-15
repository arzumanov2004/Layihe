const detailDiv = document.getElementById('detailDiv');
let db; 

function getProducts() {
    detailDiv.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
        cart = []; 
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
        
        if (cart.length === 0 || !cart.some(item => item.id === id)) {
            const productToAdd = db.find(item => item.id == id);
            if (productToAdd) {
                productToAdd.count = 1; 
                cart.push(productToAdd);
            } else {
                console.error(`${id} No ID product was found.`);
            }
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart updated:', cart); 
    getProducts(); 
}




function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
const chatWindow = document.getElementById('chat-window');
const nameInput = document.getElementById('name');
const bookInput = document.getElementById('book');
const messageInput = document.getElementById('message');
const comments = [];

function sendMessage() {
    const name = nameInput.value.trim();
    const book = bookInput.value.trim();
    const message = messageInput.value.trim();
    if (name !== '' && book !== '' && message !== '') {
        const comment = { 
            id: generateUniqueId(), 
            name, 
            book, 
            message, 
            likes: 0, 
            likedBy: [],
            replies: [] 
        };
        comments.push(comment);
        displayComments();
        nameInput.value = '';
        bookInput.value = '';
        messageInput.value = '';
    }
}

function displayComments() {
    chatWindow.innerHTML = '';
    comments.forEach((comment, commentIndex) => {
        const commentElement = document.createElement('div');
        commentElement.className = "commentDiv"
        commentElement.innerHTML = `
            <div class="div">
                <div>
                    <strong>${comment.name} </strong> product <strong>${comment.book} </strong> wrote this about the:  <br>
                    <span id="comment-${comment.id}-text">${comment.message}</span><br>
                </div>
                <div>
                    <button class="likeBtn" onclick="likeComment(${commentIndex})"><i style="color: red;" class="fa-solid fa-heart"></i></button> <span id="comment-${comment.id}-likes">${comment.likes}</span><br>
                </div>
            </div>
            <button class="commentBtn" onclick="editComment(${commentIndex})">Edit Comment</button><br>
            <button class="commentBtn" onclick="replyToComment(${commentIndex})">Answer</button>
        `;
        chatWindow.appendChild(commentElement);

        comment.replies.forEach((reply, replyIndex) => {
            const replyElement = document.createElement('div');
            replyElement.className = "commentDiv"
            replyElement.innerHTML = `
                <div class="div">
                    <div>
                        <em>${reply.name}</em>: <span id="reply-${reply.id}-text">${reply.message}</span><br>
                    </div>
                    <div>
                        <button class="likeBtn"  onclick="likeReply(${commentIndex}, ${replyIndex})"><i style="color: red;" class="fa-solid fa-heart"></i></button> <span id="reply-${reply.id}-likes">${reply.likes}</span><br>
                    </div>
                </div>
                <button class="commentBtn" onclick="editReply(${commentIndex}, ${replyIndex})">Edit reply</button>
                <button class="commentBtn" onclick="replyToReply(${commentIndex}, ${replyIndex})">Reply to comment</button>
            `;
            commentElement.appendChild(replyElement);
        });
    });
    chatWindow.scrollTop = chatWindow.scrollHeight; 
}

function likeComment(commentIndex) {
    const comment = comments[commentIndex];
    if (!comment.likedBy.includes("You")) {
        comment.likes++;
        comment.likedBy.push("You");
        displayComments();
    }
}

function likeReply(commentIndex, replyIndex) {
    const reply = comments[commentIndex].replies[replyIndex];
    if (!reply.likedBy.includes("You")) {
        reply.likes++;
        reply.likedBy.push("You");
        displayComments();
    }
}

function editComment(commentIndex) {
    const newText = prompt('Edit Your Comment:', comments[commentIndex].message);
    if (newText !== null) {
        comments[commentIndex].message = newText;
        displayComments();
    }
}

function editReply(commentIndex, replyIndex) {
    const newText = prompt('Edit Your Answer:', comments[commentIndex].replies[replyIndex].message);
    if (newText !== null) {
        comments[commentIndex].replies[replyIndex].message = newText;
        displayComments();
    }
}

function replyToComment(commentIndex) {
    const name = prompt('Enter Your Name:');
    const reply = prompt('Enter Your Answer:');
    if (name && reply) {
        const newReply = { name, message: reply, id: generateUniqueId(), likes: 0, likedBy: [], replies: [] };
        comments[commentIndex].replies.push(newReply);
        displayComments();
    }
}

function replyToReply(commentIndex, replyIndex) {
    const name = prompt('Enter Your Name:');
    const reply = prompt('Enter Your Answer:');
    if (name && reply) {
        const newReply = { name, message: reply, id: generateUniqueId(), likes: 0, likedBy: [] };
        comments[commentIndex].replies[replyIndex].replies.push(newReply);
        displayComments();
    }
}