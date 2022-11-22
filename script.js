'use strict';
/*61 rader*/
const bookList = [
    {
        id: 1, 
        author: 'Charles Dickens', 
        title: 'Oliver Twist'
    },
    {
        id: 2, 
        author: 'William Shakespear',
        title: 'Hamlet'
    }
];

searchField.addEventListener("keyup", (e) => searchBooks(e.target.value));

/* searchField.addEventListener("keyup", (e) => renderBookList(
        bookList.filter(({title, author}) => {
            const searchTerm = e.target.value.toLowerCase();
            return title.toLowerCase().indexOf(searchTerm) >= 0 || author.toLowerCase().indexOf(searchTerm) >= 0;
        })
    )
); */


function searchBooks(searchTerm){

    const filterdList = bookList.filter( 
        ({title, author}) => 
            title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
            author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);

    renderBookList(filterdList);
}

function renderBookList(bookList){
    /*Element i HTML-listan visas/döljs beroende på listans innehåll. */
    

    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);

    const root = document.getElementById('root');
    if(existingElement){
        root.removeChild(existingElement);
    }
    if(bookList.length > 0){
        root.insertAdjacentHTML("beforeend", BookList(bookList));
    }
    
}
