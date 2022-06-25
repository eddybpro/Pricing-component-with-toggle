const activate = document.getElementById('activate');
const buttons = document.querySelectorAll('.btn');


activate.addEventListener('click',()=>{
    activate.style.backgroundColor = 'rgb(117, 117, 100)';
    buttons.forEach(btn =>{
        btn.style.color = 'rgb(117, 117, 241)'
        btn.style.backgroundColor = 'transparent'
        btn.style.cursor = 'not-allowed'
    })
    buttons[1].style.color = '#ffffff';

})
activate.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    
    activate.style.backgroundColor = 'rgb(117, 117, 241)';

    buttons.forEach(btn =>{
        btn.style.color = '#ffffff'
        btn.style.backgroundColor = 'rgb(117, 117, 241)'
        btn.style.cursor = 'pointer'
        })
        buttons[1].style.color = '#ffffff';
    }
)