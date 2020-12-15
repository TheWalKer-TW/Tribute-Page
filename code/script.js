const card = document.querySelector('.card');
const albumsItems = document.querySelector('.albums-items');

//Items
const albumTitle = document.querySelector('.info')
const imgAlbum = document.querySelector('.img_album img')

// Moving animation event
albumsItems.addEventListener('mousemove', (e)=>{
    card.style.transform = `rotateY(${20}deg) rotateX(${10}deg)`;
});

//Animate In
albumsItems.addEventListener('mouseenter', (e)=>{
    card.style.transition = 'all 1s ease';
    //Popout effect
    imgAlbum.style.transform = 'translateZ(140px) scaleX(1.25) scaleY(1.25)';
    albumTitle.style.transform = 'translateZ(150px) translateX(-20px) translateY(25px) scaleX(1.25) scaleY(1.25)';
});

// Animate Out, puts it back on the starting position
albumsItems.addEventListener('mouseleave', (e)=>{
    card.style.transition = 'all 2s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    albumTitle.style.transform = 'translateZ(0px) scaleX(1) scaleY(1)';
    imgAlbum.style.transform = 'translateZ(0px) translateX(0px) translateY(0px) scaleX(1) scaleY(1)';
});

const card2 = document.querySelector('.card2');
const albumsItems2 = document.querySelector('.albums-items2');

//Items
const albumTitle2 = document.querySelector('.info2')
const imgAlbum2 = document.querySelector('.img_album2 img')

// Moving animation event
albumsItems2.addEventListener('mousemove', (e)=>{
    card2.style.transform = `rotateY(${20}deg) rotateX(${10}deg)`;
});

//Animate In
albumsItems2.addEventListener('mouseenter', (e)=>{
    card2.style.transition = 'all 1s ease';
    //Popout effect
    imgAlbum2.style.transform = 'translateZ(140px) scaleX(1.25) scaleY(1.25)';
    albumTitle2.style.transform = 'translateZ(150px) translateX(-20px) translateY(25px) scaleX(1.25) scaleY(1.25)';
});

// Animate Out, puts it back on the starting position
albumsItems2.addEventListener('mouseleave', (e)=>{
    card2.style.transition = 'all 2s ease';
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    albumTitle2.style.transform = 'translateZ(0px) scaleX(1) scaleY(1)';
    imgAlbum2.style.transform = 'translateZ(0px) translateX(0px) translateY(0px) scaleX(1) scaleY(1)';
});

const card3 = document.querySelector('.card3');
const albumsItems3 = document.querySelector('.albums-items3');

//Items
const albumTitle3 = document.querySelector('.info3')
const imgAlbum3 = document.querySelector('.img_album3 img')

// Moving animation event
albumsItems3.addEventListener('mousemove', (e)=>{
    card3.style.transform = `rotateY(${20}deg) rotateX(${10}deg)`;
});

//Animate In
albumsItems3.addEventListener('mouseenter', (e)=>{
    card3.style.transition = 'all 1s ease';
    //Popout effect
    imgAlbum3.style.transform = 'translateZ(140px) scaleX(1.25) scaleY(1.25)';
    albumTitle3.style.transform = 'translateZ(150px) translateX(-20px) translateY(25px) scaleX(1.25) scaleY(1.25)';
});

// Animate Out, puts it back on the starting position
albumsItems3.addEventListener('mouseleave', (e)=>{
    card3.style.transition = 'all 2s ease';
    card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    albumTitle3.style.transform = 'translateZ(0px) scaleX(1) scaleY(1)';
    imgAlbum3.style.transform = 'translateZ(0px) translateX(0px) translateY(0px) scaleX(1) scaleY(1)';
});

const card4 = document.querySelector('.card4');
const albumsItems4 = document.querySelector('.albums-items4');

//Items
const albumTitle4 = document.querySelector('.info4')
const imgAlbum4 = document.querySelector('.img_album4 img')

// Moving animation event
albumsItems4.addEventListener('mousemove', (e)=>{
    card4.style.transform = `rotateY(${20}deg) rotateX(${10}deg)`;
});

//Animate In
albumsItems4.addEventListener('mouseenter', (e)=>{
    card4.style.transition = 'all 1s ease';
    //Popout effect
    imgAlbum4.style.transform = 'translateZ(140px) scaleX(1.25) scaleY(1.25)';
    albumTitle4.style.transform = 'translateZ(150px) translateX(-20px) translateY(25px) scaleX(1.25) scaleY(1.25)';
});

// Animate Out, puts it back on the starting position
albumsItems4.addEventListener('mouseleave', (e)=>{
    card4.style.transition = 'all 2s ease';
    card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    albumTitle4.style.transform = 'translateZ(0px) scaleX(1) scaleY(1)';
    imgAlbum4.style.transform = 'translateZ(0px) translateX(0px) translateY(0px) scaleX(1) scaleY(1)';
});

const card5 = document.querySelector('.card5');
const albumsItems5 = document.querySelector('.albums-items5');

//Items
const albumTitle5 = document.querySelector('.info5')
const imgAlbum5 = document.querySelector('.img_album5 img')

// Moving animation event
albumsItems5.addEventListener('mousemove', (e)=>{
    card5.style.transform = `rotateY(${20}deg) rotateX(${10}deg)`;
});

//Animate In
albumsItems5.addEventListener('mouseenter', (e)=>{
    card5.style.transition = 'all 1s ease';
    //Popout effect
    imgAlbum5.style.transform = 'translateZ(140px) scaleX(1.25) scaleY(1.25)';
    albumTitle5.style.transform = 'translateZ(150px) translateX(-20px) translateY(25px) scaleX(1.25) scaleY(1.25)';
});

// Animate Out, puts it back on the starting position
albumsItems5.addEventListener('mouseleave', (e)=>{
    card5.style.transition = 'all 2s ease';
    card5.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    albumTitle5.style.transform = 'translateZ(0px) scaleX(1) scaleY(1)';
    imgAlbum5.style.transform = 'translateZ(0px) translateX(0px) translateY(0px) scaleX(1) scaleY(1)';
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------