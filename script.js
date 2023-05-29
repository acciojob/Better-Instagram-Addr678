//your code here
// Store the currently dragged element
let draggedElement;

// Function to handle drag start event
function dragStart(event) {
  draggedElement = event.target;
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Function to handle drag over event
function dragOver(event) {
  event.preventDefault();
}

// Function to handle drop event
function drop(event) {
  event.preventDefault();
  const targetElement = event.target;

  // Swap the background images of the dragged and target elements
  const draggedElementStyle = draggedElement.style.backgroundImage;
  const targetElementStyle = targetElement.style.backgroundImage;

  draggedElement.style.backgroundImage = targetElementStyle;
  targetElement.style.backgroundImage = draggedElementStyle;
}

// Add event listeners to each grid item
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
  gridItem.addEventListener('dragover', dragOver);
  gridItem.addEventListener('drop', drop);
});

