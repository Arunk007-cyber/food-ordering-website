import {IMG_CDN_URL} from "../src/constant"

const menuItemCard = ({ imageId,description,price}) => {
    console.log('imageId',imageId);
    console.log('description',description);
    console.log('price',price);
    return (
      <div className="w-80 p-3 m-5 shadow-lg bg-slate-50 h-96 flex flex-col hover:translate-y-[-10px] transition-transform transform duration-100">
        <img src={IMG_CDN_URL +imageId}/>
        <h2 className="pt-3 ">{description}</h2>
        <h4 className="font-mono break-words pt-3">Rupees:{price/100}</h4>
      </div>
    )
  };

  export default menuItemCard;    