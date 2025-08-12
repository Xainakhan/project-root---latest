import React from "react";
import { Phone, Mail } from "lucide-react";
import map from "../assets/map.png";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";
interface Store {
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  mapLink?: string; // Optional link for map>
}

const stores: Store[] = [
  {
    name: "CSM (Flagship Store) - Lahore",
    address: "Main Bedian Road Near DHA Ph. VI, Lahore, Pakistan",
    phone: "111-457-276",
    email: "info@csm.com",
    image: map,
    mapLink: "https://maps.app.goo.gl/dqqfrqJNLkVh4qWa8?g_st=aw",
  },
  {
    name: "CSM - Main Boulevard Lahore",
    address: "Gulberg Main Boulevard, Lahore, 54750, Pakistan",
    phone: "111-457-276",
    email: "info@csm.com",
    image: map,
    mapLink: "https://maps.app.goo.gl/dqqfrqJNLkVh4qWa8?g_st=aw",
  },
  {
    name: "CSM - Islamabad",
    address: "Blue Area, Islamabad, Pakistan",
    phone: "111-457-276",
    email: "info@csm.com",
    image: map,    
    mapLink: "https://maps.app.goo.gl/9KkKfeEy2r7Gi39s6?g_st=aw",
  },
  {
    name: "CSM - Karachi",
    address: "Clifton, Karachi, Pakistan",
    phone: "111-457-276",
    email: "info@csm.com",
    image: map,
    mapLink: "https://maps.app.goo.gl/oW6uNnaUK9gKagsQ8",
  },
  {
    name: "CSM - North Nazimabad",
    address: "North Nazimabad, Karachi, Pakistan",
    phone: "111-457-276",
    email: "info@csm.com",
    image: map,
    mapLink: "https://maps.app.goo.gl/g289SYpa3oEJoSK86",
  },
];

const StoreLocations: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Heading with horizontal lines */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gray-400 w-24"></div>
            <h2 className="text-xl font-semibold text-gray-800">
              Store Locations
            </h2>
            <div className="h-px bg-gray-400 w-24"></div>
          </div>
        </div>

        {/* Subheading + Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <p className="text-sm font-bold uppercase text-gray-800">
            WE ARE AVAILABLE ACROSS PAKISTAN
          </p>
          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              placeholder="search location or store"
              className="border border-gray-300 rounded-full px-4 py-2 w-80 text-sm focus:outline-none focus:border-gray-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-xs">
              Search
            </button>
          </div>
        </div>

        {/* Store Cards */}
        <div className="space-y-4">
          {stores.map((store, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row overflow-hidden h-52"
            >
              {/* Left: Text Info */}
              <div className="p-6 flex flex-col justify-center flex-1">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {store.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{store.address}</p>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" /> {store.phone}
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" /> {store.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Map Image */}
              <div className="w-full md:w-80 h-48 md:h-auto relative">
                <img
                  src={store.image}
                  alt="Map location"
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() =>
                    window.open(
                      store.mapLink || "https://maps.google.com",
                      "_blank"
                    )
                  }
                />
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/+923004692585?text=Hi, I would like to get more information about CSM Directions.",
                      "_blank"
                    )
                  }
                  className="absolute bottom-16 left-[-146px] bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
      <div className="border-t border-gray-300" />
      {/* Footer Section */}
      {/* <Footer /> */}
    </>
  );
};

export default StoreLocations;
