const allDiv = document.querySelector("div");

function deleteAll() {
    for (let i = 0; i < allDiv.clientHeight; i++) {
        allDiv[i].style.display = 'none';
    }
}