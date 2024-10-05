import React from "react";
import { useSelector } from 'react-redux'
import EventCard from "../components/EventCard";

const Likes = () => {
    const likes = useSelector((state) => state.likes.listoflikes)

  return (
    <>
      <div className="pt-36">
        <div className="w-10/12 mx-auto">
          <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-2xl">Your Queus</h1>
          <div className="flex">
            {likes.map((data, key)=>(
                <EventCard dat={data} key={key}/>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Likes;
