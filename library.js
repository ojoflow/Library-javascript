
const shelf = document.querySelector(".book-container");
const form = document.querySelector('.form-container');
const btn = document.querySelector('.newbook');
const editform = document.querySelector('.edit-form-container');
const editbtn = document.querySelector('.edit');

const closer = document.querySelector('.close');
const backdrop = document.querySelector('.backdrop');
const formtitle = document.getElementsByClassName("title")[0];
const formauthor = document.getElementsByClassName("author")[0];
const formpages = document.getElementsByClassName("pages")[0];
const formread = document.getElementsByClassName("read")[0];
//form behavior
function removeForm() {form.classList.remove('open')};
function addForm() {form.classList.add('open')};
function clearForm() {
    formtitle.value = '';
    formauthor.value = '';
    formpages.value= '';
    formread.checked = false;
}
function removeEditForm() {editform.classList.remove('open')};
function addEditForm() {editform.classList.add('open')};
closer.onclick = () => {removeForm()}; 
btn.onclick = () => {addForm();}
editbtn.onclick = () =>{addForm()};
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
const submit = document.querySelector('.submit');
submit.onclick = () => {
    newBook();
    
    removeForm();

}
function Book(title,author,num, read) {
    this.title = title;
    this.author = author;
    this.pages = num;
    this.read = read;
}
function newBook() {

    let book = new Book(formtitle.value,formauthor.value,formpages.value,formread.checked);
    myLibrary.push(book);
    displayBookOnShelf(myLibrary);
    clearForm();
    console.log(myLibrary);
}

function editBook() {

}
function displayBookOnShelf(myLibrary) {
    shelf.innerHTML = ''; //empty the parent 'book-container' class
    for(let book in myLibrary) {
    //    console.log(myLibrary[book]);
        const bookcover = document.createElement("div");
        bookcover.classList.add('book');

        const bookinfo = document.createElement("ul");
        const title = document.createTextNode(`${myLibrary[book].title}`);
        
        const author = document.createTextNode(`by ${myLibrary[book].author}`);
        const authorList = document.createElement("li");
        authorList.classList.add('author');
        authorList.appendChild(author);
        
        const pages = document.createTextNode(`Pages: ${myLibrary[book].pages}`);
        const pagesList = document.createElement("li");
        pagesList.classList.add('pages');
        pagesList.appendChild(pages);
        
        const read = document.createTextNode(`Read Status: ${myLibrary[book].read}`);
        const readStatus = document.createElement("li");
        readStatus.classList.add('read-status');
        readStatus.appendChild(read);
        const edit = document.createElement("button");
        edit.classList.add('edit');
        const editText = document.createTextNode('Edit');
        edit.appendChild(editText);
        let h3el = document.createElement("h3");
        h3el.appendChild(title);
        bookinfo.appendChild(authorList);
        bookinfo.appendChild(pagesList);
        bookinfo.appendChild(readStatus);
        bookcover.appendChild(h3el);
        bookcover.appendChild(bookinfo);
        bookcover.appendChild(edit);
        shelf.appendChild(bookcover);
        // resetForm();
    }
}
