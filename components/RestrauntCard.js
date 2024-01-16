import {IMG_CDN_URL} from "../src/constant"
import {AiFillStar} from "react-icons/ai"


const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
      <div className="w-80 p-3 m-5 shadow-lg bg-slate-50 h-96 flex flex-col hover:translate-y-[-10px] transition-transform transform duration-100">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold text-xl pt-3 ">{name}</h2>
        <div className="flex items-center pt-1">
        <AiFillStar className="mr-0.5 fill-yellow-500" />
        <h4 className="pt-2 font-bold">{avgRating}</h4>
      </div>
        <h4 className="font-mono break-words pt-3">{cuisines.join(',')}</h4>
      </div>
    );
  };

  export default RestrauntCard;    