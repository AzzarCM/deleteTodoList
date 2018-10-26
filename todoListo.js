window.onload = init;
   
function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            element.innerText = task;
            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });*/
            let boton = document.createElement("button");
            this.listHTML.appendChild(boton);
            boton.style.backgroundColor = "black";
            boton.style.width = "15px";
            boton.style.height = "15px";
            boton.addEventListener("click", function(){
                let padre = element.parentNode;
                let padre1 = boton.parentNode;
                if(padre && padre1){
                    padre.removeChild(element);
                    padre1.removeChild(boton);
                    console.log("removed: " + element.textContent);
                }
            });

            /*

            element.addEventListener("click", function(){
               console.log(this);
               let parent = this.parentNode;
               if(parent){
                   parent.removeChild(this);
               }
            });
            */
           // Añadir un boton para marcar de finalizado
           // Elmine de la lista

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        },
        
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });

}