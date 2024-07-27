const ROW = 'row';

// Example usage in a function to add a class to an element
function createRowElement() {
    const div = document.createElement('div');
    div.classList.add(ROW); // Adds the class 'row' to the div
    return div;
}

// Example usage in HTML:
document.body.appendChild(createRowElement());
