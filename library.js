let myLibrary = [];
const shelf = document.querySelector(".book-container");
const form = document.querySelector('.form-container');
const editform = document.querySelector('.edit-form');
const formtitle = document.getElementsByClassName("title")[0];
const formauthor = document.getElementsByClassName("author")[0];
const formpages = document.getElementsByClassName("pages")[0];
const formread = document.getElementsByClassName("read")[0];
//form behavior

function clearForm() {
    formtitle.value = '';
    formauthor.value = '';
    formpages.value= '';
    formread.checked = false;
}

document.addEventListener("click", (e) => {
       if(e.target.classList.contains('newbook')) {
        form.classList.add('open');
       }
       if(e.target.classList.contains('close') || e.target.classList.contains('backdrop')){
        form.classList.remove('open');
        editform.classList.remove('open');
       }
       if(e.target.classList.contains('submit')) {
        newBook();
        form.classList.remove('open');
       }
       if(e.target.classList.contains('book-edit')) {
        editform.classList.add('open');
        
       }
       if(e.target.classList.contains("delete")) {
        deleteBook(e);
       }
    });



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
    clearForm(formtitle.value,formauthor.value,formpages.value,formread.checked);
}

function editBook(e) {
    const editTitle =  document.querySelector("edit-title");
    const editAuthor = document.querySelector("edit-author");
    const editPages =  document.querySelector("edit-pages");
    const editRead = document.querySelector("read.edit");
   
    const editBookButton = document.querySelector(".book-edit");

  
    const index = e.target.parentNode.parentNode.dataset.index;
    console.log(index);
    editBookButton.dataset.index = index;
    editTitle.value = myLibrary[index].title;
    editAuthor.value = myLibrary[index].author;
    editPages.value = myLibrary[index].pages;
    editRead.value = myLibrary[index].read;
  
    editBookButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.dataset.index === index) {
        myLibrary[index].title = editBookTitle.value;
        myLibrary[index].author = editBookAuthor.value;
        myLibrary[index].currentPage = editBookCurrentPage.value;
        myLibrary[index].totalPage = editBookTotalPage.value;
        myLibrary[index].status = editBookStatus.value;
        index = e.target.
        displayBookOnShelf(myLibrary)
      } else {
        return;
      }
    });
  
}
function deleteBook(e) {
  
        const index = e.target.parentElement.id;
        const bookcover = document.getElementsByClassName('book')[index];
        shelf.removeChild(bookcover);
        myLibrary.splice(index, 1);
    
}
function displayBookOnShelf(myLibrary) {
    shelf.innerHTML = ''; //empty the parent 'book-container' class
    for(let book in myLibrary) {
        const bookcover = document.createElement("div");
        bookcover.classList.add('book');
        //adding an ID attribute to the book elements
        bookcover.id = myLibrary.indexOf(myLibrary[book]);
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
        edit.classList.add('book-edit');
        const editText = document.createTextNode('Edit');
        edit.appendChild(editText);

        const del = document.createElement("button");
        del.classList.add('delete');
        const delText = document.createTextNode('Delete');
        del.appendChild(delText);

        const h3el = document.createElement("h3");
        h3el.appendChild(title);
        bookinfo.appendChild(authorList);
        bookinfo.appendChild(pagesList);
        bookinfo.appendChild(readStatus);
        bookcover.appendChild(h3el);
        bookcover.appendChild(bookinfo);
        bookcover.appendChild(edit);
        bookcover.appendChild(del);
        shelf.appendChild(bookcover);
    
    }
}
