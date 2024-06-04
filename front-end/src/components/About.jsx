import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
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

      <header className="bg-white  shadow-2xl">
        <div className="container mx-auto flex justify-between items-center p-2">
          <div className="flex items-center space-x-4">
            <img
              className="w-28 ml-20"
              src="https://najmbarea.com/wp-content/uploads/2023/08/Najm-Barea-Logo-size-1.png"
              alt="Najm Barea Logo hover:cursor-pointer"
            />
          </div>
          <nav className="flex space-x-12 mr-20 text-xl mt-5">
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
          src="https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About Us Background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold hover:text-yellow-600 cursor-pointer">
            ABOUT US
          </h1>
        </div>
        <div className="w-full h-36 bg-white rounded-t-full mt-[-4rem]"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row">
          <div className="w-4/12 ml-56">
            <h2 className="text-4xl font-bold text-yellow-600 mb-2">
              ABOUT NAJM BAREA
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4">
              BEST SECURITY GUARD AGENCY
            </h3>
            <p className="text-gray-700 mb-4">
              Principally in Human Capital Outsourcing, NAJM BAREA Group has
              played a meaningful role in providing gainful employment to the
              local community and expatriates alike for 20 years. NAJM BAREA is
              the best certified security guard company which provide best
              security services to your construction properties, commercial and
              residential properties.
            </p>
            <p className="text-gray-700 mb-4">
              At our best security guard agency, we strive for excellence in all
              aspects of our services, offering tailored solutions that address
              your unique requirements. We take pride in adapting and
              capitalising on emerging prospects in the ever-evolving business
              landscape.
            </p>
            <p className="text-gray-700">
              We offer{" "}
              <a href="#" className="text-blue-600 underline">
                best security guard services
              </a>
              , specializing in{" "}
              <a href="#" className="text-blue-600 underline">
                private security guard services in the UAE
              </a>
              .
            </p>
          </div>
          <div className="w-4/12 h-full mt-16 md:ml-8">
            <img
              src="https://najmbarea.com/wp-content/uploads/2023/07/abt-23.jpg"
              alt="Team"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#b7772d] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/badge.png"
                alt="Best Practices"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <p className="text-center">
                Reliable and trustworthy with the ability to meet deadlines and
                commitments.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/best-product.png"
                alt="Best Prices"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-center">
                Best quality services at cost-effective prices to improve your
                efficiency and maximise value.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/flexibility.png"
                alt="Flexible"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Flexible</h3>
              <p className="text-center">
                We adapt and provide tailored solutions to meet your unique
                requirements.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/handshake.png"
                alt="Partnerships"
                className="mb-4 w-28 bg-white rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Partnerships</h3>
              <p className="text-center">
                We foster lasting connections through top-notch customer service
                and swift resolution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
        <p className="mb-8">
          Najm Barea Group significantly contributes to employment for locals
          and expatriates
        </p>
        <button className="bg-yellow-600 text-white py-2 px-6 hover:bg-yellow-700">
          Get In Touch
        </button>
      </div>

      <hr className="bg-yellow-600" />

      <footer className="bg-gray-900 text-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="ml-40">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/Najm-Barea-Logo-size-1-vertical.png"
                className="mb-4 w-60"
              />
            </div>
            <div className="flex flex-row mr-80">
              <div className="mb-8 md:mb-0 md:mr-16 gap-10">
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  Dubai Office
                </h3>
                <p className="mb-2">
                  <span className="inline-block mr-2">📍</span>
                  Al Fahad Plaza, Office No. 52, <br /> 6th Floor Al Rigga,{" "}
                  <br />
                  Deira Dubai, UAE
                </p>
                <p className="mb-2">
                  <span className="inline-block mr-2">📞</span>
                  +971 58 5080056 <br /> +971 4 3261855
                </p>
                <p>
                  <span className="inline-block mr-2">✉️</span>
                  info@najmbarea.com
                </p>
                <div className="flex mt-4 space-x-4">
                  <a href="#" aria-label="Instagram">
                    <img src="https://placehold.co/24x24" alt="Instagram" />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <img src="https://placehold.co/24x24" alt="Facebook" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <img src="https://placehold.co/24x24" alt="LinkedIn" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <img src="https://placehold.co/24x24" alt="Twitter" />
                  </a>
                </div>
              </div>
              <div className="ml-20">
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  India Office
                </h3>
                <p className="mb-2">
                  <span className="inline-block mr-2">📍</span>
                  Devidayal Compound, <br />
                  Reay Road East, <br />
                  Mumbai 4000010
                </p>
                <p className="mb-2">
                  <span className="inline-block mr-2">📞</span>
                  +91 82914 08981 <br /> +91 7820932970
                </p>
                <p>
                  <span className="inline-block mr-2">✉️</span>
                  info@brightstarconstructions.com
                </p>
                <p>
                  <span className="inline-block mr-2">🔗</span>
                  www.brightstarconstructions.com
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 ml-10">
                <a href="#" className="hover:underline">
                  Security Guard Services
                </a>
                <a href="#" className="hover:underline">
                  Technical Services
                </a>
                <a href="#" className="hover:underline">
                  Business Setup and Visa Services
                </a>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </div>
              <p className="text-sm mr-16">
                &copy; Copyright 2023 Najm Barea Group. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
