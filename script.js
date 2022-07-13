
let myLibrary = [];
let librarySize = myLibrary.length;
class Book{
    constructor(title = "Undefined", author = "Undefined", pages = "?", read = null){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(book){
    if(myLibrary.includes(book) == false){
        myLibrary.push(book);
    }
}
const openForm = () => {
    addBookModal.classList.add("active");
}
const closeForm = () => {
    addBookModal.classList.remove("active");
}
const getBookFromInput = () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;
    return new Book(title, author, pages, isRead);
}

const addBookButton = document.getElementById("addBook");
const addBookModal = document.getElementById("addBookModal");
const cardContainer = document.getElementById("cardContainer");


addBookModal.onsubmit = addBook;
addBookButton.onclick = openForm;

const form = document.getElementById("addBookForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function addBook(e){
    console.log(myLibrary);
    const book = getBookFromInput();
    myLibrary.push(book);
    addBookCard(book);
    closeForm();
}

function addBookCard(book){
    
    const newCard = document.createElement("div");
    const newTitle = document.createElement("p");
    const newAuthor = document.createElement("p");
    const numberOfPages = document.createElement("p");
    const buttonRead = document.createElement("button");
    const buttonRemove = document.createElement("button");
/*     const helper = document.createElement("p");
    helper.setAttribute("font-weight: 600");
    helper.textContent = "Title: " */
    newTitle.textContent = "Title: " + book.title;
    newAuthor.textContent = "Author: " + book.author;
    numberOfPages.textContent = "Number of pages: " + book.pages;

    const bin = document.createElement("img");
    bin.src = "./trash-can-outline.svg";
    buttonRemove.appendChild(bin);
    const para = document.createElement("p");
    para.textContent = "Remove book";
    buttonRemove.appendChild(para);
    buttonRemove.classList.add("remove-button");

    newCard.classList.add("card");
    if(book.read == true){
        buttonRead.textContent = "Read";
        buttonRead.classList.add("read");
    }else{
        buttonRead.textContent = "Not read";
        buttonRead.classList.add("not-read");
    }
    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(numberOfPages);
    newCard.appendChild(buttonRead);
    newCard.appendChild(buttonRemove);
    buttonRead.addEventListener("click", () =>{
        if(buttonRead.classList.contains("read")){
            buttonRead.textContent = "Not read";
            buttonRead.classList.remove("read");
            buttonRead.classList.add("not-read");
        }else{
            buttonRead.textContent = "Read";
            buttonRead.classList.remove("not-read");
            buttonRead.classList.add("read");        
        }

    });
    buttonRemove.addEventListener("click", () =>{
        cardContainer.removeChild(newCard);
    });
    cardContainer.appendChild(newCard);
}

  

