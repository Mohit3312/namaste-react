// import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  return (
    <div>
      {items?.map((item) => {
        const { id, name, description, imageId } = item?.card?.info;
        return (
          <div
            key={id}
            className="m-2 pt-2 pb-4 border-gray-400 border-b text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{name}</span>
                <span>
                  {" "}
                  - ₹
                  {(item?.card?.info?.finalPrice ||
                    item?.card?.info?.defaultPrice ||
                    item?.card?.info?.price) / 100}
                </span>
              </div>
              <p className="text-xs">{description}</p>
            </div>
            <div className="w-3/12 flex flex-col items-center justify-center">
              <div className="relative w-28 h-28">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    imageId
                  }
                  className="w-28 h-28 object-cover rounded-lg"
                  alt={name}
                />
                <button className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 px-2 bg-white text-sm text-black border-1 border-gray-300 rounded-md shadow-lg">
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
