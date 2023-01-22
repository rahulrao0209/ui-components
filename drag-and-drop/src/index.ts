/* Get the todo and done lists (drop areas) */
const getDomLists = function () {
  const todoList = document.querySelector(
    ".list__tasks--todo"
  )! as HTMLUListElement;
  const doneList = document.querySelector(
    ".list__tasks--done"
  )! as HTMLUListElement;

  return {
    todoList,
    doneList,
  };
};

const handleDragEnter = function (event: Event) {
  event.preventDefault();
  console.log("I am here: ", event.target);
};

const handleOnDrop = function (event: Event) {
  event.preventDefault();
};

/* Init function */
const init = (function () {
  const { todoList, doneList } = getDomLists();

  /* Add the drop area event handlers to the lists */
  todoList.addEventListener("dragenter", handleDragEnter);
  doneList.addEventListener("dragenter", handleDragEnter);

  todoList.addEventListener("ondrop", handleOnDrop);
  doneList.addEventListener("ondrop", handleOnDrop);
})();
