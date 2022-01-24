// Adaugare task prin apasarea iconitei +;

let input = document.getElementById('list__i');
let lista = document.querySelector('.list__add');
let buton = document.getElementById('list__deletebutton');

input.addEventListener('click', addTaskClicking);

function addTaskClicking() {
    let content = document.getElementById('list__input').value;

    if(content != '') {

        const ssiDiv = document.createElement('div');
        ssiDiv.classList.add('list__todo');

        const ssiLi = document.createElement('li');
        ssiLi.innerText = `${content}`;
        ssiLi.classList.add('list__item');

        ssiDiv.appendChild(ssiLi);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        deleteButton.classList.add("list__delete");
        ssiDiv.appendChild(deleteButton);

        lista.appendChild(ssiDiv);

    }
}


// Adaugare task prin apasarea tastei enter cand input-ul este focusat;

let input1 = document.getElementById('list__input');

input1.addEventListener('keypress', addTaskEntering); //Event care se produce atunci cand o tasta care este reprezentata printr-o valoare este apasat(gen enter == 13); Eventul este depreated,a nu se mai folosi

function addTaskEntering(event) {

    let content = document.getElementById('list__input').value;

    if(event.keyCode === 13 && content != '') { //event.keyCode verificam daca tasta apasata este enter si atunci realizam un nou task.



        const ssiDiv = document.createElement('div');
        ssiDiv.classList.add('list__todo');

        const ssiLi = document.createElement('li');
        ssiLi.innerText = `${content}`;
        ssiLi.classList.add('list__item');

        ssiDiv.appendChild(ssiLi);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        deleteButton.classList.add("list__delete");
        ssiDiv.appendChild(deleteButton);

        lista.appendChild(ssiDiv);

    }
}

// Functie pentru stergerea elementelor in parte

lista.addEventListener('click', deleteElement); //Adaugam event listener asupra listei cu task-uri astfel cand dam click pe un element al acesteia sa se declanseze functia deleteElement

function deleteElement(e) { // e=event
    const item = e.target; //aici ne stocam in obiectul item (e.target produce o data de tip obiect) pe ce dam click, elementul pe care dam click, acela este preluat cu target (li, button);

    if(item.classList[0] === 'list__delete') { // Noi vrem ca atunci cand dam click pe button sa se stearga elementul astfel cu if-ul verificam daca am dat click pe buton stiind ca aceseta are clasa list__delete si atunci sa ni se stearga un task al listei.
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });

    }
}


// Functie pentru stergerea tuturor elementelor

const deleteElements = () => {
    let lista = document.getElementById('list__ul'); // Preluam elementul ul care are toate task-urile div

    while(lista.firstChild) { // Atata timp cat exista un first child acesta se sterge la click, iar urmatorul devine firstchild, evenimentul se produce pana nu mai exista nici unul si se sterg toate, acesta se intampla printr-un singur click.
        lista.removeChild(lista.firstChild);
    }
}

buton.addEventListener('click', deleteElements);



// Togle class function

const togleClass = (e) => {
    const itemClass = e.target;

    if(itemClass.classList[0] === 'list__item') {
        itemClass.classList.toggle('togle');
    }
}

lista.addEventListener('click', togleClass);


// Cum se foloseste lista

const listInformations = () => {
    confirm('You can add a new task by pressing enter while the input field is focused or you can press click on + sign button. You can delete one element or delete all of them by pressing "Delete all"  button. If you click on a task created it will become green wich means you acomplished that task. Wish you best of luck!');
}

addEventListener('onload', listInformations());




