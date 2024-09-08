import Image from 'next/image';
import { MdDryCleaning } from 'react-icons/md';

const WhyChoose = () => {
  return (
    <div className="lg:mx-28 py-28 grid grid-cols-1 lg:grid-cols-[400px,1fr] items-center">
      <div className="relative h-[500px] w-full">
        <div
          className="absolute inset-0 bg-fixed bg-start bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/glassclean.jpg)',
            
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
      </div>
      <div className="mx-auto px-12">
        <h1 className="my-8 text-2xl w-[180px] md:w-full md:text-44px">
          Why Choose The Cleanic
        </h1>
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12">
          <div className="lg:w-[270px]">
            <h2 className="flex items-center gap-2 text-19px md:text-22px md:mb-4">
              <span className="bg-yellow p-1 rounded-full">
                <MdDryCleaning className="text-xl md:text-2xl transition hover:scale-x-[-1] " />
              </span>
              Qualified Team
            </h2>
            <p className="text-15px">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy.
            </p>
          </div>
          <div className="lg:w-[270px]">
            <h2 className="flex items-center gap-2 text-19px md:text-22px md:mb-4">
              <span className="bg-yellow p-1 rounded-full">
                <MdDryCleaning className="text-xl md:text-2xl transition hover:scale-x-[-1] " />
              </span>
              Same Day Availability
            </h2>
            <p className="text-15px">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy.
            </p>
          </div>
          <div className="lg:w-[270px]">
            <h2 className="flex items-center gap-2 text-19px md:text-22px md:mb-4">
              <span className="bg-yellow p-1 rounded-full">
                <MdDryCleaning className="text-xl md:text-2xl transition hover:scale-x-[-1] " />
              </span>
              Outstanding Support
            </h2>
            <p className="text-15px">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy.
            </p>
          </div>
          <div className="lg:w-[270px]">
            <h2 className="flex items-center gap-2 text-19px md:text-22px md:mb-4">
              <span className="bg-yellow p-1 rounded-full">
                <MdDryCleaning className="text-xl md:text-2xl transition hover:scale-x-[-1] " />
              </span>
              Eco-Friendly Materials
            </h2>
            <p className="text-15px">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy.
            </p>
          </div>
        </div>
        <div className="md:col-span-3 text-start mt-12 pb-10">
          <button className="text-md px-12 py-3 bg-desaturated-teal text-subtle-yellow whitespace-nowrap md:px-12 md:py-4 md:text-base rounded-full transition-all hover:bg-subtle-yellow hover:text-desaturated-teal hover:border hover:border-desaturated-teal">
            Get to Know Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
