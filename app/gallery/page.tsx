"use client"
import { useMemo } from "react"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { motion } from "framer-motion"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "./image3.JPG?height=400&width=600",
      alt: "Truck near warehouse",
      category: "Fleet",
    },
    {
      src: "./image4.JPG?height=400&width=600",
      alt: "Truck near warehouse",
      category: "Fleet",
    },
    {
      src: "./image5.JPG?height=400&width=600",
      alt: "Truck at loading dock",
      category: "Fleet",
    },
    {
      src: "./image6.JPG?height=400&width=600",
      alt: "Truck at loading dock",
      category: "Fleet",
    },
    {
      src: "./image7.JPG?height=400&width=600",
      alt: "Truck near warehouse",
      category: "Fleet",
    },
    {
      src: "./image8.JPG?height=400&width=600",
      alt: "Aerial view of trucks at distribution center",
      category: "Fleet",
    },
    {
      src: "./image9.JPG?height=400&width=600",
      alt: "Truck driver with delivery",
      category: "Fleet",
    },
    {
      src: "./image10.JPG?height=400&width=600",
      alt: "Aerial view of trucks at distribution center",
      category: "Fleet",
    },
    {
      src: "./image11.JPG?height=400&width=600",
      alt: "Truck near warehouse",
      category: "Fleet",
    },
    {
      src: "./image12.JPG?height=400&width=600",
      alt: "Truck at loading dock",
      category: "Fleet",
    },
    {
      src: "./image13.JPG?height=400&width=600",
      alt: "Truck being maintained",
      category: "Fleet",
    },
    {
      src: "./image14.JPG?height=400&width=600",
      alt: "Truck being loaded with cargo",
      category: "Fleet",
    },
    {
      src: "./image15.jpg?height=400&width=600",
      alt: "Truck parked in warehouse",
      category: "Fleet",
    },
    {
      src: "./image16.jpg?height=400&width=600",
      alt: "Truck near warehouse",
      category: "Fleet",
    },
    {
      src: "./image17.jpg?height=400&width=600",
      alt: "Truck near warehouse",
      category: "Fleet",
    },
  ]

  const [filter, setFilter] = useState<string | null>(null)
  const filteredImages = filter ? galleryImages.filter((img) => img.category === filter) : galleryImages

  const shuffledImages = useMemo(() => {
    const shuffled = [...filteredImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [filteredImages]);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Gallery of logistics operations"
            fill
            className="object-cover opacity-30"
          /> */}
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <AnimatedSection delay={1.3}>
          <p className="text-xl max-w-3xl mx-auto">Take a visual journey through our operations, fleet, and team.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full ${!filter ? "bg-[#003366] text-white" : "bg-[#F2F2F2] text-[#333333] hover:bg-[#99CCFF]"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("Fleet")}
              className={`px-4 py-2 rounded-full ${filter === "Fleet" ? "bg-[#003366] text-white" : "bg-[#F2F2F2] text-[#333333] hover:bg-[#99CCFF]"}`}
            >
              Fleet
            </button>
            <button
              onClick={() => setFilter("Operations")}
              className={`px-4 py-2 rounded-full ${filter === "Operations" ? "bg-[#003366] text-white" : "bg-[#F2F2F2] text-[#333333] hover:bg-[#99CCFF]"}`}
            >
              Operations
            </button>
            <button
              onClick={() => setFilter("Warehousing")}
              className={`px-4 py-2 rounded-full ${filter === "Warehousing" ? "bg-[#003366] text-white" : "bg-[#F2F2F2] text-[#333333] hover:bg-[#99CCFF]"}`}
            >
              Warehousing
            </button>
            <button
              onClick={() => setFilter("Team")}
              className={`px-4 py-2 rounded-full ${filter === "Team" ? "bg-[#003366] text-white" : "bg-[#F2F2F2] text-[#333333] hover:bg-[#99CCFF]"}`}
            >
              Team
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shuffledImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm">{image.alt}</p>
                  <span className="text-xs text-[#99CCFF]">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FF6600]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
            <span className="sr-only">Close</span>
          </button>

          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image
              src={filteredImages[selectedImage].src || "/placeholder.svg"}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center text-white">
            <p className="text-lg">{filteredImages[selectedImage].alt}</p>
            <p className="text-sm text-[#99CCFF]">{filteredImages[selectedImage].category}</p>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-2 rounded-full"
            onClick={() => setSelectedImage((prev) => (prev === 0 ? filteredImages.length - 1 : prev? prev - 1: 0))}
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-2 rounded-full"
            onClick={() => setSelectedImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev? prev + 1: 1))}
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
