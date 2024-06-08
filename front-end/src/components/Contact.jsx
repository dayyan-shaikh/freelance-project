import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-between items-center p-2 text-sm">
        <div className="flex items-center space-x-4 ml-20 md:mr-10">
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

      <header className="bg-white  shadow-2xl ">
        <div className="container mx-auto flex justify-between items-center p-2">
          <div className="flex items-center space-x-4">
            <img
              className="w-28 ml-20 md:ml-2 md:w-20"
              src="https://najmbarea.com/wp-content/uploads/2023/08/Najm-Barea-Logo-size-1.png"
              alt="Najm Barea Logo hover:cursor-pointer"
            />
          </div>
          <nav className="flex space-x-12 mr-20 text-xl mt-5 md:text-sm md:mr-5">
            <Link to="/" className="text-gray-700 hover:text-yellow-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-600">
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-yellow-600"
            >
              Services
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-yellow-600">
              Blogs
            </Link>
            <Link to="/contact">
              <button className="bg-yellow-600 text-white px-4 py-2 mb-3">
                Enquire Now
              </button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="relative">
        <img
          src="https://images.pexels.com/photos/8134108/pexels-photo-8134108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About Us Background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold hover:text-yellow-600 cursor-pointer">
            Contact Us
          </h1>
        </div>
        <div className="w-full h-36 bg-white rounded-t-full mt-[-4rem]"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-8 w-10/12 ml-40">
        <div className="flex-1 p-4">
          <h2 className="text-4xl font-bold text-center md:text-left text-yellow-600">
            UAE Office
          </h2>
          <div className="mt-4">
            <div className="flex items-start mb-4 py-5 gap-5">
              <i className="fa-solid fa-location-dot fa-2xl mt-5"></i>
              <div>
                <h3 className="font-bold text-2xl">Corporate Office</h3>
                <p className="text-xl">
                  Al Fahad Plaza, <br />
                  Office No. 52, <br />
                  6th Floor Al Rigga, <br />
                  Deira
                  <br />
                  Dubai, UAE
                </p>
              </div>
            </div>
            <div className="flex items-start mb-4 gap-5">
              <i class="fa-solid fa-phone fa-2xl mt-5"></i>
              <div>
                <h3 className="font-bold text-2xl">Phone</h3>
                <p className="text-xl">+971 4 3261855</p>
                <p className="text-xl">+971 58 5080056</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <i class="fa-solid fa-envelope fa-2xl mt-5"></i>
              <div>
                <h3 className="font-bold text-2xl">Email</h3>
                <p className="text-xl">info@najmbarea.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-4xl font-bold text-center md:text-left text-yellow-600">
            India Office
          </h2>
          <div className="mt-4 py-5">
            <div className="flex items-start mb-4 gap-5">
              <i className="fa-solid fa-location-dot fa-2xl mt-5"></i>
              <div>
                <h3 className="font-bold text-2xl">Corporate Office</h3>
                <p className="text-xl">
                  Devidayal Compound,
                  <br />
                  Reay Road East,
                  <br />
                  Mumbai 400010
                </p>
              </div>
            </div>
            <div className="flex items-start mb-4 gap-5">
              <i class="fa-solid fa-phone fa-2xl mt-5"></i>
              <div>
                <h3 className="font-bold text-2xl">Phone</h3>
                <p className="text-xl">+91 82914 08981</p>
                <p className="text-xl">+91 7820932970</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <i class="fa-solid fa-envelope fa-2xl mt-5"></i>
              <div>
                <h3 className="font-bold text-2xl">Email</h3>
                <p className="text-xl">info@brightstarconstructions.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 bg-yellow-600 text-white">
          <h2 className="text-2xl font-bold text-center">
            Feel Free To Contact Us
          </h2>
          <p className="mt-4 text-center">
            Our Team would be happy to help you. We will get back to you soon.
          </p>
          <form className="mt-8 space-y-4 ml-5 mr-5">
            <div className="flex flex-col">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                className="p-2 border border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="text"
                id="phone"
                className="p-2 border border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Your Email*</label>
              <input
                type="email"
                id="email"
                className="p-2 border border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject">Subject*</label>
              <input
                type="text"
                id="subject"
                className="p-2 border border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="ml-24   w-40 py-2 text-yellow-600 bg-white mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
