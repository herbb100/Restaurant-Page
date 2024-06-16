import homePic from './home.jpg';

export function addParaHome(){
    while(content.firstChild){
        content.firstChild.remove();
    };

    const homeContent = document.createElement('div');

    const homeLeft = document.createElement('div');
    const homeLeftHeader = document.createElement('h1');

    const homeRight = document.createElement('div');
    const homePhoto = new Image();
    homePhoto.src = homePic;

    homeLeftHeader.textContent = "A FILLING MEAL THAT CAN LAST A WHOLE DAY";

    homeContent.classList.add('homeContent')
    homeLeft.classList.add('homeLeft');
    homeRight.classList.add('homeRight');

    homeRight.appendChild(homePhoto);
    homeLeft.append(homeLeftHeader);
    homeContent.append(homeLeft,homeRight);
    content.appendChild(homeContent);

};