let addButton = document.querySelector('.addButton');
let taskContainer = document.querySelector('#task');
let input = document.querySelector('.input');


// we need to make a funtion to add a task

addButton.addEventListener('click', function() {
    var task = document.createElement('p');
    task.classList.add('paragraph-styling')
    task.innerText = input.value;
    // append the input field value
    taskContainer.appendChild(task);
    // we dont want to input value inside the input field
    input.value = " "
    task.addEventListener('click', function() {
            task.style.textDecoration = 'line-through'

        })
        // double click to remove

    task.addEventListener('dblclick', function() {
        taskContainer.removeChild(task)

    })
});


// var myNodelist = document.getElementsByTagName("task");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("delete");
// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }