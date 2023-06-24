//Sidebar
let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
           
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
    })    
});
//Menu Desplegable
(function(){
    const listElementsMenu = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = () => {
        listElementsMenu.forEach(element => {
            element.addEventListener('click', () => {
                let subMenu = element.children[1];
                let height =0;
                element.classList.toggle('menu__item--active')
                
                if(subMenu.clientHeight === 0){
                    height=subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;
            })
        })
    }

    const deleteStyleHeight = () => {
        listElementsMenu.forEach(element => {
            
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }
        });
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show')
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', () => list.classList.toggle('menu__links--show'))
    
})();

