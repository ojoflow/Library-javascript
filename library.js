const form = document.querySelector('form');
const btn = document.querySelector('.newbook');
const closer = document.querySelector('.close');
btn.onclick  = () => {form.style.display = "block"};
closer.onclick = () => {form.style.display = "none"}; 
window.onclick = function(event) {
    if (event.target == window) {
      form.style.display = "none";
    }
  }
let myLibrary = [
    // {title : 'Watchmen',
    //  author : 'Alan Moore',
    //  num: 416,
    //  read: true
    // },
    // {title: 'Messengers of Deception',
    // author: 'Jacques Vallee',
    // num: 288,
    // read: false
    // },
    // {title: '$100M Offers: How To Make Offers So Good People Feel Stupid Saying No',
    //  author: 'Alex Harmozi',
    //  num: 164,
    //  read: false    
    // }
    
];
function Book(title,author,num, read) {
    this.title = title;
    this.author = author;
    this.pages = num;
    this.pages = read;
}
function newBook() {
    let formtitle = document.getElementsByClassName("title").value;
    let formauthor = document.getElementsByClassName("author").value;
    let formpages = document.getElementsByClassName("pages").value;
    let formread = document.getElementsByClassName("read").value;
    let bool = false;
    if (formread.checked) {
        bool = true;
    }
    let book = new Book(formtitle,formauthor,formpages,bool);
    addBookToLibrary(book);
}
// const newbook = document.querySelector(".newbook").onclick = () => {
//  newBook();   
// }
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