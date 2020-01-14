let take_input = document.querySelector('input');
 
let ul = document.createElement('ul'); 
document.querySelector('#push-task').appendChild(ul);
//create a one time ul 


function add_task(e){
//in function add_task we add the tasks
   if(e.keyCode == 13){
   let task_to_add = e.target.value;

   let li = document.createElement('li');
   let input_checkbox = document.createElement('input');
   input_checkbox.type = 'checkbox';
   let p  = document.createElement('p');
   let span = document.createElement('span');

 //create the task table
   ul.appendChild(li);
   li.appendChild(input_checkbox)
   p.textContent = task_to_add;
   span.innerHTML = "&#10005;"
   li.appendChild(p);
   li.appendChild(span);
   li.classList.add("flex" ,"task_box");
   p.classList.add('task'); 
   
   e.target.value = ''; //remove the input text

   //remove the task
   span.addEventListener("click" ,remove_task =>{
       span.parentElement.remove();
   });
   
 

   //if the task done line through it
   input_checkbox.addEventListener('change' ,function(){
       if(this.checked){
           p.style.textDecoration = 'line-through';
       }else{
           p.style.textDecoration = 'none';
       }
   });
   
   
   function edit(event){
       let create_input = document.createElement('input') ;
       let parentElement = p.parentElement;
       
        // parentElement.re 


       
    //    console.log(parentElement);          
   }

   p.addEventListener("click" , edit);


   
   //edit the task
    // p.addEventListener("click" , function(){
        
    //     var li_parent_element = p.parentElement;
    //     var create_new_input = document.createElement('input');

        
    //     li_parent_element.childNodes[1].remove();
    //     li_parent_element.childNodes[1].remove();

    //     create_new_input.classList.add('input');
    //     create_new_input.style.width = '90%';
    //     // create_new_input.style.height = '100%';
        
    //      create_new_input.addEventListener('keydown' , function(e){
    //          if(e.keyCode == 13 ){
    //             let task_to_add = e.target.value; 

                
    //             let p  = document.createElement('p');
    //             let span = document.createElement('span');
  
    //             p.textContent = task_to_add;
    //             span.innerHTML = "&#10006;"
    //             li_parent_element.appendChild(p);
    //             li_parent_element.appendChild(span);
    //             li_parent_element.classList.add("flex" ,"task_box");
    //             p.classList.add('task'); 
                
    //             e.target.value = '';
    //          }
    //      })

    //      li_parent_element.appendChild(create_new_input);

        // console.log( );
    // });
    




   //  2nd try
    
    
 





   }
   


}

take_input.addEventListener("keydown" ,   add_task);

 
