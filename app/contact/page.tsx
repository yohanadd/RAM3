"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatedCard } from "@/components/ui/animated-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion } from "framer-motion";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    subject: "",
    message: "",
    address: "RAMTRUCK"
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
  
    try {
      const response = await fetch("https://algonod.onrender.com/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          number: "",
          company: "",
          subject: "",
          message: "",
          address: "RAMTRUCK"
        });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Contact us"
            fill
            className="object-cover opacity-30"
          /> */}
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <AnimatedSection delay={1.3}>
            <p className="text-xl max-w-3xl mx-auto">
              We're here to answer your questions and provide the logistics
              solutions you need.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#F2F2F2] p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">
                Send Us a Message
              </h2>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Thank you for contacting RAM Trucking Group. We'll get back
                    to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setFormStatus("idle")}
                    className="bg-[#003366] hover:bg-[#003366]/90 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#333333] mb-1"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#333333] mb-1"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="number"
                        className="block text-sm font-medium text-[#333333] mb-1"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#333333] mb-1"
                      >
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#333333] mb-1"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#333333] mb-1"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white w-full py-6"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-6">
                Get in Touch
              </h2>
              <p className="text-[#333333] mb-8">
                Have questions about our services or need a quote? Our team is
                ready to assist you. Contact us through any of the methods below
                or fill out the form, and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#FF6600] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#003366] mb-1">
                      Our Headquarters
                    </h3>
                    <p className="text-[#333333]">
                      4409 EMDEN Street
                      <br />
                      Silver Spring, MD, 20906
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#FF6600] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#003366] mb-1">Phone</h3>
                    <p className="text-[#333333]">
                      Main: +1 (240) 4332947
                      <br />
                      Secondary: +1 (240) 7074513
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#FF6600] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#003366] mb-1">Email</h3>
                    <p className="text-[#333333]">
                      General Inquiries: tracking@ramtruckingroup.com
                      <br />
                      Customer Support: dispatch@ramtruckingroup.com
                      <br />
                      Careers: careers@ramtruckingroup.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#FF6600] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#003366] mb-1">
                      Business Hours
                    </h3>
                    <p className="text-[#333333]">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8">
                <h3 className="font-bold text-[#003366] mb-4">
                  Regional Offices
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F2F2F2] p-4 rounded-lg">
                    <h4 className="font-bold text-[#003366]">
                      West Coast Office
                    </h4>
                    <p className="text-[#333333] text-sm">
                      456 Pacific Highway
                      <br />
                      San Francisco, CA 94101
                      <br />
                      (555) 987-6543
                    </p>
                  </div>
                  <div className="bg-[#F2F2F2] p-4 rounded-lg">
                    <h4 className="font-bold text-[#003366]">
                      East Coast Office
                    </h4>
                    <p className="text-[#333333] text-sm">
                      789 Atlantic Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      (555) 345-6789
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Find Us</h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Our strategic locations allow us to serve customers efficiently
              across the country.
            </p>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Map location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-md">
                <h3 className="font-bold text-[#003366] mb-2">
                  RAM Trucking Group Headquarters
                </h3>
                <p className="text-[#333333]">
                  123 Logistics Way
                  <br />
                  Trucking City, TC 12345
                  <br />
                  United States
                </p>
                <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white mt-4">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How do I get a shipping quote?",
                answer:
                  "You can request a quote by filling out our contact form, calling our customer service line, or using the 'Get a Quote' button on our website. We'll respond with a detailed quote based on your specific needs.",
              },
              {
                question: "What areas do you service?",
                answer:
                  "We provide nationwide coverage across the United States, with international shipping capabilities to select countries. Our regional offices on both coasts allow us to efficiently serve customers throughout the country.",
              },
              {
                question: "How can I track my shipment?",
                answer:
                  "Once your shipment is in transit, you'll receive a tracking number that you can use on our website's tracking portal. We also provide regular updates via email or text message if you opt in for notifications.",
              },
              {
                question: "What types of goods do you transport?",
                answer:
                  "We transport a wide range of goods, including general freight, temperature-controlled items, hazardous materials (with proper certification), and oversized loads. Contact us for specific requirements for your cargo type.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-[#F2F2F2] p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#003366] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[#333333]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
