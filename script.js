'use strict';
/*Vad ska vi göra här? Specielt när GIT är så brutalt dåligt! FUCK GIT FUCK GITHUB det borde kallas GITSSCRUB!          */




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


/*const searchInput = document.children[0].children[1].children[1].children[1];*/
/*const searchField = document.getElementById('searchField');*/
console.log(searchField);


searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress (e){
    /*Ta emot/läsa av värdet i inputfältet.
    Skicka värdet till searchBooks.
    searchBooks retunerar en filtrerad lista
    Filtrerade listan skickas till renderBookList
    */
    searchBooks(e.target.value);
}

function searchBooks(searchTerm){
/*  Loopa igenom bookList  
    För varje varv i loopen, ta det aktuella elementet (boken)
    Jämnför titeln med söktermen.
    Om söktermen finns någonstans i titeln, lägg till elementet i ny lista(filterdList)
    Retunerar filterdList eller anropar renderBookList?
*/
    const filterdList = []
    for(let i = 0; i < bookList.length; i++){
        const title = bookList[i].title.toLowerCase();
        if(title.indexOf(searchTerm) >= 0){ 
            filterdList.push(bookList[i])
        }
    }
    renderBookList(filterdList);

}

function renderBookList(list){
    /*Element i HTML-listan visas/döljs beroende på listans innehåll. */
    console.log(list)
}
