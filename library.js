let myLibrary = [
    {title : 'Watchmen',
     author : 'Alan Moore',
     num: 416,
     read: true
    },
    {title: 'Messenger of Deception',
    author: 'Jacques Vallee',
    num: 288,
    read: false
    },
    {title: '$100M Offers: How To Make Offers So Good People Feel Stupid Saying No',
     author: 'Alex Harmozi',
     num: 164,
     read: false    
    }

    
];
function Book(title,author,num, read) {
    this.title = title;
    this.author = author;
    this.pages = num;
    this.pages = read;
}

newbook = document.querySelector(".newbook").onclick = () => {
    
}
function addBookToLibrary() {
    myLibrary.push(book);
}
const shelf = document.querySelector(".book-container");
function displayBookOnShelf() {
    for(book in myLibrary) {
        let bookcover = document.createElement("div");
        bookcover.classList.add('book');
        let title = document.createTextNode(`Title: + ${myLibrary[book].title}`);
        let author = document.createTextNode(`Author: + ${myLibrary[book].author}`);
        let pages = document.createTextNode(`Pages: +   ${myLibrary[book].num}`);
        let read = document.createTextNode(`Read Status: + ${myLibrary[book].read}`);
        let h3el = document.createElement("h3");
        h3el.appendChild(title);
        bookcover.appendChild(h3el);
        bookcover.appendChild(author);
        bookcover.appendChild(pages);
        bookcover.appendChild(read);
        shelf.appendChild(bookcover);


    }
}