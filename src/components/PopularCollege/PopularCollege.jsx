/* eslint-disable no-unused-vars */
// import { data } from "autoprefixer";
import { cloneElement, useEffect, useState } from "react";
import PopularCollegeCard from "./PopularCollegeCard";
import { FaSearch } from "react-icons/fa";

const PoplarCollege = () => {
  const [searchText, setSearchText] = useState("");

  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // fetch("college.json")
      fetch("https://college-booking-server-peach.vercel.app/colleges")
      // fetch("http://localhost:5000/colleges")
        .then((res) => res.json())
        .then((data) => {
          setColleges(data.slice(3));
          // console.log(data);
        });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleFilter = (college) => {
    if (searchText) {
      if (
        college?.collegeName?.toLowerCase()?.includes(searchText?.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    } else return true;
  };

  return (
    <div className="mt-12">
      <h1 className="text-4xl font-semibold text-center mb-5">
        Popular College
      </h1>

      <div className="search-box p-2 mb-5 text-center">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-1 border-2 border-gray-600"
        />
        <button
          className="bg-green-700 text-white py-2 ml-3 px-4"
          onClick={handleSearch}
        >
          <FaSearch></FaSearch>
        </button>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {colleges.filter(handleFilter).map((college) => (
          <PopularCollegeCard
            key={college._id}
            college={college}
          ></PopularCollegeCard>
        ))}
      </div>
      {/* <div className="w-96 h-full border bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
        <img
          src={colleges.collegeImage}
          alt="Placeholder"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold mb-2">
            College Name: {colleges?.collegeName}
          </h3>
          <h3 className="font-semibold">Research : </h3>
          <p className="">
            <span className="font-semibold">Admission Dates</span> :{" "}
            {colleges?.admissionDates}
          </p>
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
          <button
            onClick={openModal}
            className="text-indigo-700 border-red-600 border-2 py-2 px-6  rounded inline-flex"
          >
            View Details
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6 ml-2"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>

       
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
              <div className="bg-white rounded p-8">
                <h2 className="font-bold text-gray-800">
                  {colleges?.collegeName}
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
                      <span className="font-semibold"></span> {sportsCategorie}
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
      </div> */}
    </div>
  );
};

export default PoplarCollege;
