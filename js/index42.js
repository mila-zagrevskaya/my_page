var container = document.querySelector(
    ".result2").appendChild(
        document.createElement ("p"))

function exercise2 () {
  function LibraryBook ( title, year, author ) {
    this.bookTitle  = title || "книга"
    this.year = year || "нет данных"
    this.author = author || "нет данных"
    var readerName = null
    var readerData = null
    var giveTheBook = function  ( user, data = new Date() ) {
      readerName = user
      readerData = data
      return { title: title,
        year: year,
        author: author
      }
    }  
    this.getTheBook = function ( user,  data) {
      var getbook = ( !readerName ) ?
      giveTheBook ( user )  : 
      "Книга выдана читателю";
    }
    this.returnTheBook  = function () {
      readerName = null
      readerData = null
    }
    this.getBookInfo = function () {
      var info = readerName ? 
      ": Книга выдана читателю" : 
      ": Книга свободна"
      console.log (this.bookTitle, this.year, this.author, info )
      container.textContent = this.bookTitle, this.year, this.author, info
    }
  }

  var books = [];
  books.push (new LibraryBook ("муму", 1985, "Тургенев"));
  books.push (new LibraryBook ("Война и Мир", 1999, "Лев Толстой"));
  books.push (new LibraryBook ("Тарас Бульба", 1968, "Н.В. Гоголь"));
  books.push (new LibraryBook ("Обломов", 1976, "И.А. Гончаров"));
  books.push (new LibraryBook ("Приключения Тома Сойера", 1981, "М. Твен"));

  // Узнать возраст книги
  LibraryBook.prototype.getAge = function() {
    var d = new Date().getFullYear();
    return  (d - this.year + " years old " + "book: " + this.bookTitle) ;
  }

  books[4].getBookInfo ();
  books[4].getTheBook ("Mila Zagrevskaya", new Date (2019, 1, 25));
  books[4].getBookInfo ();
  books[4].returnTheBook ();
  books[4].getBookInfo ();

  console.log (books[4].getAge());
  console.log (books[2].getAge());

}




