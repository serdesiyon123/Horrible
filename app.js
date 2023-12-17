function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form will not be submitted unless you click on "Click Me"');
});

document.getElementById('myButton').addEventListener('mouseover', function(event) {
    event.target.style.position = 'absolute';
    event.target.style.left = Math.random() * window.innerWidth + 'px';
    event.target.style.top = Math.random() * window.innerHeight + 'px';
    event.target.textContent = 'You Wish';
});

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}