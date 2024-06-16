export function addParaAbout(){
    
    while(content.firstChild){
        content.firstChild.remove();
    };
    const paraAbout = document.createElement('p');
    paraAbout.textContent = "Dolor ipsum";
    
    paraAbout.classList.add('aboutP');
    content.appendChild(paraAbout);
}