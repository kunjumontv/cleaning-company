import React from "react";

const ContactForm = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[95%] top-[30rem] rounded-lg bg-yellow md:w-[745px] p-4 md:left-auto lg:right-[110px] md:transform-none md:top-[34rem]">
      <h2 className="text-2xl text-center pt-10">Get a Free Estimate</h2>
      <p className="text-lg text-center">Contact Us</p>
      <form className="p-2 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-sm mb-2 mt-4">
            First Name*
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="border border-black rounded-md w-full h-12 bg-yellow px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-sm mb-2 mt-4">
            Last Name*
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="border border-black rounded-md w-full h-12 bg-yellow px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm mb-2 mt-4">
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-black rounded-md w-full h-12 bg-yellow px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-sm mb-2 mt-4">
            Phone Number*
          </label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            className="border border-black rounded-md w-full h-12 bg-yellow px-2 "
            max="10"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-sm mb-2 mt-4">
            Address*
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="border border-black rounded-md w-full h-12 bg-yellow px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="text-sm mb-2 mt-4">
            City*
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="border border-black rounded-md w-full h-12 bg-yellow px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="rooms" className="text-sm mb-2 mt-4">
            No of rooms*
          </label>
          <select
            name="rooms"
            id="rooms"
            className="border border-black rounded-md w-full h-12 bg-yellow px-2"
          >
            <option value=""></option>
            <option value="">2 bedroom</option>
            <option value="">3 bedroom</option>
            <option value="">4 bedroom</option>
          </select>
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="service" className="text-sm mb-2 mt-4">
            Choose your service*
          </label>
          <select
            name="service"
            id="service"
            className="border border-black rounded-md w-full h-12 bg-yellow px-2"
          >
            <option value=""></option>
            <option value="">Deep Cleaning</option>
            <option value="">Laundry</option>
            <option value="">Moving in/out</option>
          </select>
        </div>

        <div className="md:col-span-3 text-center">
          <button className=" bg-desaturated-teal text-subtle-yellow whitespace-nowrap px-10 py-4 rounded-full transition-all hover:bg-subtle-yellow hover:text-desaturated-teal hover:border hover:border-desaturated-teal">
            Get a Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
