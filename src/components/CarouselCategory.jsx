import { createSearchParams, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    category: "Deals",
    img: "../images/category_0.jpg",
  },
  {
    id: 2,
    category: "Amazon",
    img: "../images/category_1.jpg",
  },
  {
    id: 3,
    category: "Fashion",
    img: "../images/category_2.jpg",
  },
  {
    id: 4,
    category: "Computers",
    img: "../images/category_3.jpg",
  },
  {
    id: 5,
    category: "Home",
    img: "../images/category_4.jpg",
  },
  {
    id: 6,
    category: "Mobile",
    img: "../images/category_5.jpg",
  },
];

const CarouselCategory = () => {
  const navigate = useNavigate();
  const handleSearchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };

  return (
    <div className="bg-white m-3">
      <h3 className="text-2xl font-semibold p-3">Shop by Category</h3>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
      >
        {categories.map((c) => (
          <SwiperSlide
            key={c.id}
            className="cursor-pointer"
            onClick={() => handleSearchCategory(c.category)}
          >
            <img src={c.img} alt={`${c.category} category`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
