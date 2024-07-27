import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";
import gallery2 from "../assets/images/gallery-img-2.png"
import gallery3 from "../assets/images/gallery-img-3.png"
import gallery4 from "../assets/images/gallery-img-4.png"
import gallery5 from "../assets/images/gallery-img-5.png"
import gallery6 from "../assets/images/gallery-img-6.png"
import gallery7 from "../assets/images/gallery-img-7.png"
import gallery8 from "../assets/images/gallery-img-8.png"
import gallery9 from "../assets/images/gallery-img-9.png"
import gallery10 from "../assets/images/gallery-img-10.png"


const Gallery = () => {
    // Define an array of imported images
    const images = [gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10];

    return (
        <>
            <div className="container mx-auto px-4">
                <Header />

                <h1 className="text-5xl font-thin mt-10 text-gray-400 mb-4" style={{ letterSpacing: "2px", lineHeight: "10px" }}>
                    Photo
                </h1>
                <h1 className="text-5xl font-bold">Gallery</h1>

                <div className="gallery-grid mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Replace with your actual image URLs */}
                    {Array.from({ length: 10 }).map((_, index) => (
                        <img
                            key={index}
                            src={images[index % images.length]} // Use modulo to cycle through the imported images
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto"
                        />
                    ))}
                </div>

                <div className="div mt-10 mb-16 flex items-center gap-6">
                    <div className="swiper-count flex mt-4">
                        <p className="text-xl text-[#333333] font-[700] ">
                            0 <br />
                            <span>1</span>
                        </p>
                        <span className="text-4xl text-gray-500 mx-8">/</span>
                        <p className="text-xl text-gray-500 font-normal">05</p>
                    </div>

                    <div className="buttons flex gap-3 mt-6">
                        <Button
                            btnClass="border border-gray-300 px-2 py-1 btn-primary shadow-sm rounded-md mr-2"
                            btnlabel={<ArrowBackIcon />}
                        />
                        <Button
                            btnClass="border border-gray-300 px-2 py-1 btn-primary shadow-sm rounded-md bg-gray-100"
                            btnlabel={<ArrowForwardIcon />}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Gallery;