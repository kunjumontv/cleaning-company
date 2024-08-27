import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BeforeAfterSlider = () => {
  return (
    <div className="mt-16 text-center lg:mx-28">
      <h1 className="text-2xl md:text-4xl mb-6">Before & After</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000} 
      >
        <SwiperSlide>
          <div className="md:flex-row md:justify-center ">
            <p className="md:text-xl font-medium mb-8">Carpet Cleaning</p>
            <div className="flex-row justify-center md:flex gap-4">
              <div>
                <img src="/images/before01.webp" alt="images" className="rounded-xl" />
                <span>Before</span>
              </div>
              <div>
                <img src="/images/after01.webp" alt="images" className="rounded-xl" />
                <span>After</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex-row md:justify-center ">
            <p className="md:text-xl font-medium mb-8">Couch Cleaning</p>
            <div className="flex-row justify-center md:flex gap-4">
              <div>
                <img src="/images/before02.webp" alt="images" className="rounded-xl" />
                <span className="mt-10">Before</span>
              </div>
              <div>
                <img src="/images/after02.webp" alt="images" className="rounded-xl" />
                <span>After</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex-row md:justify-center ">
            <p className="md:text-xl font-medium mb-8">Window Cleaning</p>
            <div className="flex-row justify-center md:flex gap-4">
              <div>
                <img src="/images/before03.webp" alt="images" className="rounded-xl" />
                <span>Before</span>
              </div>
              <div>
                <img src="/images/after03.webp" alt="images" className="rounded-xl" />
                <span>After</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BeforeAfterSlider;
