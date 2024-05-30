'use strict'

'use strict'

var gBooks = getBooks()

function getBooks() {
    return [
        {
            id: 'bg4J78',
            title: 'The adventures of Lori Ipsi',
            price: 120,
            imgUrl: 'lori-ipsi.jpg'
        },
        {
            id: 'kj8545',
            title: 'World Atlas',
            price: 300,
            imgUrl: 'world-atlas.jpg'
        },
        {
            id: 'kf3586',
            title: 'Zorba the Greek',
            price: 87,
            imgUrl: 'zorba.jpg'
        }
    ]
}

function removeBook(id) {
    const idx = gBooks.findIndex(book => book.id === id)
    gBooks.splice(idx, 1)
}

function updatePrice(id, price) {
    const book = getBookById(id)
    book.price = price
}

function getBookById(id) {
    const book = gBooks.find(book => book.id === id)
    if (!book) return null
    return book
}

function addBook(title, price) {
    const book = _createBook(title, price)
    gBooks.unshift(book)
}

function getBookImgUrlById(id) {
    return getBookById(id).imgUrl 
}

function _createBook(title, price) {
    return {
        id: makeId(6),
        title,
        price,
        imgUrl: `${title}.jpg`
    }
}