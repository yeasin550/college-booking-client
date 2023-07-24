/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

const CollegeCard = ({ college }) => {
     const [isOpen, setIsOpen] = useState(false);

    const {
      collegeName,
      collegeImage,
      admissionDates,
      researchHistory,
      events,
      sportsCategories,
    } = college;
//    const research = researchHistory.map
    console.log(college)

 const openModal = () => {
   setIsOpen(true);
 };

 const closeModal = () => {
   setIsOpen(false);
 };





    return (
      <div>
        <div className="md:w-96 w-full h-full lg:ml-3 border bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
          <img
            src={college.collegeImage}
            alt="Placeholder"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2">
              College Name: {college?.collegeName}
            </h3>
            <p className="">
              <span className="font-semibold">Admission Dates: </span>
              {college?.admissionDates}
            </p>
            <h3 className="font-bold">Research : </h3>

            {researchHistory.map((research) => (
              <div key={research._id}>
                <p>
                  <span className="font-semibold">Title: </span>
                  {research.researchTitle}
                </p>

                <p>
                  <span className="font-semibold">Authors: </span>
                  {research.authors}
                </p>
                <p>
                  <span className="font-semibold">PublicationDate: </span>
                  {research.publicationDate}
                </p>
                <p>
                  <span className="font-semibold">Description: </span>
                  {research.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mb-3 mt-auto">
            <button
              onClick={openModal}
              className="text-indigo-700 border-red-600 border-2 py-2 px-6  rounded inline-flex"
            >
              View Details
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6 ml-2"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>

            {/* <button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Open Modal
              </button> */}

            {/* The modal */}
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
                <div className="bg-white rounded p-8">
                  <h2 className="font-bold text-gray-800">
                    {college?.collegeName}
                  </h2>
                  <h1 className="font-bold text-center">Events</h1>
                  {events.map((event) => (
                    <div className="text-left" key={event._id}>
                      <p>
                        <span className="font-semibold">Name: </span>{" "}
                        {event?.eventName}
                      </p>
                      <p>
                        <span className="font-semibold">Date: </span>{" "}
                        {event?.date}
                      </p>
                      <p>
                        <span className="font-semibold">Location: </span>
                        {event?.location}
                      </p>
                    </div>
                  ))}
                  <h1 className="font-bold text-center">Sports</h1>
                  {sportsCategories.map((sportsCategorie) => (
                    <div className="text-left" key={sportsCategorie._id}>
                      <li>
                        <span className="font-semibold"></span>{" "}
                        {sportsCategorie}
                      </li>
                    
                    </div>
                  ))}
                  <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default CollegeCard;