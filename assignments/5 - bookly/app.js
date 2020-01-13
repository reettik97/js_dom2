

let state = JSON.parse(localStorage.getItem('state')) || [];
let search_filter = [];
let ul =  document.querySelector('ul');
let add_book = document.querySelector('#book-add');

function search_book(event){
    let searchBook = event.target.value + event.key;
    search_filter = state.filter(cv =>{
        
        for(let i = 0 ;i< searchBook.length;i++ ){
         if(cv[i].toUpperCase() != searchBook[i].toUpperCase())
         return false;
        }
        return true;
    })
    console.log(search_filter);
    view(search_filter);
}




let hideBooksFlag = false; 

function hide_books(event){
    hideBooksFlag = !hideBooksFlag;
    view(state);
}



function add_book_collection(event){
    // event.preventDefault();
    if(event.code == 'Enter'){
        console.log(event.target.value);

        state = state.concat(event.target.value);

        localStorage.clear();
        localStorage.setItem("state" , JSON.stringify(state));

        (event.target.value);
        event.target.value = '';
        view(state);
    }
}
function delete_book(event){
    // console.dir(event.target.dataset.id);
    state = state.filter((cv,i )=> !(event.target.dataset.id == i));
    localStorage.clear();
    localStorage.setItem("state" , JSON.stringify(state));

    view(state);
}

function view(array){

   ul.innerHTML = '';

   if(!hideBooksFlag){
   for(let i=0;i<array.length;i++){ 
       let div  = document.createElement('div');
       div.classList.add('flex');
       let li = document.createElement('li');
       let  del_btn = document.createElement('button');
       del_btn.setAttribute('data-id' , i);
       del_btn.innerHTML = "delete";
       li.textContent = array[i];
       del_btn.classList.add('del_btn');
       del_btn.addEventListener('click' , delete_book);
       div.append(li , del_btn);
       ul.append(div);      
 }
}
}


document.querySelector('#search-books').addEventListener('keydown' , search_book)
document.querySelector('input[type= checkbox]').addEventListener('click' , hide_books);
add_book.addEventListener('keydown' ,add_book_collection)
document.querySelector('#add-book').addEventListener('click' , (event)=>{
    event.preventDefault();
})
document.querySelector('#search-books').addEventListener('click' , (event)=>{
    event.preventDefault();
})

view(state);




