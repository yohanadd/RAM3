"use client";

import Link from "next/link";
import {
  Truck,
  Package,
  BarChart3,
  Globe,
  Warehouse,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Thermometer } from "lucide-react";
import { Clock } from "lucide-react";

export default function Services() {
  // Service data array to make the code more maintainable
  const services = [
    {
      icon: <Package className="h-10 w-10 text-[#FF6600]" />, // Represents shared cargo for LTL
      title: "Partial Truckload(LTL)",
      description:
        "Less than Truckload (LTL) shipping offers an efficient solution for shipments over 100 lbs that do not require a full truck. By sharing truck space with other shippers, businesses pay only for the portion they use, making LTL a cost-effective method for land transportation. While it provides significant savings, LTL shipping may involve less flexibility in routing and delivery times, as cargo space is shared among multiple shipments.",
      features: [],
      cta: "Learn More About LTL",
      delay: 0.4,
      iconDelay: 0.8,
      featureDelay: 0.6,
    },
    {
      icon: <Truck className="h-10 w-10 text-[#FF6600]" />, // Represents a full truck for FTL
      title: "Full Truckload(FTL)",
      description:
        "Full Truckload (FTL) shipping is an ideal solution for transporting shipments that occupy an entire freight trailer (typically 8’–8.5’ wide, 12.5’–13.5’ high, and 40’–53’ long) or when a dedicated trailer is required for your goods. Choosing FTL provides greater control over routing and scheduling compared to Less Than Truckload (LTL) shipping, ensuring efficiency, security, and reliability for your freight.",
      features: [],
      cta: "Learn More About FTL",
      delay: 0.6,
      iconDelay: 1.0,
      featureDelay: 0.8,
    },
    {
      icon: <Layers className="h-10 w-10 text-[#FF6600]" />, // Represents flatbed layers for flatbed trucking
      title: "Flat Bed Trucking Service",
      description:
        "Flatbed trucks offer an efficient solution for the easy loading and unloading of cargo. They are particularly suited for transporting shipping containers, vehicles, and other weather-resistant materials. Commonly utilized by industries such as construction and agriculture, flatbed trucking services provide a reliable method for moving oversized machinery, building materials, and other large goods safely and efficiently.",
      features: [],
      cta: "Explore Flat Bed Options",
      delay: 0.8,
      iconDelay: 0.9,
      featureDelay: 1.0,
    },
    {
      icon: <Thermometer className="h-10 w-10 text-[#FF6600]" />, // Represents temperature control for reefer trucks
      title: "Refrigerated Trucks(Reefer Trucks)",
      description:
        "Our temperature-controlled trucking services ensure the safe transport of perishable goods like produce, meats, cheeses, fish, poultry, and pharmaceutical or chemical products. These specialized trucks maintain precise control over temperature and humidity, with advanced monitoring and tracking for added security. We offer reliable Full Truckload (FTL) and Less Than Truckload (LTL) options, providing efficient and secure solutions for your transport needs.",
      features: [],
      cta: "Learn About Reefer Trucks",
      delay: 1.0,
      iconDelay: 1.1,
      featureDelay: 1.2,
    },
    {
      icon: <Clock className="h-10 w-10 text-[#FF6600]" />, // Represents speed for expedited trucking
      title: "Expedited Trucking Service",
      description:
        "Our Straight Truck Delivery Service offers a reliable and efficient solution for transporting cargo swiftly from Point A to Point B, regardless of time or location. Ideal for shipments that are too large or delicate for air freight, this service ensures that your goods reach their destination quickly and securely. Whether you need expedited delivery for time-sensitive shipments or fragile items, our service provides the speed and care required for successful delivery.",
      features: [],
      cta: "Learn About Expedited Options",
      delay: 1.2,
      iconDelay: 1.3,
      featureDelay: 1.4,
    },
    {
      icon: <Package className="h-10 w-10 text-[#FF6600]" />,
      title: "Express Delivery",
      description:
        "When time is of the essence, our express delivery service ensures your shipments reach their destination as quickly as possible. We offer expedited shipping options to meet your urgent delivery needs.",
      features: [
        "Same-day delivery options for local shipments",
        "Overnight delivery for longer distances",
        "Priority handling and expedited processing",
        "Dedicated vehicles for time-critical shipments",
      ],
      cta: "Learn About Express Options",
      delay: 0.6,
      iconDelay: 0.7,
      featureDelay: 0.8,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Logistics services"
            fill
            className="object-cover opacity-30"
          /> */}
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Logistics Services
          </h1>
          <AnimatedSection delay={1.3}>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive transportation and logistics solutions tailored to
              your business needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              At RAM Trucking Group, we offer a wide range of logistics services
              designed to meet the diverse needs of businesses across
              industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                delay={service.delay}
                className="bg-[#F2F2F2] p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <AnimatedIcon delay={service.iconDelay} className="mr-4">
                    {service.icon}
                  </AnimatedIcon>
                  <h3 className="text-2xl font-bold text-[#003366]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#333333] mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: service.featureDelay + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/contact" scroll={true}>
                  <AnimatedButton className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white">
                    {service.cta}
                  </AnimatedButton>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Industries We Serve
            </h2>

            <AnimatedSection delay={0.5}>
              <p className="text-[#333333] max-w-2xl mx-auto">
                Our logistics solutions are tailored to meet the specific needs
                of various industries, providing specialized services for each
                sector.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: "Manufacturing",
                description:
                  "Just-in-time delivery and supply chain solutions for manufacturers of all sizes.",
              },
              {
                industry: "Retail",
                description:
                  "Distribution and fulfillment services to keep your stores stocked and customers satisfied.",
              },
              {
                industry: "E-commerce",
                description:
                  "Fast, reliable shipping solutions to meet the demands of online retail.",
              },
              {
                industry: "Food & Beverage",
                description:
                  "Temperature-controlled transport for perishable goods and food products.",
              },
              {
                industry: "Pharmaceuticals",
                description:
                  "Secure, compliant transportation for sensitive medical supplies and pharmaceuticals.",
              },
              {
                industry: "Construction",
                description:
                  "Heavy equipment and building materials transport for construction projects.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#003366] mb-2">
                  {item.industry}
                </h3>
                <p className="text-[#333333]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Streamline Your Logistics?
          </h2>

          <AnimatedSection delay={0.3}>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contact us today to discuss how our services can be tailored to
              your specific needs.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" scroll={true}>
                <AnimatedButton className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 text-lg">
                  Request a Quote
                </AnimatedButton>
              </Link>
              <Link href="/contact" scroll={true}>
                <AnimatedButton
                  variant="outline"
                  className="border-white text-black hover:text-[#003366] px-8 py-6 text-lg"
                >
                  Contact Our Team
                </AnimatedButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
