document.getElementById("champtexte").addEventListener('submit', function (event) {
    event.preventDefault();
    let input = document.getElementById("text");
    let inputValue = input.value;
    let li = document.createElement("li");
    li.textContent = inputValue;
    let ul = document.getElementById("list-task")
    ul.appendChild(li);

    let buttonsuppr = document.createElement('button');
    buttonsuppr.setAttribute("id" , "buttonsupp");
    buttonsuppr.textContent = "Supprimer";
    buttonsuppr.addEventListener("click", function () {
        ul.removeChild(li)
        
    })
    li.appendChild(buttonsuppr)
let btnmdf = document.createElement('button');
btnmdf.textContent = 'Modifier';
btnmdf.classList.add('modif-btn');




});