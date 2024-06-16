
export function addParaHome(){
    while(content.firstChild){
        content.firstChild.remove();
    };

    const paraHome = document.createElement('p');
    paraHome.textContent = "Dolor ipsum blah blah blah";
    paraHome.classList.add('homeP');
    
    content.appendChild(paraHome);

};