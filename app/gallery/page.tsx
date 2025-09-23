"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Keep unique images
  const allImages = [
    { src: "/aboutusPic.jpg" },
    { src: "/Gallery/Gallery1.jpg" },
    { src: "/Gallery/Gallery2.jpg" },
    { src: "/Gallery/Gallery4.jpg" },
    { src: "/Gallery/Gallery5.jpg" },
    { src: "/Gallery/Gallery6.jpg" },
    { src: "/Gallery/Gallery7.jpg" },
    { src: "/Gallery/Gallery8.jpg" },
    { src: "/Gallery/Gallery9.jpg" },
    { src: "/Gallery/Gallery10.jpg" },
     { src: "/Gallery/Gallery11.jpg" },
  ];

const imagesPerPage = 6; // show 6 images per page
const totalPages = Math.ceil(allImages.length / imagesPerPage);

const getCurrentPageImages = () => {
  const start = currentPage * imagesPerPage;
  const end = start + imagesPerPage;
  return allImages.slice(start, end);
};

  const galleryImages = getCurrentPageImages();

  const openModal = (index: number) => {
    const actualIndex = currentPage === 0 ? index : index + 6;
    setSelectedImage(actualIndex);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + allImages.length) % allImages.length
      );
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#c68c2e] mb-4">
            GALLERY
            <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful events, exquisite food
            presentations, and memorable celebrations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg transition-shadow cursor-pointer h-64 group"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4">
            {currentPage > 0 && (
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="flex items-center px-6 py-3 bg-[#c68c2e] text-white rounded-lg hover:bg-[#c48621] transition-colors"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>
            )}

            {currentPage < totalPages - 1 && (
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="flex items-center px-6 py-3 bg-[#c68c2e] text-white rounded-lg hover:bg-[#c48621] transition-colors"
              >
                Next
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Only the image */}
            <Image
              src={allImages[selectedImage].src}
              alt=""
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
