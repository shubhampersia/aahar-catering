"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(0)

  const allImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Corporate event catering setup",
      category: "Corporate Events",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Elegant wedding reception",
      category: "Weddings",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Gourmet food presentation",
      category: "Food",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Conference catering service",
      category: "Conferences",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Cocktail bar setup",
      category: "Bar Services",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Private dining experience",
      category: "Private Dining",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Multi-cuisine buffet spread",
      category: "Food",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Gala dinner setup",
      category: "Gala Dinners",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Team building event catering",
      category: "Corporate Events",
    },
  ]

  const imagesPerPage = [6, 3] // First page: 6 images, Second page: 3 images
  const totalPages = 2

  const getCurrentPageImages = () => {
    if (currentPage === 0) {
      return allImages.slice(0, 6)
    } else {
      return allImages.slice(6, 9)
    }
  }

  const galleryImages = getCurrentPageImages()

  const openModal = (index: number) => {
    const actualIndex = currentPage === 0 ? index : index + 6
    setSelectedImage(actualIndex)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length)
    }
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            GALLERY
            <div className="w-20 h-1 bg-orange-500 mt-2 mx-auto"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful events, exquisite food presentations, and memorable celebrations
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
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group h-64"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-semibold">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4">
            {currentPage > 0 && (
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>
            )}

            {currentPage < totalPages - 1 && (
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
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
            <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <Image
              src={allImages[selectedImage].src || "/placeholder.svg"}
              alt={allImages[selectedImage].alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-semibold">{allImages[selectedImage].category}</p>
              <p className="text-sm text-gray-300">{allImages[selectedImage].alt}</p>
            </div>

            <div className="absolute bottom-4 right-4 text-white text-sm">
              {selectedImage + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
