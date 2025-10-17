"use client";

import Image from "next/image";
import Link from "next/link";
import { Truck, Package, Clock, BarChart3, Shield, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatedCard } from "@/components/ui/animated-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white">
        <div className="absolute inset-0 z-0">
          {/* Mobile Image */}
          <div className="block md:hidden">
            <Image
              src="./truck02mob.jpg?height=800&width=600"
              alt="Logistics truck on highway (mobile)"
              fill
              className="object-cover opacity-70"
              priority
            />
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block">
            <Image
              src="./truck02.jpg?height=800&width=1920"
              alt="Logistics truck on highway (desktop)"
              fill
              className="object-cover opacity-70"
              priority
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <AnimatedText
              text="Delivering Excellence in Logistics"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10"
              tag="h1"
            />
            <AnimatedSection delay={1.3}>
              <p className="text-xl mb-8">
                Your trusted partner for reliable, efficient, and safe
                transportation<br></br> solutions across the nation.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" scroll={true}>
                  <AnimatedButton className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 text-lg">
                    Get a Quote
                  </AnimatedButton>
                </Link>
                <Link href="/services" scroll={true}>
                  <AnimatedButton
                    variant="outline"
                    className="border-white text-black hover:text-[#003366] px-8 py-6 text-lg"
                  >
                    Our Services
                  </AnimatedButton>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Our Logistics Services
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              We offer comprehensive logistics solutions tailored to meet your
              specific needs, ensuring timely and safe delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="h-10 w-10 text-[#FF6600]" />,
                title: "Freight Shipping",
                description:
                  "Reliable transportation for your goods across the country with our modern fleet.",
              },
              {
                icon: <Package className="h-10 w-10 text-[#FF6600]" />,
                title: "Express Delivery",
                description:
                  "Fast and efficient delivery services for time-sensitive shipments.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#FF6600]" />,
                title: "Just-in-Time Delivery",
                description:
                  "Precision logistics to support your just-in-time inventory management.",
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-[#FF6600]" />,
                title: "Supply Chain Solutions",
                description:
                  "Comprehensive supply chain management to optimize your logistics operations.",
              },
              {
                icon: <Shield className="h-10 w-10 text-[#FF6600]" />,
                title: "Secure Transport",
                description:
                  "Specialized secure transport for high-value or sensitive cargo.",
              },
              {
                icon: <Globe className="h-10 w-10 text-[#FF6600]" />,
                title: "Cross-Border Logistics",
                description:
                  "Expert handling of international shipping and customs requirements.",
              },
            ].map((service, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.15}
                className="bg-[#F2F2F2] p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <AnimatedIcon delay={index * 0.15 + 0.3} className="mb-4">
                  {service.icon}
                </AnimatedIcon>
                <h3 className="text-xl font-bold text-[#003366] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#333333] mb-4">{service.description}</p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href="/services"
                    className="text-[#FF6600] font-medium hover:underline flex items-center"
                  >
                    Learn more{" "}
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                        duration: 1,
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Why Choose RAM Trucking Group
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              With years of experience, we've built our reputation on
              reliability, efficiency, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <AnimatedSection delay={0.5}> */}
            <div className="relative h-[400px] group overflow-hidden rounded-lg">
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden rounded-lg"
              >
                <Image
                  src="./truck04.jpg?height=400&width=600"
                  alt="Modern truck fleet"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>
            {/* </AnimatedSection> */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-6">
                {[
                  {
                    number: 1,
                    title: "Modern Fleet",
                    description:
                      "Our well-maintained, state-of-the-art trucks ensure reliable and efficient transportation.",
                  },
                  {
                    number: 2,
                    title: "Experienced Team",
                    description:
                      "Our professional drivers and logistics experts bring years of industry experience.",
                  },
                  {
                    number: 3,
                    title: "Nationwide Coverage",
                    description:
                      "Extensive network covering all major routes and destinations across the country.",
                  },
                  {
                    number: 4,
                    title: "Customer Satisfaction",
                    description:
                      "We pride ourselves on our high customer satisfaction rates and personalized service.",
                  },
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={0.7 + index * 0.2}>
                    <motion.li
                      className="flex"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="mr-4 bg-[#FF6600] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.number}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-[#003366] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#333333]">{item.description}</p>
                      </div>
                    </motion.li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to discuss how our logistics solutions can help
            your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" scroll={true}>
              <AnimatedButton className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 text-lg">
                Get a Free Quote
              </AnimatedButton>
            </Link>
            <Link href="/contact" scroll={true}>
              <AnimatedButton
                variant="outline"
                className="border-text-white text-black hover:bg-white hover:text-[#003366] px-8 py-6 text-lg"
              >
                Contact Us
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "RAM Trucking Group has been instrumental in streamlining our supply chain. Their reliable service and professional team have made logistics the least of our worries.",
                author: "John Smith",
                company: "ABC Manufacturing",
              },
              {
                quote:
                  "We've been working with RAM Trucking Group for over 5 years, and they've consistently delivered on time and with care. A true logistics partner.",
                author: "Sarah Johnson",
                company: "XYZ Retail Group",
              },
              {
                quote:
                  "Their cross-border logistics expertise has helped us expand into new markets seamlessly. Highly recommended for international shipping needs.",
                author: "Michael Chen",
                company: "Global Exports Inc.",
              },
            ].map((testimonial, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.2}
                className="bg-[#F2F2F2] p-6 rounded-lg"
              >
                <motion.div
                  className="text-[#FF6600] text-4xl font-serif mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  "
                </motion.div>
                <p className="text-[#333333] mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-[#003366]">
                    {testimonial.author}
                  </p>
                  {/* <p className="text-[#333333]">{testimonial.company}</p> */}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
