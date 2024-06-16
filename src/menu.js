export function addParaMenu(){
    
    while(content.firstChild){
        content.firstChild.remove();
    };
    
    const paraMenu = document.createElement('p');
    paraMenu.textContent = "Dolor ipsum blah blah ";

    paraMenu.classList.add('menuP');
    
    content.appendChild(paraMenu);
}