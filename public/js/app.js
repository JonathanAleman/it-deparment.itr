
window.addEventListener('load', function(){
    new Glider(document.querySelector('.container__list'), {
        // Mobile-first defaults
        slidesToShow: 1,
        dots: '.dots',
        arrows: {
          prev: '.carousel-prev',
          next: '.carousel-next'
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 550,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2   ,
              slidesToScroll: 'auto',
              itemWidth: 150,
              duration: 0.75
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              itemWidth: 150,
              duration: 0.75
            }
          }
        ]
      });
});