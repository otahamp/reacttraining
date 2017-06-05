import React from 'react';

class Book extends React.Component {
  submitBook(newBook) {
    if(newBook) {
      alert('New Book Added!' + JSON.stringify(newBook));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var book = {
      title: this.inputTitle.value
    };
    this.submitBook(book);
    /*clears the complete form values*/
    event.target.reset();
  }

  render() {
    let availableBooks = this.props.books || [];
    let markup= (
      <div class="jumbotron">
        <h1>Available Books</h1>
        <ul>
        {
          availableBooks.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))
        }
        </ul>
        <div>
          <form onsubmit={this.handleSubmit.bind(this)}>
            <input type = 'text' name="inputTitle" ref={node => this.inputTitle = node}/>
            <input type = 'submit' name="submitBook" />
          </form>
        </div>
      </div>
    );
    return markup;
  }
}

export default Book;
