'use strict'

'use strict'

var gBooks = getBooks()

function getBooks(){
    return  [
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

function removeBook(id){
    const idx = gBooks.findIndex(book=>book.id===id)
    gBooks.splice(idx,1)
}