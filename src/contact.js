export function addParaContact(){

    while(content.firstChild){
        content.firstChild.remove();
    };
    const paraContact = document.createElement('p');
    paraContact.textContent = "Dolor ipsum blah ";

    paraContact.classList.add('contactP');
    
    content.appendChild(paraContact);
}