import { Link } from "react-router-dom";

const HomePageCard = ({ title, img, link, path }) => {
  return (
    <div className="h-[420px] bg-white z-30 m-3">
      <Link to={path}>
        <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">
          {title}
        </div>
        <div className="h-[300px] m-4">
          <img src={img} className="h-[100%] w-[100%] object-cover" alt="" />
        </div>
        <div className="text-xs xl:text-sm text-blue-400 ml-4">{link}</div>
      </Link>
    </div>
  );
};

export default HomePageCard;
