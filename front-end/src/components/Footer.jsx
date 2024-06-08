import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="ml-40">
              <img
                src="https://najmbarea.com/wp-content/uploads/2023/08/Najm-Barea-Logo-size-1-vertical.png"
                className="mb-4 w-60 md:w-96"
              />
            </div>
            <div className="flex flex-row mr-56">
              <div className="mb-8 md:mb-0 md:mr-16 gap-10">
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  Dubai Office
                </h3>
                <p className="mb-2">
                  <span className="inline-block mr-2"><i class="fa-solid fa-location-dot"></i></span>
                  Al Fahad Plaza, Office No. 52, <br /> 6th Floor Al Rigga,{" "}
                  <br />
                  Deira Dubai, UAE
                </p>
                <p className="mb-2">
                  <span className="inline-block mr-2"><i class="fa-solid fa-phone"></i></span>
                  +971 58 5080056 <br /> +971 4 3261855
                </p>
                <p>
                  <span className="inline-block mr-2"><i class="fa-solid fa-envelope"></i></span>
                  info@najmbarea.com
                </p>
                <div className="flex mt-4 space-x-4">
                  <a href="https://www.instagram.com/" aria-label="Instagram">
                  <i class="fa-brands fa-instagram fa-2xl"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100006539163202" aria-label="Facebook">
                  <i class="fa-brands fa-square-facebook fa-2xl"></i> 
                  </a>
                  <a href="https://www.linkedin.com/in/dayyan-shaikh/" aria-label="LinkedIn">
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                  <a href="https://x.com/home?lang=en" aria-label="Twitter">
                  <i class="fa-brands fa-x-twitter fa-2xl"></i>
                  </a>
                </div>
              </div>
              <div className="ml-20">
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  India Office
                </h3>
                <p className="mb-2">
                  <span className="inline-block mr-2"><i class="fa-solid fa-location-dot"></i></span>
                  Devidayal Compound, <br />
                  Reay Road East, <br />
                  Mumbai 4000010
                </p>
                <p className="mb-2">
                  <span className="inline-block mr-2"><i class="fa-solid fa-phone"></i></span>
                  +91 82914 08981 <br /> +91 7820932970
                </p>
                <p>
                  <span className="inline-block mr-2"><i class="fa-solid fa-envelope"></i></span>
                  info@brightstarconstructions.com
                </p>
                <p>
                  <span className="inline-block mr-2"><i class="fa-solid fa-link"></i></span>
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
    </div>
  )
}

export default Footer
