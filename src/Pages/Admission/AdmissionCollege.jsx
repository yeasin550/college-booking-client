/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AdmissionCollege = ({ college }) => {
      const {
        _id,
        collegeName,
        collegeImage,
        admissionDates,
        researchHistory,
        events,
        sportsCategories,
      } = college;
    return (
      <div>
        <div className="relative cursor-pointer lg:mx-0 mx-3">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
          <div className="relative p-6 bg-white border-2 border-indigo-500 rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
              <span>😎</span>
              <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                {college.collegeName}
              </h3>
            </div>
            <p className="text-gray-600">
              <span className="font-bold">Admission Date : </span>{" "}
              {college.admissionDates}
            </p>
            <div className="flex justify-end">
              <Link to={`/admissionCollegeForm/${_id}`}>
                <button className="px-2 py-1 text-black hover:text-white border border-gray-500 font-bold rounded hover:bg-gray-800 bg-orange-400">
                  Admission
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdmissionCollege;