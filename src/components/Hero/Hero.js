import { Swiper,SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination,Autoplay } from "swiper";

export default function bgace() {
    return(
        <Swiper
            className="img-auto"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            style={{
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bullet-size": " 12px",
            }}
        >
            <SwiperSlide>
          <img
            src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/275173155_101249685856513_7684730272752824427_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aLEf0G8MtgoAX_sD-37&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfAh8ZxSioPYgGoqRWzUGmWLXGBvZ5U3F5kpVIwPyiKTRQ&oe=639F8AB4"
            alt="bgace"
          />
          </SwiperSlide>
        <SwiperSlide>
          <img
            src=""
            alt="slide"
          />
          </SwiperSlide>
        </Swiper>
    );
}