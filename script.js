// A simple script to dynamically load header, home (body), and footer content

document.addEventListener("DOMContentLoaded", () => {
    loadPart('header.html', '#header');
    loadPart('home.html', '#content');
    loadPart('footer.html', '#footer');
});

function loadPart(file, selector) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading ' + file + ':', error);
        });
}
