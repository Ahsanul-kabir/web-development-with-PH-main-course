const images = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg'
]

let imgIndex = 0;

const imgElement = document.getElementById('slider-img');

setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 2000)