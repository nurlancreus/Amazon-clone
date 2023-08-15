import { Carousel, CarouselCategory, CarouselProduct, HomePageCard } from "./";

const homeProducts = [
  {
    id: 1,
    path: "#",
    title: "We have a surprise for you",
    img: "../images/home_grid_1.jpg",
    link: "See terms and conditions",
  },
  {
    id: 2,
    path: "#",
    title: "Watch The Rings of Power",
    img: "../images/home_grid_2.jpg",
    link: "Start streaming now",
  },
  {
    id: 3,
    path: "#",
    title: "Unlimited Streaming",
    img: "../images/home_grid_3.jpg",
    link: "Find out more",
  },
  {
    id: 4,
    path: "#",
    title: "More titles to explore",
    img: "../images/home_grid_4.jpg",
    link: "Browse Kindle Unlimited",
  },
  {
    id: 5,
    path: "#",
    title: "Shop Pet Supplies",
    img: "../images/home_grid_5.jpg",
    link: "See more",
  },
  {
    id: 6,
    path: "#",
    title: "Spring Sale",
    img: "../images/home_grid_6.jpg",
    link: "See the deals",
  },
  {
    id: 7,
    path: "#",
    title: "Echo Buds",
    img: "../images/home_grid_7.jpg",
    link: "See more",
  },
  {
    id: 8,
    path: "#",
    title: "Family Plan: 3 months free",
    img: "../images/home_grid_8.jpg",
    link: "Learn more",
  },
];

const HomePage = () => {
  return (
    <div className="bg-amazonClone-background">
      <div className="min-w-[1000px] max-w-[1500px] mx-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          {homeProducts.map((product) => (
            <HomePageCard
              key={product.id}
              title={product.title}
              img={product.img}
              link={product.link}
              path={product.path}
            />
          ))}
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
