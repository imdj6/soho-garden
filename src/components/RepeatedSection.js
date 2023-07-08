"use client";
// import "./RepeatedSection.css"
import Image from "next/image";
export default function RepeatedSection({
  imagesrc,
  description,
  aboutheading,
}) {
  return (
    <>
      {aboutheading && (
        <h2 className="text-center text-4xl mt-10 mb-10">About Us</h2>
      )}
      <div className="flex-row items-center md:flex  md:items-center p-5 md:p-16">
        <div className=" text-center mx-auto md:w-1/2 mb-5">
          <Image src={imagesrc} alt="imgL" width={300} height={300} className="rounded-full object-contain"/>
        </div>
        <div className="w-full md:w-1/2">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
