const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksCol1 = document.getElementById('books-col1');
const booksCol2 = document.getElementById('books-col2');
const apiKey = 'AW5yEZPsefeUZJmozdU2j0vOVNz6WtSv';

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  const booksContainer = document.getElementById('books-container');

  // Clear previous results
  booksContainer.innerHTML = '';

try {
  fetch(`https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    
      // Clear previous results
    booksContainer.innerHTML = '';

    // Loop through each book
    data.results.books.forEach((book, index) => {
      // Create a new book-container div
      const bookContainer = document.createElement('div');
      const booksCol1 = document.createElement('div');
      const booksCol2 = document.createElement('div');
      const bookImg = document.createElement('img');
      const bookTitle = document.createElement('h2');
      const bookAuthor = document.createElement('h3');
      const bookDesc = document.createElement('p');

      // Create book-container
      bookContainer.classList.add('row', 'mb-4');

      // Create col-1
      booksCol1.classList.add('col-md-8');
      // Img
      bookImg.src = book.book_image;
      bookImg.classList.add('img-small');
      bookImg.style.padding = '10px';
      booksCol1.appendChild(bookImg);

      // Create col-2
      booksCol2.classList.add('col-md-4');
      // Title
      bookTitle.textContent = book.title;
      booksCol2.appendChild(bookTitle);
      // Author
      bookAuthor.textContent = `Author: ${book.author}`;
      bookAuthor.style.color = 'grey';
      booksCol2.appendChild(bookAuthor);
      // Description
      bookDesc.textContent = book.description;
      booksCol2.appendChild(bookDesc);

      // Append columns to the book-container
      bookContainer.appendChild(booksCol1);
      bookContainer.appendChild(booksCol2);

      // Append the book-container to the main books-container
      const booksContainer = document.getElementById('books-container');
      booksContainer.appendChild(bookContainer);
    });
  });
  } catch (error) {
  console.error('Error fetching or displaying data:', error);
}

}); // end form
