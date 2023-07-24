/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";

const PopularCollegeCard = ({ college }) => {
//   const [isOpen, setIsOpen] = useState(false);
  console.log(college)

    const {
      _id,
    collegeName,
    collegeImage,
    admissionDates,
    researchHistory,
    events,
    sportsCategories,
  } = college;
  //    const research = researchHistory.map
//   console.log(college);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

  return (
    <div>
      <div className="md:w-96 w-full h-full border bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
        <img
          src={college.collegeImage}
          alt="Placeholder"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold mb-2">{college?.collegeName}</h3>
          <h3 className="font-semibold">Research : </h3>
          <p className="">
            <span className="font-semibold">Admission Dates</span> :
            {college?.admissionDates}
          </p>
          {/* <p className="">
            <span className="font-semibold">Admission Dates</span> :
            {college?._id}
          </p> */}
          {researchHistory.map((research) => (
            <div key={research._id}>
              <p>
                <span className="font-semibold">Title</span>:
                {research.researchTitle}
              </p>

              <p>
                <span className="font-semibold">Authors</span> :
                {research.authors}
              </p>
              <p>
                <span className="font-semibold">PublicationDate</span>
                {research.publicationDate}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mb-3">
          <Link to={`/popularCollegeDetails/${_id}`}>
           
            <button
            //   onClick={openModal}
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
          </Link>

        
      
        </div>
      </div>
    </div>
  );
};

export default PopularCollegeCard;
