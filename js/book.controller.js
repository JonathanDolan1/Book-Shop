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
                <button class="read">Read</button>
                <button class="update">Update</button>
                <button class="delete">Delete</button>
            </td>
        </tr>`
    ).join('')
    const elBooksTable = document.querySelector('table.books tbody')
    elBooksTable.innerHTML = booksHTML
}