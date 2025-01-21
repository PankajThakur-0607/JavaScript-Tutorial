

// Activity 1 
    const  book = {
        title : "Think and Grow Rich ",
        author :"Napolean Hill" , 
        year : 1997,
        show : function(title , author){
            return `The Title of book is ${title} and Author is : ${author}`
        },
        updateYear : function(year){
            return book.year + 5 ;
        },
        
    }

    // console.log(book);

    // console.log(book['title']);
    // console.log(book['author']);

    // Activity 2 

    // console.log(book.show(book.title , book.author));
    // console.log(book.updateYear(book.year));
    // console.log(book.year);


    // Activity 3 ;

    const  library = {
        name: "City Central Library",
        books: [
          {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
          },
          {
            title: "1984",
            author: "George Orwell",
            year: 1949,
          },
          {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
          },
        ],
        address : {
            lane1 : "hello" ,
            lane2 : [
                {pincode : 396170},
                {district : 'Valsad'}
            ]
        },
        showBooksInfo : function(){
            return this.books.map((book) => {
               return `The title is of book : ${book.title}  published in ${book.year}`
            });
        }
    }


    // console.log(library);
    // console.log(library['name']);

    let allBookTitle = library.books.map(function(book){
        return book.title;
    });

    // console.log(allBookTitle);

    let allBookSummary = library.books.map((book) => {
        return {summary : `${book.title} by ${book.author}, published in ${book.year}.` }
    })

    // console.log(allBookSummary);


    // Activity 4 

    // console.log(library.showBooksInfo());

    //Activity 5 
    for(const key in book){
        console.log(`${key} : ${book[key]}`);
    }

    // let keys = Object.keys(book);
    // console.log(keys);
    // let values = Object.values(book);
    // console.log(values);


    