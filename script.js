const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
     {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
     {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
     {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images)

const carousel=document.querySelector('.carousel');
/*carousel.classList.add('visible');*/
carousel.innerHTML +=`
<img src="${images[0].image}" alt="img">
<h1>${images[0].title}</h1> 
<p>${images[0].text}</p>`;
//'<img src="img/01.webp" alt="img">';

const buttonRight=document.querySelector('.button-right');
const buttonLeft=document.querySelector('.button-left');

let imagesArray=['<img src="img/01.webp" alt="img">','<img src="img/02.webp" alt="img">','<img src="img/03.webp" alt="img">','<img src="img/04.webp" alt="img">','<img src="img/05.webp" alt="img">',]
let arrayIndex=0;
buttonRight.addEventListener('click',function(){
  arrayIndex++;

  carousel.innerHTML +=`<img src="${images[arrayIndex].image}" alt="img">
                       <h1>${images[arrayIndex].title}</h1> 
                        <p>${images[arrayIndex].text}</p>`;
   
                        /*document.querySelector('.carousel').classList.remove('visible')
   document.querySelector('.carousel').classList.add('invisible')*/
 
})