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
        e.preventDefault();
        newBook();
        form.classList.remove('open');
       }
       
       if(e.target.classList.contains('book-edit')) {
        editform.classList.add('open');
      
        editBook(e);
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
  
    let read;
    read = formread.checked ? 'Read' : 'Not Read'
    let book = new Book(formtitle.value,formauthor.value,formpages.value,read);
    myLibrary.push(book);
 
    displayBookOnShelf(myLibrary);
    clearForm(formtitle.value,formauthor.value,formpages.value,formread.checked);
}

function editBook(e) {
   
    let index = e.target.parentElement.id; 
    
    const editTitle =  document.querySelector(".edit-title");
    const editAuthor = document.querySelector(".edit-author");
    const editPages =  document.querySelector(".edit-pages");
    const editRead = document.querySelector(".read.edit");
    const editButton = document.querySelector('.edit-button');
    editButton.dataset.index = index;
    editTitle.value =  myLibrary[index].title;
    editAuthor.value =  myLibrary[index].author;
    editPages.value =  myLibrary[index].pages;
    editRead.value = myLibrary[index].read;
    editButton.addEventListener('click', (e) =>
        {
            e.preventDefault();
            if(e.target.dataset.index === index){
                if(editTitle.value !== ''){
                    myLibrary[index].title =  editTitle.value;
                }
                if(editAuthor.value !== ''){
                    myLibrary[index].author =  editAuthor.value;
                }
                if(editPages.value !== ''){
                myLibrary[index].pages = editPages.value;
                }
                let read;
                read = editRead.checked ? 'Read' : 'Not Read';
                myLibrary[index].read = read;
                document.getElementById('title'+index).textContent = myLibrary[index].title;
                document.getElementById(`author${index}`).textContent = `by ${myLibrary[index].author}`;
                document.getElementById(`pages${index}`).textContent = `Pages: ${myLibrary[index].pages}`;
                document.getElementById(`read${index}`).textContent = `Read Status: ${myLibrary[index].read}`;
                editform.classList.remove('open')
            };
        
        })

} 
    
function deleteBook(e) {
        e.preventDefault();
        const index = e.target.parentElement.id;
        const bookcover = document.getElementsByClassName('book')[index];
        shelf.removeChild(bookcover);
        myLibrary.splice(index, 1);
        let books = document.getElementsByClassName('book');
        let title = document.getElementsByClassName('title');
        let author = document.getElementsByClassName('author');
        let pages = document.getElementsByClassName('pages');
        let read = document.getElementsByClassName('read-status');
        for(i= 0; i<books.length; i++){
            books[i].id= i;
            title[i].id = 'title'+i;
            author[i].id = 'author'+i;
            pages[i].id = 'pages'+i;
            read[i].id = 'read'+i;
        }
    
}
function displayBookOnShelf(myLibrary) {
    shelf.innerHTML = ''; //empty the parent 'book-container' class
    for(let book in myLibrary) {
        const bookcover = document.createElement("div");
        bookcover.classList.add('book');
        //adding an ID attribute to the book elements to keep track for editing and deleting books
        bookcover.id = myLibrary.indexOf(myLibrary[book]);
        //dynamic generation of books
        const bookinfo = document.createElement("ul");
        const title = document.createTextNode(`${myLibrary[book].title}`);
     
        const author = document.createTextNode(`by ${myLibrary[book].author}`);
        const authorList = document.createElement("li");
        authorList.classList.add(`author`);
        authorList.appendChild(author);
        authorList.id = 'author'+myLibrary.indexOf(myLibrary[book]);
        
        const pages = document.createTextNode(`Pages: ${myLibrary[book].pages}`);
        const pagesList = document.createElement("li");
        pagesList.classList.add(`pages`);
        pagesList.appendChild(pages);
        pagesList.id = 'pages'+ myLibrary.indexOf(myLibrary[book]);
        
        const read = document.createTextNode(`Read Status: ${myLibrary[book].read}`);
        const readStatus = document.createElement("li");
        readStatus.classList.add(`read-status`);
        readStatus.appendChild(read);
        readStatus.id = 'read'+ myLibrary.indexOf(myLibrary[book]);

        const edit = document.createElement("button");
        edit.classList.add('book-edit');
        const editText = document.createTextNode('Edit');
        edit.appendChild(editText);

        const del = document.createElement("button");
        del.classList.add('delete');
        const delText = document.createTextNode('Delete');
        del.appendChild(delText);

        const h3el = document.createElement("h3");
        h3el.classList.add(`title`);
        h3el.appendChild(title);
        h3el.id = 'title' + myLibrary.indexOf(myLibrary[book]);
        
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
