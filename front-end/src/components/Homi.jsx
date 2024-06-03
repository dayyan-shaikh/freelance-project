import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Security Guard Services",
    description:
      "Our best security guard agency provides trained personnel monitoring and safeguarding premises to prevent unauthorised access, maintain order, and ensure safety.",
    icon: "https://placehold.co/100x100?text=Icon1",
    bgColor: "bg-white",
  },
  {
    title: "Technical Services",
    description:
      "A reliable manpower supplier for construction and engineering industries, ensuring skilled and qualified personnel to drive successful project outcomes maintain order, and ensure safety.",
    icon: "https://placehold.co/100x100?text=Icon1",
    bgColor: "bg-white",
  },
  {
    title: "Business Setup and Visa Services",
    description:
      "Streamlining your business venture with our comprehensive business setup and visa services, ensuring a smooth transition and compliance every step of the way.",
    icon: "https://placehold.co/100x100?text=Icon1",
    bgColor: "bg-white",
  },
];

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
        <header className="bg-white  shadow-2xl ">
          <div className="container mx-auto flex justify-between items-center p-2">
            <div className="flex items-center space-x-4">
              <img
                className="w-28 ml-20"
                src="https://najmbarea.com/wp-content/uploads/2023/08/Najm-Barea-Logo-size-1.png"
                alt="Najm Barea Logo"
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
              <button className="bg-yellow-600 text-white px-4 py-2 mb-3">
                Enquire Now
              </button>
            </nav>
           
          </div>
        </header>

        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://najmbarea.com/wp-content/uploads/slider/cache/36d08a8be66fbac2115ac5466c6de154/people-sitting-desk-working.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-sm md:text-lg">
              Business Setup & PRO Services
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Najm Barea Management Services
            </h1>
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold hover:bg-yellow-600">
              Read More
            </button>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button className="bg-yellow-500 text-white p-2 rounded-full m-2">
              <img
                aria-hidden="true"
                alt="left-arrow"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMS40MzMgMTUuOTkyTDIyLjY5IDUuNzEyYy4zOTMtLjM5LjM5My0xLjAzIDAtMS40Mi0uMzkzLS4zOS0xLjAzLS4zOS0xLjQyMyAwbC0xMS45OCAxMC45NGMtLjIxLjIxLS4zLjQ5LS4yODUuNzYtLjAxNS4yOC4wNzUuNTYuMjg0Ljc3bDExLjk4IDEwLjk0Yy4zOTMuMzkgMS4wMy4zOSAxLjQyNCAwIC4zOTMtLjQuMzkzLTEuMDMgMC0xLjQybC0xMS4yNTctMTAuMjkiCiAgICAgICAgICBmaWxsPSIjYmQ4MzMwIiBvcGFjaXR5PSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+"
              />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button className="bg-yellow-500 text-white p-2 rounded-full m-2">
              <img
                aria-hidden="true"
                alt="right-arrow"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMC43MjIgNC4yOTNjLS4zOTQtLjM5LTEuMDMyLS4zOS0xLjQyNyAwLS4zOTMuMzktLjM5MyAxLjAzIDAgMS40MmwxMS4yODMgMTAuMjgtMTEuMjgzIDEwLjI5Yy0uMzkzLjM5LS4zOTMgMS4wMiAwIDEuNDIuMzk1LjM5IDEuMDMzLjM5IDEuNDI3IDBsMTIuMDA3LTEwLjk0Yy4yMS0uMjEuMy0uNDkuMjg0LS43Ny4wMTQtLjI3LS4wNzYtLjU1LS4yODYtLjc2TDEwLjcyIDQuMjkzeiIKICAgICAgICAgIGZpbGw9IiNiZDgzMzAiIG9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4="
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

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-yellow-600">
            Our Services
          </h2>
        </div>
        <div className="flex flex-row gap-6 items-center w-8/12 ml-60">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full p-6 ${service.bgColor} shadow-lg`}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-100 py-8">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-yellow-600 mb-8">
        Prestigious Clients We Serve
      </h2>
      <div className="flex flex-wrap justify-center items-center space-x-24">
        <img
          src="https://najmbarea.com/wp-content/uploads/2023/12/APCC-150x150.png"
          alt="APCC"
          className="w-40 h-40"
        />
        <img
          src="https://najmbarea.com/wp-content/uploads/2023/12/AB-Marina-Logo-min.png-150x150.png"
          alt="Marina Fitness"
          className="h-30 h-28"
        />
        <img
          src="https://najmbarea.com/wp-content/uploads/2023/12/azizi-150x150.png"
          alt="Azizi"
          className="w-40 h-40"
        />
        <img
          src="https://najmbarea.com/wp-content/uploads/2023/12/LANITEM-150x150.png"
          alt="Latinem Securities"
          className="w-40 h-40"
        />
        <img
          src="https://najmbarea.com/wp-content/uploads/2023/12/lootah_logo-1-150x150.png"
          alt="Lootah"
          className="w-36 h-36"
        />
      </div>
    </div>

    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-row">
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold text-yellow-600 mb-2">ABOUT NAJM BAREA</h2>
          <h3 className="text-xl font-semibold text-black mb-4">BEST SECURITY GUARD AGENCY</h3>
          <p className="text-gray-700 mb-4">
            Principally in Human Capital Outsourcing, NAJM BAREA Group has played a meaningful role in providing gainful employment to the local community and expatriates alike for 20 years. NAJM BAREA is the best certified security guard company which provide best security services to your construction properties, commercial and residential properties.
          </p>
          <p className="text-gray-700 mb-4">
            We began our journey in 2003 in India with a fresh vision, ideas and culture. Our customer-centric services and philosophy to offer services to exceed client expectations have made us one of the best workforce suppliers for the Security Services, Construction, and Engineering industries. We are not expanding ourselves to conquer the UAE market.
          </p>
          <p className="text-gray-700 mb-4">
            At our best security guard agency, we strive for excellence in all aspects of our services, offering tailored solutions that address your unique requirements. We take pride in adapting and capitalising on emerging prospects in the ever-evolving business landscape.
          </p>
          <p className="text-gray-700">
            We offer <a href="#" className="text-blue-600 underline">best security guard services</a>, specializing in <a href="#" className="text-blue-600 underline">private security guard services in the UAE</a>.
          </p>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8">
          <img src="https://najmbarea.com/wp-content/uploads/2023/07/abt-23.jpg" alt="Team" className="shadow-lg" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Homi;
