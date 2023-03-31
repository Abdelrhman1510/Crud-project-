var bookName = document.getElementById("bookName");
var bookUrl = document.getElementById("bookUrl");
var wrongInputName = document.getElementById("wrongInputName")
var wrongInputUrl = document.getElementById("wrongInputUrl")
var bookList;

if(localStorage.getItem("bookList")==null){
    bookList=[];


}else{

    bookList=JSON.parse(localStorage.getItem("bookList"));
    displayBook(bookList);
}

function addBook (){
    if(valdiateBookName() && valdiateUrlName()){
        var book={

            bookName : bookName.value,
            bookUrl : bookUrl.value,
        }
        bookList.push(book);
        localStorage.setItem("bookList",JSON.stringify(bookList));
        displayBook(bookList);
       
        clearInputs();}

   
   


}

function displayBook(books){
    cartona = ``;
    for(var i =0 ; i<books.length;i++){

        cartona +=`     <div class="col-lg-4 col-md-6">
        <div class="card p-1 rounded-1 text-black " >
            <img src="images/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title mb-4">${books[i].bookName}</h5>
             
              <a href="${books[i].bookUrl}" target="_blank" class="btn btn-primary">Visit</a>
              <a  onclick="deleteBook(${i})" class="btn btn-danger">Delete</a>
            </div>
          </div>
    </div>`
    }
    document.getElementById("library").innerHTML=cartona;

}
function clearInputs(){

    bookName.value="";
    bookUrl.value="";
}

function deleteBook(index){

    bookList.splice(index,1);
    localStorage.setItem("bookList",JSON.stringify(bookList));
    displayBook(bookList);


}

function valdiateBookName(){

    var regex= /^[A-Z][a-z]{3,100}$/
    
        if (regex.test(bookName.value) == true){

            return true;
        }else{
            bookName.style.border="2px solid red"
            wrongInputName.classList.replace("d-none", "d-block")
            return false;
           
        }
    }

function valdiateUrlName (){

    var regex= /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    if (regex.test(bookUrl.value) == true){

        return true;
    }else{
        bookUrl.style.border="2px solid red"
        wrongInputUrl.classList.replace("d-none", "d-block")
        return false;
       
    }
}

