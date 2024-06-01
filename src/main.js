// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';


const notFoundTextEl = document.querySelector('.empty-text');
  const reviewsEl = document.querySelector('.reviews-list');

    const fetchReviews = (searchReviews) => {
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }
  return fetch(`https://portfolio-js.b.goit.study/api/reviews`, options).then(response =>{
    if (!response.ok){
      throw new Error(
        'No reviews'
      );
    }
    return response.json();
  });
}

const createMarkup = cards => {
  return images.reduce(
    (
      html,cards
    ) => {
      return (
        html +`<li class="reviews-item swiper-slide">
          <p class="reviews-text">${card.review}</p>
          <div class="reviewer">
            <img src="${card.avatar_url}" alt="${card.author}" class="reviewer-img">
            <h3 class="reviewer-name">${card.author}</h3>
          </div>
        </li>`

      );
    },
    ''
  );
};

//   const createMarkup = reviews => {
//     return reviews.reduce((html, { id, author, avatar_url, review }) => {
//       return (
//         html +
//         `<li class="reviews-item swiper-slide">
//           <p class="reviews-text">${review}</p>
//           <div class="reviewer">
//             <img src="${avatar_url}" alt="${author}" class="reviewer-img">
//             <h3 class="reviewer-name">${author}</h3>
//           </div>
//         </li>`
//       );
//     }, '');
// };


// const createMarkup = cards => {
//   return cards.reduce(
//     (
//       html, card
//     ) => {
//       return (
//         html + `<li class="reviews-item swiper-slide">
//           <p class="reviews-text">${card.review}</p>
//           <div class="reviewer">
//             <img src="${card.avatar_url}" alt="${card.author}" class="reviewer-img">
//             <h3 class="reviewer-name">${card.author}</h3>
//           </div>
//         </li>`);
//     }, ``);
// }


console.log(createMarkup);

  // fetchReviews()
  //   .then(data => {
  //     if (data && data.reviews && data.reviews.length > 0) {
  //       const markup = createMarkup(data.reviews);
        reviewsEl.insertAdjacentHTML('beforeend', createMarkup);

        // // Initialize Swiper
        // const swiper = new Swiper('.swiper', {
        //   direction: 'horizontal',
        //   slidesPerView: 1,
        //   spaceBetween: 10,
        //   breakpoints: {
        //     1280: {
        //       slidesPerView: 2,
        //       spaceBetween: 40,
        //     },
        //   },
        //   keyboard: {
        //     enabled: true,
        //     onlyInViewport: false,
        //   },
        //   mousewheel: {
        //     invert: true,
        //   },
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //   },
        //   on: {
        //     reachEnd: function () {
        //       this.navigation.nextEl.classList.add('swiper-button-disabled');
        //     },
        //     reachBeginning: function () {
        //       this.navigation.prevEl.classList.add('swiper-button-disabled');
        //     },
        //     fromEdge: function () {
        //       this.navigation.nextEl.classList.remove('swiper-button-disabled');
        //       this.navigation.prevEl.classList.remove('swiper-button-disabled');
        //     },
        //   },
        // });
    //   } else {
    //     notFoundTextEl.classList.remove('is-hidden');
    //   }
    // })
    // .catch(error => {
    //   notFoundTextEl.classList.remove('is-hidden');
    // });
