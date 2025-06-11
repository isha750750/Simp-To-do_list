// Get references to DOM elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh

  const todoText = input.value.trim();

  if (todoText !== '') {
    // Create list item
    const li = document.createElement('li');
    li.textContent = todoText;

    // Add click event to mark as complete
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    // Add item to the list
    list.appendChild(li);

    // Clear input box
    input.value = '';
  }
});
