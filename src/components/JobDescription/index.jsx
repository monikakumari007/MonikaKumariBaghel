import React from "react";
import Navbar from "../Navbar";

function JobDescription() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-slate-300 mx-40 rounded-md p-4 "><h1 className=" text-center text-2xl text-black font-bold">Job Details</h1></div>
      <div className=" flex justify-between p-8 bg-white w-100 mx-40 mt-10 mb-4 rounded-md">
        <div className="p-4 leading-8  gap-2 mx-2">
          <div className="flex gap-2">
            <h1 className="font-bold text-black">Job Title:</h1>
            <p className="from-neutral-50">IOS Developer</p>
          </div>
          <div className="flex gap-2">
            <h1 className="font-bold text-black">Location:</h1>
            <p className="from-neutral-50">Noida</p>
          </div>
          <div className="flex gap-2">
            <h1 className="font-bold text-black">Skills:</h1>
            <p className="from-neutral-50">C,C++,Java,Kotlin</p>
          </div>
          <div className="gap-2">
            <h1 className="font-bold text-black">Perks:</h1>
            <p className="text-gray-600">
              <ul>
                <li>&#x2022; Both Side Cab</li>
                <li>&#x2022; Laptop Kit Will be Provided</li>
                <li>&#x2022; Work from home Available</li>
                <li>&#x2022; Sat Sun fixed off</li>
              </ul>
            </p>
          </div>
          <div>
            <h1 className=" flex  font-bold text-black">Job Description:</h1>
            <div className="flex ">
              <p className="text-gray-600">
                <ul>
                  <li>
                    &#x2022; Designing and building advanced applications for
                    the iOS platform. Collaborating with cross-functional teams
                    to define, design, and ship new features.
                  </li>
                  <li>
                    &#x2022; An iOS developer is responsible for designing,
                    developing and maintaining apps for products featuring the
                    iOS operating system. Their daily tasks include developing
                    native SDKs, writing efficient code for iOS apps, testing
                    and troubleshooting code and keeping themselves updated on
                    iOS upgrades.
                  </li>
                  <li>
                    &#x2022; developing native SDKs (Software Development Kits)
                    on the iOS platform
                  </li>
                  <li>
                    &#x2022; writing clean, efficient code for iOS and iPadOS
                    apps within deadlines
                  </li>
                  <li>
                    &#x2022; testing and troubleshooting to ensure that code is
                    bug-free
                  </li>
                  <li>
                    &#x2022; keeping yourself up-to-date on iOS updates and new
                    product models
                  </li>
                  <li>
                    &#x2022; working with teams that include UX designers,
                    back-end engineers and product managers
                  </li>
                  <li>
                    &#x2022; identifying and eliminating bottlenecks within
                    applications
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 mx-4 ">
          <h5 className=" mb-2 font-medium"> Are You Interested?</h5>
          <a href="">
          <button className="bg-blue-700 font-semibold  text-white rounded-md p-2 px-4">
            Apply
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
