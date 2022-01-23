const taskContainer = document.querySelector(".task_container");
console.log(taskContainer);

const globalStore = [];

const deleteCard = (event) => {
  event = window.event;
  cont targetID = event.target.id;
  const tagname = event.target.tagName;
  globalstore = globalStore.filter((cardObject) => CardObject.id! == target);
localStorage.setItem("tasky",JSON.stringly({card: globalStore}));
if(tagname === "BUTTON"){
  return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode)
}
else{
    return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode)
  }

};


const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageurl: document.getElementById("imageURL").value,
    tasktitle: document.getElementById("taskTitle").value,
    tasktype: document.getElementById("taskType").value,
    taskdescription: document.getElementById("taskDescription").value,
  };
const newCard = `<div id=${taskData.id} class="col-md-6 col-lg-4">
    <div class="card">
<div class="card-header d-flex justify-content-end gap-2">
  <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
<button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
</div>
 <img src=${taskData.imageurl} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title fw-bold text-primary">${taskData.tasktitle}</h5>
  <p class="card-text">${taskData.taskdescription}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
  </div>`;

const loadInitialCardData = () => {
const getCardData = localStorage.getItem("tasky");

const{cards} = JSON.parse(getCardData);

cards.map((cardObject) => {
  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(CardObject))

  globalStore.push(cardObject);
}
)

}



taskContainer.insertAdjacentHTML("beforeend", newCard);
globalStore.push(taskData);
localStorage.setItem("tasky",JSON.stringyfy({cards: globalStore}));

}
