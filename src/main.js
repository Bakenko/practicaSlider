const option1 = document.querySelector('#sub-list1');
const option2 = document.querySelector('#sub-list2');

option1.addEventListener('click', toggleOption1);
option2.addEventListener('click', toggleOption2);

function toggleOption1(){
    const isOption1Close = option2.classList.contains('inactive');

    if(isOption1Close){
        option2.classList.add('inactive');
    }

    option1.classList.toggle('inactive');
}

function toggleOption2(){
    const isOption2Close = option1.classList.contains('inactive');

    if(isOption2Close){
        option1.classList.add('inactive');
    }

    option2.classList.toggle('inactive');
}