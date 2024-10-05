import React, { useEffect, useState } from "react";
import polygon from "../assets/logo/polygon-matic.png";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIcon2 } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addLikes } from "../redux/counter/likesSlice";

const EventCard = (props) => {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {});

  const handleClick = () => {
    setLike(!like);
    dispatch(addLikes(props.dat));
  };

  return (
    <>
      <div className="w-72 h-auto p-6 flex flex-col hover:shadow-md rounded-lg group">
        <div className="hover:grow hover:shadow-lg">
          <img
            src={require(`../assets/events/${props.dat.img}`)}
            alt="product"
            objectFit="contain"
            layout="responsive"
            className="object-cover rounded-xl w-72 h-48"
          />
        </div>
        <div className="pt-3 flex items-center justify-between text-lg">
          <p className="font-semibold text-xl">{props.dat.name}</p>
          <button onClick={handleClick}>
            {like ? (
              <HeartIcon2 className="h-8 w-8 text-red-500 whitespace-normal" />
            ) : (
              <HeartIcon className="h-8 w-8 whitespace-normal " />
            )}
          </button>
        </div>
        <div className="flex items-center justify-between pt-3">
          <div className="pt-1 text-black flex items-center ">
            <img src={polygon} alt="" height={32} width={32} className="h-8" />
            <p className="pl-2 text-xl font-bold">{props.dat.price}</p>
          </div>
          <button className="bg-[#8247e5] hidden group-hover:block text-lg rounded-lg p-1 px-5 text-white font-extrabold">
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default EventCard;
