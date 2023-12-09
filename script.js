function addto(textdata){
    if(textdata.length == 0){
        alert("Kindly Enter Task Name!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                &#11166;&nbsp;${textdata}
                </span>
                <button id="edt" class="edit">
                <i class="fa-solid fa-pen" style="color: black;"></i>
                </button>
                <button id="del" class="delete">
                <i class="fa-solid fa-trash" style="color: black;"></i>
                </button>
            </div>
        `;
        var edit_tasks = document.querySelectorAll(".edit");
        for(var i=0; i<edit_tasks.length; i++){
            edit_tasks[i].onclick = function(){
                const edited = prompt("Edit Your Task Name")
                this.parentNode.remove();
                addto(edited)
        }
    }
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    inp.value=""
}