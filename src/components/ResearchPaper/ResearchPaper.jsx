import { FaEye } from "react-icons/fa";

const ResearchPaper = () => {
  return (
    <div className="my-5">
      <h1 className="text-center tracking-wider font-semibold text-4xl mt-10 dark:text-[#abc1ff]">
        Research Paper
      </h1>
      {/* research section  */}

      <div className="flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative rounded-md cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/free-psd/3d-virus-gamma_220664-2538.jpg?w=740&t=st=1690091767~exp=1690092367~hmac=4b6e247eb22c4f2ee9032a9e4b2fa2134a657e386e7dcd5df9403619fbfd1292"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
              <div className="flex items-center gap-3">
                <a href="https://www.ssrn.com/index.cfm/en/coronavirus/">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  bg-gradient-to-r from-[#49177e] to-green-600 hover:to-orange-500  justify-center ml-2 focus:outline-none hover:bg-gray-600">
                    <span>
                      <FaEye></FaEye>
                    </span>
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="group relative rounded-md cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/free-vector/education-background-design_1300-10.jpg?w=740&t=st=1690091718~exp=1690092318~hmac=b92046f794b2399436a362e59ebd43a850598d8f0c5f362b5ad59386165c7340"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
              <div className="flex items-center gap-3">
                <a href="https://eric.ed.gov/?q=books&id=ED597487">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  bg-gradient-to-r from-[#49177e] to-green-600 hover:to-orange-500  justify-center ml-2 focus:outline-none hover:bg-gray-600">
                    <span>
                      <FaEye></FaEye>
                    </span>
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="group relative rounded-md cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://img.freepik.com/free-vector/gradient-essay-illustration_23-2150261248.jpg?w=740&t=st=1690091679~exp=1690092279~hmac=a00ff9b709a550b603598866fa31b5e33967384c9c79379539d35d60d9d8d3cd"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center  text-center transition-all duration-500 group-hover:translate-y-0">
              <div className="flex items-center gap-3">
                <a href="https://pubag.nal.usda.gov/?search_field=all_fields&utf8=%E2%9C%93">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  bg-gradient-to-r from-[#49177e] to-green-600 hover:to-orange-500  justify-center ml-2 focus:outline-none hover:bg-gray-600">
                    <span>
                      <FaEye></FaEye>
                    </span>
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
