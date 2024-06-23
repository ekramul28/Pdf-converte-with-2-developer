"use client";

import useServices from "@/hooks/useServices";
import ServicesCard from "./servicesCard/ServicesCard";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Services = () => {
  const [services] = useServices();
  // console.log(services);
  const location = usePathname();
  return (
    <div>
      <h1
        className={`text-center my-16 font-bold text-2xl  ${
          location == "/" ? "hidden" : ""
        }`}
      >
        Every tool you need to work with PDFs in one place Every tool you need
        to use PDFs, at your fingertips. All are 100% FREE and easy to use!
        Merge, split, compress, convert, rotate, unlock and watermark PDFs with
        just a few clicks.
      </h1>

      <div className="min-h-screen">
        {location === "/" ? (
          <div>
            <h1 className="text-center font-bold text-3xl my-6">
              Our Services
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 rounded-lg ">
              {services.slice(0, 6).map((service) => (
                <Link key={service._id} href={`services/${service._id}`}>
                  <ServicesCard
                    image={service.image}
                    name={service.name}
                    feature={service.feature}
                    benefit={service.benefit}
                    location={location}
                  ></ServicesCard>
                </Link>
              ))}
            </div>
            <div className="flex justify-center items-center w-full mb-4">
              <Link href={"/services"}>
                <button className="btn  text-white  bg-slate-800 dark:text-white border-none rounded-md">
                  See All
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 my-4  ">
            {services.map((service) => (
              <Link key={service._id} href={`services/${service._id}`}>
                <ServicesCard
                  image={service.image}
                  name={service.name}
                  feature={service.feature}
                  benefit={service.benefit}
                ></ServicesCard>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
