
const addTaskButton = document.querySelector("#addButton");
addTaskButton.addEventListener('click', function(){
    const getTask = document.getElementById("taskInput").value;
    if(getTask.length==0 || getTask=="" || getTask==null){
        alert("Lütfen görev giriniz")
    }else{
        document.querySelector('#tasks').innerHTML += `

        <div class="task">
            <span id="taskname">
                ${getTask}
            </span>
            <button class='delete'>
                <i class="far fa-trash-alt"></i>
            </button>
            <button class='completed'>
                <i class="fa fa-check" aria-hidden="true"></i>
            </button>
        </div>
    `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }

    }

    getTask='';
})