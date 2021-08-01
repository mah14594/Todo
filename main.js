var item=document.getElementsByTagName("li");
for (i=0; i<item.length; i++){
    item[i].style.marginTop="15px";
}
document.getElementById("add").disabled=true;
document.getElementById("input-task").addEventListener("keyup",function(){
    var in1=document.getElementById("input-task").value;
    
    if (in1.length>3){
        document.getElementById("add").disabled=false;
    }
    else {
        document.getElementById("add").disabled=true;

    }
   
   
}
)




document.getElementById("add").addEventListener("click",function(){
    var in1=document.getElementById("input-task").value; //taking value from the input
    var li= document.createElement("li");  //create list element
    // write the value of the input to li  
    li.innerHTML=in1;
    li.className="todolist";
    //creat 2 divs one for the task and the other for the buttons 
    taskdiv=document.createElement("div");
    taskdiv.appendChild(li);
    taskdiv.style.display="inline-block";    
    //create the buttons 
    var bcheck=document.createElement("button");
    bcheck.className="fas fa-check icons";       //check mark class from font awseome
    var btrash=document.createElement("button");
    btrash.className="fa fa-trash icons";   //trash icon class from font awseome
    var bredo=document.createElement("button");
    bredo.className="fas fa-sync icons"; 
    //buttons div
    buttonsdiv=document.createElement("div");
    buttonsdiv.appendChild(btrash);
    buttonsdiv.appendChild(bcheck);
    var divtodo=document.createElement("div");      //creat the div that containe uncompleted tasks
    divtodo.className="not-completed-task"; //styling the div
    //put the two divs in one div 
    divtodo.appendChild(taskdiv);
    divtodo.appendChild(buttonsdiv);
//put the parent div as li in ol with id=not-completed
    document.getElementById("not-completed").appendChild(divtodo);
  //reset the input 
    document.getElementById("input-task").value="";
    document.getElementById("add").disabled=true;


    // function for check button

    bcheck.addEventListener("click",function()
    
    {
        /*the parent of the button is divbuttons , 
        and the parent of the divbuttons is the whole 
        div that contains li 
        */
        var parent=this.parentNode.parentNode;
        parent.remove();
        parent.className="completed-task";
        this.remove();
        
        document.getElementById("completed").appendChild(parent);                
 
    })
// function for trash button

btrash.addEventListener("click",function()
    
    {
        var parent=this.parentNode.parentNode;
        parent.remove();
    })


})

