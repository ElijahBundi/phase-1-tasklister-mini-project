document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target['new-task-description'].value)  
    form.reset()
  })
});

function handleToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X';
  li.textContent = `${todo}   `;
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)

}

function handleDelete(e) {
  e.target.parentNode.remove()
}
// document.createElement('li')

// console.log(document.querySelector('#tasks'))










