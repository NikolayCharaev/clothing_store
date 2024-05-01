import Image from 'next/image';
import './styles.scss';
import 'swiper/css';
import 'swiper/element/css/autoplay';
import 'swiper/element/css/navigation';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <swiper-container
          autoplay="2000"
          data-swiper-autoplay="100"
          speed="200"
          slides-per-view="1"
          loop="true"
          css-mode="true"
          navigation="true">
          <swiper-slide>
            <Image
              src={
                'https://kartinki.pics/pics/uploads/posts/2022-08/1660803292_5-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-6.jpg'
              }
              width={1920}
              height={1080}
              alt="slider-item"
            />
          </swiper-slide>
          <swiper-slide>
            <Image
              src={
                'https://kartinki.pics/pics/uploads/posts/2022-08/1660803315_8-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-9.jpg'
              }
              width={1920}
              height={1080}
              alt="slider-item"
            />
          </swiper-slide>
          <swiper-slide>
            <Image
              src={
                'https://kartinki.pics/pics/uploads/posts/2022-08/1660803337_9-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-10.jpg'
              }
              width={1920}
              height={1080}
              alt="slider-item"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};

export default Slider;
