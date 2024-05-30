'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
    var booksHTML = `<tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>`
    booksHTML += gBooks.map(book =>
        `<tr>
            <td>${book.title}</td>
            <td class="price">${book.price}</td>
            <td class="actions">
                <button class="read" onclick="onShowDetails('${book.id}')">Read</button>
                <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
                <button class="delete" onclick="onRemoveBook('${book.id}')">Delete</button>
            </td>
        </tr>`
    ).join('')
    const elBooksTable = document.querySelector('table.books tbody')
    elBooksTable.innerHTML = booksHTML
}

function onRemoveBook(id) {
    removeBook(id)
    renderBooks()
}

function onRemoveBook(id) {
    removeBook(id)
    renderBooks()
}

function onUpdateBook(id) {
    while (true) {
        var price = +prompt('Enter an updated price')
        if (!isNaN(price)) break
        alert('Please enter only numbers')
    }
    updatePrice(id, price)
    renderBooks()
}

function onAddBook(){
    const title = prompt('Enter the book\'s title')
    while (true) {
        var price = +prompt('Enter an updated price')
        if (!isNaN(price)) break
        alert('Please enter only numbers')
    }
    addBook(title,price)
    renderBooks()
}

function onShowDetails(id) {
    const elModal = document.querySelector('.modal')
    const elData = elModal.querySelector('pre')
    const book = getBookById(id)
    elData.innerText = JSON.stringify(book, null, 2)
    elModal.showModal()
}