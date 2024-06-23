import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
const AboutUsPage = () => {
  const session = getServerSession(options)
  const team = [
    {
      id: 1,
      name: "~Shohaib Hossain(Shouvo)",
      work: "web Developer",
      img: "https://i.ibb.co/6vv7w39/321447756-1246803672540560-7403018106211127108-n.jpg",
    },
    {
      id: 2,
      name: "Md Ekramul Hassan",
      work: "web Developer",
      img: "https://i.ibb.co/yS3trhD/hassan.jpg",
    },
    {
      id: 3,
      name: "M Jahid hasan",
      work: "web Developer",
      img: "https://i.ibb.co/YN8dCzZ/413832899-1534317040662692-2541134493142373072-n.jpg",
    },
    {
      id: 4,
      name: "Rezwan ",
      work: "web Developer",
      img: "https://i.ibb.co/bgHXS05/394466036-200233456437947-5169117441317808806-n.jpg",
    },
    {
      id: 5,
      name: "Md.Sagor Hossain",
      work: "web Developer",
      img: "https://i.ibb.co/gFHpGFn/320544589-909732453803058-4514920903869606836-n.jpg",
    },
    {
      id: 6,
      name: "Priom Gupta",
      work: "web Developer",
      img: "https://i.ibb.co/r5MKrS5/416359973-3513715388941627-3843587137816629574-n.jpg",
    },
  ];
  return (
    <div className=" ">

      <div className="banner1 h-[550px] md:h-[500px] text-white p-7">
        <h2 className="md:text-5xl text-3xl text-center mt-6 font-bold">
          About Us
        </h2>
        <h3 className="md:text-3xl text-xl text-center font-medium mt-4 mb-10 text-customOrange">
          Our Story

        </h3>

        <p className="text-xl text-center">
          Discover the enchanting world of PDFMagic, where we&apos;ve set out
          on a mission to redefine your PDF experience. Our goal is to provide
          you with intuitive tools that allow you to play, edit, and customize
          your PDFs effortlessly. With PDFMagic, your documents take center
          stage as we empower you to transform them with ease. Welcome to a
          new era of PDF magic – where every edit, every customization, feels
          like pure enchantment Welcome to a new era of PDF magic – where
          every edit, every customization, feels like pure enchantment
        </p>
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl my-5">The Team</h1>
        <p className="text-center my-3 font-xl">
          We are few, yet a passionate few who enjoy creating solutions to
          help millions of people around the world with their document needs
        </p>
        <div className="grid md:grid-cols-3 gap-3">
          {team.map((man) => (
            <div
              key={man.id}
              className="flex justify-center items-center my-8"
            >
              <div>
                <Image
                  src={man.img}
                  alt="man"
                  height={200}
                  width={200}
                  className="rounded-2xl"
                ></Image>
                <p className="font-bold ">{man.name}</p>
                <p>{man.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutUsPage;
