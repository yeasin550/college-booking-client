import { useLoaderData, useParams } from "react-router-dom";

const PopularCollegeDetails = () => {
    const { id } = useParams();
    const collegeData = useLoaderData();
    console.log(collegeData)
    console.log(id)
    return (
        <div className=" px-3 py-3">
            <h1 className="text-center text-4xl font-bold my-12">College Information</h1>
        <div className=" rounded overflow-hidden">
          <div className="">
            <img className="w-full h-96" src={collegeData.collegeImage} />
          </div>
          <div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {collegeData.collegeName}
              </div>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">AdmissionProcess :</span>{" "}
                {collegeData.admissionProcess}
              </p>
            </div>
            <div className="flex justify-between px-6 py-4">
              <div className=" rounded-full px-3 py-1 w-96 text-gray-700 mr-2">
                <h1 className="font-bold">#Events</h1>

                {collegeData.events.map((data) => (
                  <div key={data._id} className="border-2 p-2 ">
                    <p>
                      <span className="font-semibold">EventName : </span>
                      {data.eventName}
                    </p>
                    <p>
                      <span className="font-semibold">Date : </span>
                      {data.date}
                    </p>
                    <p>
                      <span className="font-semibold">Location : </span>
                      {data.location}
                    </p>
                    <p>
                      <span className="font-semibold">Description : </span>
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-full px-3 py-1 w-96 text-gray-700 mr-2">
                <h1 className="font-bold">#Research </h1>
                {collegeData.researchHistory.map((history) => (
                  <div key={history._id} className="border-2 p-2">
                    <p>
                      <span className="font-semibold">ResearchTitle : </span>
                      {history.researchTitle}
                    </p>
                    <p>
                      <span className="font-semibold">Authors : </span>
                      {history.authors}
                    </p>
                    <p>
                      <span className="font-semibold">PublicationDate : </span>
                      {history.publicationDate}
                    </p>
                    <p>
                      <span className="font-semibold">Description : </span>
                      {history.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-full px-3 py-1 w-96 text-gray-700">
                <h1 className="font-bold">#Sports</h1>
                <div className="border-2 p-2">
                  {collegeData.sportsCategories.map((sportsCategorie) => (
                    <div className="text-left" key={sportsCategorie._id}>
                      <li>{sportsCategorie}</li>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PopularCollegeDetails;

