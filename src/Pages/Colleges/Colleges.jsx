import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  //   console.log(colleges);
  useEffect(() => {
    // fetch("college.json")
      fetch("https://college-booking-server-peach.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        // console.log(data)
      });
  }, []);

  return (
    <div className="mt-12">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
