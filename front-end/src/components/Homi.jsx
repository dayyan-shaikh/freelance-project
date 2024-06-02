import React from "react";

const Homi = () => {
  return (
    <>
      <div>
        <div className="bg-black text-white flex justify-between items-center p-2 text-sm">
          <div className="flex items-center space-x-4 ml-20">
            <span>📞 +971 58 5080056</span>
            <span>✉️ info@najmbarea.com</span>
          </div>
          <div className="mr-28 border-white text-white">
            <button className="flex justify-between items-center bg-black text-white border border-white px-4 py-2">
              SELECT LANGUAGE
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path />
              </svg>
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white  shadow-2xl">
          <div className="container mx-auto flex justify-between items-center p-2">
            <div className="flex items-center space-x-4">
              <img
                className="w-28 ml-20"
                src="https://najmbarea.com/wp-content/uploads/2023/08/Najm-Barea-Logo-size-1.png"
                alt="Najm Barea Logo"
              />
            </div>
            <nav className="flex space-x-12 mr-10 text-xl mt-5 ">
              <Link to="/" className="text-gray-700 hover:text-yellow-600">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-yellow-600">
                About
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-yellow-600">
                Services
              </Link>
              <Link to="/blogs" className="text-gray-700 hover:text-yellow-600">
                Blogs
              </Link>
              <button className="bg-yellow-600 text-white px-4 py-2 mb-3">
                Enquire Now
              </button>
            </nav>
          </div>
        </header>

        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('https://najmbarea.com/wp-content/uploads/slider/cache/36d08a8be66fbac2115ac5466c6de154/people-sitting-desk-working.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-sm md:text-lg">
              Business Setup & PRO Services
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Najm Barea Management Services
            </h1>
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
              Read More
            </button>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button className="bg-yellow-500 text-white p-2 rounded-full m-2">
              <img
                aria-hidden="true"
                alt="left-arrow"
                src="https://placehold.co/24x24"
              />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button className="bg-yellow-500 text-white p-2 rounded-full m-2">
              <img
                aria-hidden="true"
                alt="right-arrow"
                src="https://placehold.co/24x24"
              />
            </button>
          </div>
          <div className="absolute right-0 bottom-0 flex flex-col p-4 space-y-2">
            <button className="bg-green-500 text-white p-2 rounded-full">
              <img
                aria-hidden="true"
                alt="whatsapp"
                src="https://placehold.co/24x24"
              />
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-full">
              <img
                aria-hidden="true"
                alt="chat"
                src="https://placehold.co/24x24"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homi;
