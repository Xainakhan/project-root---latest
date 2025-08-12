import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your assets
import AboutBanner1 from "../assets/AboutUs/Hero.png";
import AboutBanner2 from "../assets/AboutUs/Mission.png";
import AboutBanner3 from "../assets/AboutUs/Vision.png";
import Leader1 from "../assets/AboutUs/Management/cmBig.png";
import Leader2 from "../assets/AboutUs/Management/VCM.png";
import Leader3 from "../assets/AboutUs/Management/CEO.png";
import Leader4 from "../assets/AboutUs/Management/COO.png";
import Review1 from "../assets/AboutUs/sustain/imageA.jpg";
import Review2 from "../assets/AboutUs/sustain/imageB.png";
import Review3 from "../assets/AboutUs/sustain/imageC.png";

// Slider images
import slide1 from "../assets/AboutUs/Values/valueA.png";
import slide2 from "../assets/AboutUs/Values/valueB.png";
import slide3 from "../assets/AboutUs/Values/valueC.png";
import slide4 from "../assets/AboutUs/Values/valueD.png";
import Newsletter from "../pages/newsLetter";
// import Footer from "../pages/footer";

// Reusable heading with lines
const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center space-x-4 md:space-x-6">
      <div className="h-px bg-gray-400 w-16 md:w-32"></div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px bg-gray-400 w-16 md:w-32"></div>
    </div>
  </div>
);

export const AboutUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slide1,
      title: "SUSTAINABILITY FIRST",
      text: "Committed to environmentally friendly practices and sustainable development. Creating future business practices and positive environmental impact.",
    },
    {
      image: slide2,
      title: "CUSTOMER CENTERED THINKING",
      text: "Customer satisfaction is our top priority. We believe in delivering exceptional service and maintaining long-term relationships.",
    },
    {
      image: slide3,
      title: "QUALITY YOU CAN TRUST",
      text: "Delivering high-quality products and services with uncompromising standards and attention to detail in everything we do.",
    },
    {
      image: slide4,
      title: "PARTNERSHIP",
      text: "Building strong partnerships with our clients, suppliers, and communities to create mutual success and shared growth.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - 3 : prev - 1));
  };

  const leaders = [
    // { name: "ZAHID RAFIQ", position: "Chairman", img: Leader1 , disk: "As we embark on this new journey, introducing electric vehicle brands to Pakistan, I am filled with excitement and optimism. HRL Engineering has always been at the forefront of innovation and progress, and this venture is a testament to our commitment to shaping a better future for our nation. With our experience in developing two of Pakistan's first smart cities and our trusted partnerships in infrastructure, and energy projects, we are well-positioned to drive positive change in the NEV automotive sector. Our foray into alternative energy is a strategic step towards reducing our reliance on fossil fuels, promoting sustainable development, and enhancing the quality of life for our countrymen. At Capital Smart Motors, we believe that mobility is not just about transportation; it's about transforming lives. Our leading global fellow partner brands offer cutting-edge technology, eco-friendly solutions, and unparalleled performance, empowering our customers to experience the future of mobility today. I would like to express my gratitude to the government, our partners and all stakeholders for their trust and support. Together, we can create a brighter, more sustainable future for Pakistan. I invite you to join us on this exciting journey and experience the difference we have vowed to bring forward. Welcome to a smarter, greener, and more connected Pakistan." },
    { name: "JAHANZAIB ZAHID", position: "Vice Chairman", img: Leader2, disk: "Represents the next generation of entrepreneurial excellence, carrying forward a legacy of success while forging new frontiers in sustainable mobility. Aiming to drive Pakistan into an era of innovation, spearheading a transformative ecosystem. Driven by a commitment to sustainability and technological advancement, paving the way for a future where clean energy and mobility converge seamlessly." },
    { name: "IMRAN ZAHID", position: "CHIEF EXECUTIVE OFFICER", img: Leader3, disk: "Brings a dynamic leadership approach to the forefront of Pakistan’s evolving automotive landscape. With a deep understanding of technological integration, he is driving the company’s ambitious vision to establish a robust acceptance for electric vehicles. His unwavering commitment to progress, paired with a forward-thinking mindset, ensures that the company remains a catalyst for transformation in Pakistan’s automotive sector. With a deep understanding of global automotive trends and local market dynamics, his leadership is instrumental in steering the company’s transition from CBU business to CKD assembly." },
    { name: "ABID SAEED", position: "CHIEF OPERATING OFFICER", img: Leader4, disk: "With over two decades of experience in the automotive sector, his expertise spans across operations, strategic planning, and market expansion, making him a driving force behind our aspiring vision for electric mobility. With a deep understanding of global automotive trends and local market dynamics, his leadership is instrumental in steering the company’s transition from CBU business to CKD assembly." },
  ];

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div>
        <img
          src={AboutBanner1}
          alt="About Us Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">OVERVIEW</h2>
        <p className="text-gray-700 text-med leading-relaxed text-center max-w-4xl mx-auto">
          As A Venture Of Habib Rafiq Limited (HRL) Engineering, One Of
          Pakistan's Most Trusted Names In Infrastructure And Industrial
          Development, CSM Is Committed To Sustainable Automotive Industry
          Trends In Local Roads. From Premium EV And Plug-In Hybrid Electric
          Vehicles, Clean Energy Engineering Focus Solutions.
        </p>
      </div>

      {/* Vision Section */}
      <div>
        <img
          src={AboutBanner2}
          alt="Our Vision"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Gap between banners */}
      <div className="py-8"></div>

      {/* Mission Section */}
      <div>
        <img
          src={AboutBanner3}
          alt="Our Mission"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">OUR VALUES</h2>
          <p className="text-gray-600 text-center mb-12">
            We Aim To Create A Harmonious Conscience Between Humans, Tech, And
            Nature.
          </p>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 gap-6"
                style={{
                  transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                }}
              >
                {slides.map((slide, idx) => (
                  <div key={idx} className="w-1/3 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-3 text-gray-900">
                          {slide.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="max-w-8xl mx-auto py-16 px-4">
        <SectionHeading title="Leadership" />
        
        {/*  Leadership CM */}
        
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
          <img
            src={Leader1}
            alt="ZAHID RAFIQ"
            className="w-[880px] h-auto rounded-lg object-cover mb-6"
          />
          <div className="w-full text-center md:ml-0">
          
            <p className="text-base text-gray-700 leading-relaxed text-justify mx-auto">
              As we embark on this new journey, introducing electric vehicle brands to Pakistan, I am filled with excitement and optimism. HRL Engineering has always been at the forefront of innovation and progress, and this venture is a testament to our commitment to shaping a better future for our nation.<br/><br/>
              With our experience in developing two of Pakistan's first smart cities and our trusted partnerships in infrastructure, and energy projects, we are well-positioned to drive positive change in the NEV automotive sector. Our foray into alternative energy is a strategic step towards reducing our reliance on fossil fuels, promoting sustainable development, and enhancing the quality of life for our countrymen.<br/><br/>
              At Capital Smart Motors, we believe that mobility is not just about transportation; it's about transforming lives. Our leading global fellow partner brands offer cutting-edge technology, eco-friendly solutions, and unparalleled performance, empowering our customers to experience the future of mobility today.<br/><br/>
              I would like to express my gratitude to the government, our partners and all stakeholders for their trust and support.<br/><br/>
              Together, we can create a brighter, more sustainable future for Pakistan. I invite you to join us on this exciting journey and experience the difference we have vowed to bring forward.<br/>
              <br></br><i>Welcome to a smarter, greener, and more connected Pakistan.</i>
            </p>
             <h3 className="text-left text-2xl font-bold text-gray-900 mt-2 underline underline-offset-4 decoration-2 decoration-gray-400">
              ZAHID RAFIQ
            </h3>
            <p className="text-left text-gray-600 mt-2 mb-6">Chairman CSM</p>
          </div>
        </div>

        {/*  Leadership CM - end */}
        
        
        <div className="space-y-16">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto"
            >
              <div className="flex-shrink-0 w-full md:w-1/3">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-[454px] h-auto rounded-lg object-cover"
                />
              </div>
              <div className="text-left md:ml-8 w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 underline underline-offset-4 decoration-2 decoration-gray-400">
                  {leader.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{leader.position}</p>
                <p className="text-base text-gray-700 leading-relaxed">
                  {leader.disk}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            What People Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            We Aim To Create A Harmonious Conscience Between Humans, Tech, And
            Nature.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: Review1,
                title: "GEELY TECHNOLOGY BUILDING",
                text: "State-of-the-art facilities for automotive innovation and sustainable transportation solutions in Pakistan Auto Industry.",
              },
              {
                img: Review2,
                title: "BRINGING TECHNOLOGY TO LIVES",
                text: "Advanced automotive technology integration for sustainable mobility solutions and environmental consciousness.",
              },
              {
                img: Review3,
                title: "SUSTAINABILITY",
                text: "Committed to environmental protection and sustainable development through clean energy transportation solutions.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
      <div className="border-t border-gray-300" />
      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
