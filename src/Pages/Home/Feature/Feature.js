import React from "react";

const Feature = () => {
  return (
    <div className="bg-secondary-200 mt-12 pt-12">
      <div className="mb-12">
        <h3 className="text-center text-4xl  mb-2">What We Do ?</h3>
        <hr className="w-3/6 mx-auto" />
        <p className="text-center mt-7 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
          blanditiis quasi reprehenderit dolor vel perspiciatis, delectus itaque
          laboriosam. Molestias, nisi ab! Sequi hic ea laboriosam. Consequatur
          reprehenderit deleniti exercitationem suscipit.
        </p>
      </div>

      <div className="mt-12 pt-12 grid grid-column-2 grid-flow-col gap-4">
        <div className="mockup-phone pr-auto">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
          </div>
        </div>

        <div className="pt-16 ml-60">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
