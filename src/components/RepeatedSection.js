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
      <div className="flex flex-col md:flex-row items-center mb-16 ">
      <div className="max-w-md mx-auto mb-4 md:1/4">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ">
          <img src={imagesrc} alt="Image" className="object-cover w-full h-full rounded-full" />
        </div>
      </div>
      <div className="md:w-3/4 md:p-10 p-5">
      <p className="text-center text-gray-700">{description}</p>
      </div>
    </div>
    </>
  );
}
