import { useEffect, useState } from "react";
import AdmissionCollege from "./AdmissionCollege";

const Admission = () => {
  // const [collegeName, setCollegeName] = useState("");
  // const [candidateName, setCandidateName] = useState("");
  // const [subject, setSubject] = useState("");
  // const [candidateEmail, setCandidateEmail] = useState("");
  // const [candidatePhone, setCandidatePhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [image, setImage] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target.value;
  //   const collegeName = form.value.collegeName;
   
  //     collegeName,
  //     candidateName,
  //     subject,
  //     candidateEmail,
  //     candidatePhone,
  //     address,
  //     dateOfBirth,
  //     image,
  //   });
  // };


  const [colleges, setColleges] = useState([]);
  
   //   console.log(colleges);
   useEffect(() => {
     // fetch("college.json")
     fetch("https://college-booking-server-peach.vercel.app/colleges")
      //  fetch("http://localhost:5000/colleges")
       .then((res) => res.json())
       .then((data) => {
         setColleges(data);
         // console.log(data)
       });
   }, []);

  return (
    <div>
      <h1 className="text-2xl my-9 font-bold mb-4 text-center">
        College Admissions
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {colleges.map((college) => (
          <AdmissionCollege key={college._id} college={college}></AdmissionCollege>
        ))}
      </div>

      

      {/* <form onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <div className="mb-4 w-1/2">
            <label htmlFor="setCollegeName" className="block font-bold">
              College Name:
            </label>
            <input
              type="text"
              id="setCollegeName"
              name="setCollegeName"
              className="w-full p-2 border-[2px] border-red-500 rounded"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 w-1/2">
            <label htmlFor="candidate_name" className="block font-bold">
              Candidate Name:
            </label>
            <input
              type="text"
              id="candidate_name"
              name="candidate_name"
              className="w-full p-2 border-[2px] border-red-500 rounded"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="flex gap-5">
          <div className="mb-4 w-1/2">
            <label htmlFor="subject" className="block font-bold">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-2 border-[2px] border-red-500 rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 w-1/2">
            <label htmlFor="candidate_email" className="block font-bold">
              Candidate Email:
            </label>
            <input
              type="email"
              id="candidate_email"
              name="candidate_email"
              className="w-full p-2 border-[2px] border-red-500 rounded"
              value={candidateEmail}
              onChange={(e) => setCandidateEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="mb-4 w-1/2">
            <label htmlFor="candidate_phone" className="block font-bold">
              Candidate Phone Number:
            </label>
            <input
              type="tel"
              id="candidate_phone"
              name="candidate_phone"
              className="w-full p-2 border-[2px] border-red-500 rounded"
              value={candidatePhone}
              onChange={(e) => setCandidatePhone(e.target.value)}
              required
            />
          </div>
         
          <div className="mb-4 w-1/2">
            <label htmlFor="address" className="block font-bold">
              Address:
            </label>
            <input
              id="address"
              name="address"
              rows="4"
              
              className="w-full p-2 border-[2px] border-red-500 rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="mb-4 w-1/2">
            <label htmlFor="date_of_birth" className="block font-bold">
              Date of Birth:
            </label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              className="w-full p-2 border-[2px] border-red-500 rounded"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 w-1/2">
            <label htmlFor="image" className="block font-bold">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="w-full p-2 border border-red-500 rounded"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 lg:w-96 w-80 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        </div>
      </form> */}
    </div>
  );
};

export default Admission;
