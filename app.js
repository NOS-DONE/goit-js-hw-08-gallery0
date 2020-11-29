import galleryitems from './gallery-items.js';

const galleryUlRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const closeButtonRef = document.querySelector('button[data-action="close-lightbox"]');
const lightboxImageRef = document.querySelector('.lightbox__image');
const onBackdropClick = document.querySelector('.lightbox__overlay');
let activeIndex;

galleryitems.map((item, index) => {
  console.log(index);
  // console.log(item.original);
  // console.log(galleryitems[index].original);

    galleryUlRef.insertAdjacentHTML('afterbegin', 
    `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      data-index=${index}
    />
  </a>
</li>
    `)
  // const currentSRC = item.original
  // return currentSRC;
});




onBackdropClick.addEventListener('click', closeLightboxModal);
closeButtonRef.addEventListener('click', closeLightboxModal)
galleryUlRef.addEventListener('click', openLightboxModal);



function openLightboxModal(event) {
  event.preventDefault();
  console.log(event.target.dataset.index);
  console.dir(lightboxImageRef);


    if (event.target.nodeName === 'IMG') {
        lightboxImageRef.src = event.target.dataset.source;
        lightboxRef.classList.add('is-open');
        window.addEventListener('keydown', onEscapeClick);
        window.addEventListener('keydown', onLeftArrow);
        window.addEventListener('keydown', onRightArrow);

     activeIndex = event.target.dataset.index
      // console.log(activeIndex)
    }
}



function closeLightboxModal(event) {
    lightboxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
    window.removeEventListener('keydown', onEscapeClick);
}

function onEscapeClick(event) {
    if (event.code === 'Escape') {
            closeLightboxModal()
        }
}



function onRightArrow(event) {
  if (event.code === 'ArrowRight') {
    // console.log(event);
    console.log(lightboxImageRef.src);
    console.log(activeIndex)
    console.log(galleryitems[activeIndex].original)
    

    // if (activeIndex) {
      lightboxImageRef.src = galleryitems[activeIndex - 1].original;
      console.log(lightboxImageRef.src);
      activeIndex -= 1;
    // }


    }
}

function onLeftArrow(event) {
  if (event.code === 'ArrowLeft') {
    // console.log(event);
    console.log(lightboxImageRef.src);
    console.log(activeIndex)
    console.log(galleryitems[activeIndex].original)
    

    if (activeIndex === lightboxImageRef.dataset.index) {
      lightboxImageRef.src = galleryitems[activeIndex + 1].original;
      console.log(lightboxImageRef.src);
      activeIndex += 1;
    }


    }
}