'use strict'

'use strict'

var gBooks
_createBooks()

function getBooks() {
    if (!gFilterBy) return gBooks
    return gBooks.filter(book => book.title.toLowerCase().includes(gFilterBy.toLowerCase()))
}

function removeBook(id) {
    const idx = gBooks.findIndex(book => book.id === id)
    gBooks.splice(idx, 1)
    _saveBooks()
}

function updatePrice(id, price) {
    const book = getBookById(id)
    book.price = price
    _saveBooks()
}

function getBookById(id) {
    const book = gBooks.find(book => book.id === id)
    if (!book) return null
    return book
}

function addBook(title, price) {
    const book = _createBook(title, price)
    gBooks.unshift(book)
    _saveBooks()
}

function getBookImgUrlById(id) {
    return getBookById(id).imgUrl 
}

function _createBooks() {
    gBooks = loadFromStorage('books')
    if (gBooks && gBooks.length !== 0) return

    gBooks = [
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
    _saveBooks()
}

function _createBook(title, price) {
    return {
        id: makeId(6),
        title,
        price,
        imgUrl: `${title}.jpg`
    }
}

function _saveBooks(){
    saveToStorage('books',gBooks)
}