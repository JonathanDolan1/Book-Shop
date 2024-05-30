'use strict'

var gFilterBy = ''

function onInit() {
    renderBooks()
}

function renderBooks() {
    const books = getBooks()
    const booksHTML = books.map(book =>
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
    const elBooksTableBody = document.querySelector('table.books tbody')
    elBooksTableBody.innerHTML = booksHTML
}

function onRemoveBook(id) {
    const title = getBookById(id).title
    removeBook(id)
    renderBooks()
    showSuccessMessage(title, 'Removed')
}

function onUpdateBook(id) {
    while (true) {
        var price = +prompt('Enter an updated price')
        if (!isNaN(price)) break
        alert('Please enter only numbers')
    }
    updatePrice(id, price)
    renderBooks()
    showSuccessMessage(getBookById(id).title, 'Updated')
}

function onAddBook() {
    const title = prompt('Enter the book\'s title')
    while (true) {
        var price = +prompt('Enter a price')
        if (!isNaN(price)) break
        alert('Please enter only numbers')
    }
    const book = addBook(title, price)
    renderBooks()
    showSuccessMessage(book.title, 'Added')
}

function onShowDetails(id) {
    const elModal = document.querySelector('.modal')
    const elData = elModal.querySelector('pre')
    const book = getBookById(id)
    const strHTML = `<img src="img/${book.imgUrl}" alt="Image of ${book.title}">
    <span>Title: ${book.title}</span>
    <span>Price: ${book.price}</span>`
    elData.innerHTML = strHTML
    elModal.showModal()
}

function onFilterBooks(elInput) {
    gFilterBy = elInput.value
    renderBooks()
}

function onClearSearch() {
    gFilterBy = ''
    const elInput = document.querySelector('input')
    elInput.value = ''
    renderBooks()
}

function showSuccessMessage(title, action) {
    const elSuccessMessage = document.querySelector('.success-message')
    const elTitleSpan = elSuccessMessage.querySelector('span')
    const elActionSpan = elSuccessMessage.querySelector('span:nth-child(2)')
    elTitleSpan.innerText = title
    elActionSpan.innerText = action
    elSuccessMessage.style.opacity = 1
    setTimeout(() => elSuccessMessage.style.opacity = 0, 2000)
}