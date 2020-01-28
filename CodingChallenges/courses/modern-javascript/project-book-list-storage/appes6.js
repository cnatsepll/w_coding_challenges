class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
    const list = document.getElementById('book-list');
    // Create TR element
    const row = document.createElement('tr');
    // Insert Columns
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>  
      `;
    list.appendChild(row);
  }
  showAlert(message, className){
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    // insert alert
    // inserting the created div in the area immediately before the form in the DOM
    container.insertBefore(div, form);
    // Timeout alert after 3 seconds
    // setTimeout takes what you want to do as the first parameter
    // and then when you want to execute it as the second
    // so in this case we will remove the alert after 3 seconds
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  deleteBook(target){
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}


// Local Storage Class
class Store {
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static displayBooks() {
      const books = Store.getBooks();
      books.forEach(function(book){
        const ui = new UI;
        // Add Book to UI
        ui.addBookToList(book);
      })
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index){
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiating a Book object
  const book = new Book(title, author, isbn);
  // Instantiate UI object
  const ui = new UI();
  // Validate form before submitting
  if (title === '' || author === '' || isbn === '') {
    // Error Alert
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add Book to List
    ui.addBookToList(book);
    // add to local storage
    Store.addBook(book);
    // show success message
    ui.showAlert('Book Added', 'success')
    // Clear Fields for next entry
    ui.clearFields();
  }

  // prevent the form from running its default submit
  e.preventDefault();
});

// Event Listener for delete
// has to be seperate since these elements may not exist when the page loads
document.getElementById('book-list').addEventListener('click', function (e) {
  // Instantiate UI object
  const ui = new UI();
  // delete book
  ui.deleteBook(e.target);
  // remove from local storage
  // target by isbn#
  // target is read in as the <a> tag
  // if we want isbn# we can use previousSibling to get the element before the <a>
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // show alert
  ui.showAlert('Book Removed', 'success');
  e.preventDefault()
});