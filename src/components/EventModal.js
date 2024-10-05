import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import olivia from "../assets/events/taylor-swift.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventModal = () => {
  const [ticketCount, setTicketCount] = useState(0);

  const increaseCount = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (ticketCount >= 1) {
      setTicketCount((prevCount) => prevCount - 1);
    }
  };
  const notify = () => {
    if (ticketCount > 0) {
      toast("You reserved your spot for the event!!", {
        autoClose: 1500,
      });
    }
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-1000 backdrop-filter backdrop-blur-sm">
        <div className="bg-white border border-gray-600 shadow-2xl h-4/5 w-4/5 rounded-3xl p-8 flex flex-row overflow-hidden">
          <div className="w-2/5 overflow-hidden">
            <img
              src={olivia}
              alt="my pic"
              className="rounded-lg items-center justify-center flex w-full"
              width={450}
              height={450}
              style={{ position: "sticky", top: 0, height: "100%" }}
            />
          </div>

          <div className="w-3/5 overflow-y-auto pl-8">
            <XMarkIcon
              className="h-6 w-6 text-blue-500 float-right cursor-pointer mt-0 pt-0"
              onClick={closeModal}
            />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-4 mt-6">
                Olivia Rodrigo concert
              </h2>
              <p className=" text-lg mt-1 pl-8 ">
                Olivia Rodrigo's concert is a riveting experience, blending
                soulful vocals with emotionally charged lyrics. It's a
                must-attend event for fans seeking an authentic and captivating
                musical experience.
              </p>
            </div>
            <div className="flex flex-col mt-6 pl-8">
              <p className=" text-xl mb-1">Location</p>
              <p className=" text-lg">National Western Complex, Denver, CO</p>
            </div>

            <div className="flex flex-col mt-4 pl-8">
              <p className=" text-xl mb-1">Timing</p>
              <p className=" text-lg">Date: March 15, 2024 | Time: 7:00 PM</p>
            </div>

            <div className=" text-lg pl-8 mt-6">
              Price per ticket: 5 Matic coins
            </div>

            <div className="flex flex-row mt-10 pl-8">
              <p className=" text-xl mb-1 mt-2">Purchase</p>
              <div className="flex items-center ml-10">
                <button
                  onClick={decreaseCount}
                  className="text-lg p-2 border border-gray-300 hover:cursor-pointer rounded-md h-12 mr-2 hover:bg-blue-600 hover:text-white"
                >
                  -
                </button>
                <p className="text-lg pl-2 pr-2">{ticketCount}</p>
                <button
                  onClick={increaseCount}
                  disabled={ticketCount >= 1}
                  className={`text-lg p-2 border ${
                    ticketCount >= 1
                      ? "cursor-not-allowed"
                      : "hover:cursor-pointer"
                  } border-gray-300 rounded-md ml-2 h-12 ${
                    ticketCount >= 1
                      ? "opacity-50"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  +
                </button>
              </div>
            </div>
            <div className=" pl-8 mt-2">
              <button
                onClick={notify}
                className=" bg-blue-500 hover:bg-blue-700 mb-6 shadow-lg rounded-lg text-white font-bold py-2 px-4"
              >
                RSVP{" "}
              </button>
              <ToastContainer />
            </div>
            <span className=" text-lg pl-8">--More about the event--</span>
            <p className="text-lg mt-4 pl-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Praesent tristique magna sit amet purus. Dictum varius duis at
              consectetur lorem. Rhoncus est pellentesque elit ullamcorper
              dignissim cras. Facilisis sed odio morbi quis commodo. Imperdiet
              massa tincidunt nunc pulvinar sapien. Ultrices gravida dictum
              fusce ut placerat orci nulla pellentesque. Cras semper auctor
              neque vitae tempus quam pellentesque nec. Nulla porttitor massa id
              neque aliquam vestibulum morbi blandit. Risus commodo viverra
              maecenas accumsan lacus vel. Pellentesque adipiscing commodo elit
              at imperdiet dui accumsan sit. Risus in hendrerit gravida rutrum.
              Tellus in hac habitasse platea dictumst vestibulum rhoncus.
              Interdum velit laoreet id donec ultrices tincidunt arcu non
              sodales. Tincidunt tortor aliquam nulla facilisi. Elementum
              integer enim neque volutpat. Eu facilisis sed odio morbi quis
              commodo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
