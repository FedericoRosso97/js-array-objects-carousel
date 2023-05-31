const imagesList = [
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

/*let arrayIndex=3;

console.log(images[arrayIndex]);

const carousel=document.querySelector('.carousel');

for(i=0;i<images.length;i++){
    carousel.innerHTML +=`
    <div class="item hidden">
      <img src=${images[i].image}>
      <h1>${images[i].title}</h1>
      <p>${images[i].text}</p>
    </div>`;
}
document.querySelector('.item').classList.add('visible');
document.querySelector('.item').classList.remove('hidden');

console.log(arrayIndex);
const buttonRight=document.querySelector('.button-right');
const buttonLeft=document.querySelector('.button-left');

buttonRight.addEventListener('click',function(){
 
    if (arrayIndex == images.length - 1 ) {
        arrayIndex = 0;
    } else {
        arrayIndex = arrayIndex + 1;
    }
   document.querySelector('.item.visible').classList.remove('visible');
   document.querySelector('.item.hidden').classList.add('visible');
   document.querySelector('.item.hidden').classList.remove('hidden');
})
buttonLeft.addEventListener('click',function(){
    if (arrayIndex == images.length - 1 ) {
        arrayIndex = 0;
    } else {
        arrayIndex = arrayIndex + 1;
    }
    
    document.querySelector('.item.visible').classList.remove('visible');
    document.querySelector('.item.hidden').classList.add('visible');
    document.querySelector('.item.hidden').classList.remove('hidden');
 })*/

 const carouselElement = document.querySelector('div.carousel');
console.log(carouselElement);

let activeIndex = 0;

for ( let i = 0 ; i < imagesList.length ; i++ ){
    carouselElement.innerHTML +=
    `<div class="carousel-item hidden">
        <img src="${imagesList[i].image}" alt="Carousel slide image">
        <p>${imagesList[i].title}</p>
    </div>`;
}

document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('visible');
document.querySelectorAll('.carousel-item.visible')[activeIndex].classList.remove('hidden');

const prevButton = document.querySelector('.button-left');
prevButton.addEventListener('click', function(){
    if (activeIndex == 0 ) {
        activeIndex = imagesList.length - 1;
    } else {
        activeIndex = activeIndex - 1;
    }

   
    document.querySelector('.carousel-item.visible').classList.add('hidden');
    document.querySelector('.carousel-item.visible').classList.remove('visible');
   document.querySelector('.carousel-item.hidden').classList.add('visible');
   document.querySelector('.carousel-item.hidden').classList.remove('hidden');
});

const nextButton = document.querySelector('.button-right');
nextButton.addEventListener('click', function(){
    if (activeIndex == imagesList.length - 1 ) {
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }

    document.querySelector('div.carousel-item.visible').classList.remove('visible');
    document.querySelectorAll('div.carousel-item')[activeIndex].classList.add('visible');
});