import React, { useEffect } from "react";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img1}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>April 24, 2022</p>
              <p className="line-clamp-1"> By Oliver</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Impressive Design and Functionality
              </h1>
              <p className="line-clamp-2">
              "Incredible job on our website! The design is modern, the functionality is seamless, and your attention to detail truly exceeded our expectations. Thank you for bringing our vision to life!"
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Jan 3, 2023</p>
              <p className="line-clamp-1"> By Serena</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Smooth Operation and Timely Delivery      
                      </h1>
              <p className="line-clamp-2">
              "We couldn't be happier with the website you developed for us. It not only looks fantastic but also operates smoothly. Your team's professionalism and commitment to delivering on time were truly commendable. Great work!"
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img3}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>April 24, 2024</p>
              <p className="line-clamp-1"> By Richard</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              "Pleasure to Work With"
              </h1>
              <p className="line-clamp-2">
              "Working with your web development team was a pleasure. The communication throughout the project was excellent, and the final result is exactly what we envisioned. Our clients love the new website, and so do we. Thank you for a job well done!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
