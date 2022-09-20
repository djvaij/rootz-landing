import {useRef} from 'react';
import styles from './CarouselSection.module.scss';
import './swiper.scss';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide1 from '../../../assets/slide1.png';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import slide4 from '../../../assets/slide4.jpg';
import slide5 from '../../../assets/slide5.jpg';
import slide6 from '../../../assets/slide6.jpg';

const slidesData = [
  {
    image: slide1,
    title: 'Save watter',
    description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    image: slide2,
    title: 'Plant trees',
    description: 'Taking on the issue of ensuring access to plant trees requires worldwide effort.',
  },
  {
    image: slide3,
    title: 'Save energy',
    description: 'Taking on the issue of ensuring access to save energy requires worldwide effort.',
  },
  {
    image: slide4,
    title: 'Avoid plastic',
    description: 'Taking on the issue of ensuring access to avoid plastic requires worldwide effort.',
  },
  {
    image: slide5,
    title: 'Choose organic',
    description: 'Taking on the issue of ensuring access to choose organic requires worldwide effort.',
  },
  {
    image: slide6,
    title: 'Last slide',
    description: 'This is the last slide text',
  },
];

function CarouselSection() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  const slides = slidesData.map(({image, title, description}, index) => {
    return (
      <SwiperSlide
        className={styles.slide}
        key={crypto.randomUUID() || title}
      >
        <div className={styles.slideWrapper}>
          <img src={image} alt={`Slide ${index}`} />
          <div className={styles.slideContent}>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      </SwiperSlide>
    );
  })

  return (
    <section className={styles.carousel}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={56}
        grabCursor={true}
        loop={true}
        pagination={{
          el: paginationRef.current,
          type: "fraction",
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSwiper={swiper => {
          swiper.params.pagination.el = paginationRef.current;
          swiper.pagination.init();
          swiper.pagination.render();
        }}
        onPaginationRender={swiper => {
          swiper.pagination.init();
          swiper.pagination.update();
        }}
        onInit={swiper => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          slidesPerView: 1,
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 4,
          }
        }}
      >
        {slides}
        <div className="swiper-navigation-wrapper">
          <div className="swiper-prev" ref={navigationPrevRef}></div>
          <div className="swiper-pagination" ref={paginationRef}></div>
          <div className="swiper-next" ref={navigationNextRef}></div>
        </div>
      </Swiper>
    </section>
  );
}

export default CarouselSection;
