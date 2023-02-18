let favList = [];

function setup() 
{
    let books = document.querySelectorAll(".btn");
    for (let i = 0; i < books.length; i++)
    {
        books[i].onclick = function(e) {
            console.log(books[i])
            addItem(e);
        }
    }
}
 
function addItem (e) {
    let bookId = e.target.getAttribute("id");
    console.log(bookId)
    if(!favList.find(element => element === bookId)){
        let bookDiv = document.getElementById("book" + bookId);
        console.log(bookDiv)
        let favDiv = document.createElement("div");
        favDiv.setAttribute("id", "wish" + bookId);
        favDiv.setAttribute("class", "book");
        favDiv.setAttribute("style", "margin-bottom: 10px;")
        console.log(favDiv)
        favDiv.innerHTML += bookDiv.innerHTML;
        let removeBtn = document.createElement("input");
        removeBtn.setAttribute("id", "remove" + bookId);
        removeBtn.setAttribute("type", "button");
        removeBtn.setAttribute("value", "Remove");
        removeBtn.setAttribute("class", "removebut");
        removeBtn.onclick = () => removeItem(bookId);
        favDiv.appendChild(removeBtn);

        let aside = document.getElementById("favList");
        aside.appendChild(favDiv);

        favList.push(bookId); 
    }
}

function removeItem(bookId) {
    document.getElementById("wish" + bookId).remove();
    favList = favList.filter(element => element !== bookId)
}

window.addEventListener("load", setup);
