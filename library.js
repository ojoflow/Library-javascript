const form = document.querySelector('.form-container');
const btn = document.querySelector('.newbook');
const closer = document.querySelector('.close');
const backdrop = document.querySelector('.backdrop');
function removeForm() {form.classList.remove('open')};
function addForm() {form.classList.add('open')};
closer.onclick = () => {removeForm()}; 
btn.onclick = () => {addForm();}
backdrop.onclick = () => {removeForm();}
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
const submit = document.querySelector('.Submit');
submit.onclick = () => {
    removeForm();
    newBook();
}
function Book(title,author,num, read) {
    this.title = title;
    this.author = author;
    this.pages = num;
    this.read = read;
}
function newBook() {
    let formtitle = document.getElementsByClassName("title")[0].value;
    let formauthor = document.getElementsByClassName("author")[0].value;
    let formpages = document.getElementsByClassName("pages")[0].value;
    let formread = document.getElementsByClassName("read")[0].value;
    let bool = false;
    if (formread.checked) {
        bool = true;
    }
    let book = new Book(formtitle,formauthor,formpages,bool);
    myLibrary.push(book);
    displayBookOnShelf(myLibrary);
}
const shelf = document.querySelector(".book-container");
function displayBookOnShelf(myLibrary) {
    shelf.innerHTML = ''; //empty the parent 'book-container' class
    for(let book in myLibrary) {
       console.log(myLibrary[book]);
        let bookcover = document.createElement("div");
        bookcover.classList.add('book');

        let bookinfo = document.createElement("ul");
        let title = document.createTextNode(`${myLibrary[book].title}`);
        
        let author = document.createTextNode(`by ${myLibrary[book].author}`);
        let authorList = document.createElement("li");
        authorList.classList.add('author');
        authorList.appendChild(author);
        
        let pages = document.createTextNode(`Pages: ${myLibrary[book].pages}`);
        let pagesList = document.createElement("li");
        pagesList.classList.add('pages');
        pagesList.appendChild(pages);
        
        let read = document.createTextNode(`Read Status: ${myLibrary[book].read}`);
        let readStatus = document.createElement("li");
        readStatus.classList.add('read-status');
        readStatus.appendChild(read);
        
        let h3el = document.createElement("h3");
        h3el.appendChild(title);
        bookinfo.appendChild(authorList);
        bookinfo.appendChild(pagesList);
        bookinfo.appendChild(readStatus);
        bookcover.appendChild(h3el);
        bookcover.appendChild(bookinfo);
        shelf.appendChild(bookcover);
        // resetForm();
    }
}
function resetForm() {
    document.getElementsByClassName('title')[0].value = '';
    document.getElementsByClassName('author')[0].value = '';
    document.getElementsByClassName('pages')[0].value = '';
    document.getElementsByClassName('read')[0].value = false;
}