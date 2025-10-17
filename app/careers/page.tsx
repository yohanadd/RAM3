"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Award,
  Heart,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { AnimatedCard } from "@/components/ui/animated-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import { delay, motion } from "framer-motion";

export default function Careers() {
  const [filter, setFilter] = useState<string | null>(null);

  const jobListings = [
    {
      title: "CDL Truck Driver",
      location: "Nationwide",
      type: "Full-time",
      department: "Operations",
      applyLink:"https://account.neweratitans.com/apply/MjE5NA==",
      description:
        "We're looking for experienced CDL drivers to join our growing fleet. You'll be responsible for safely transporting goods across the country while representing our company with professionalism.",
      requirements: [
        "Valid Commercial Driver's License (CDL-A)",
        "Minimum 2 years of driving experience",
        "Clean driving record",
        "Ability to pass DOT physical and drug screening",
        "Excellent communication skills",
      ],
    },
    {
      title: "Logistics Coordinator",
      location: "Nationwide",
      type: "Full-time",
      department: "Operations",
      applyLink:"https://account.neweratitans.com/apply/MjE5NA==",
      description:
        "As a Logistics Coordinator, you'll play a crucial role in ensuring the efficient movement of freight by coordinating with drivers, customers, and warehouse staff.",
      requirements: [
        "Bachelor's degree in logistics, supply chain, or related field preferred",
        "1-3 years of experience in logistics or transportation",
        "Strong organizational and multitasking abilities",
        "Excellent communication skills",
        "Proficiency in logistics software and MS Office",
      ],
    },
    // {
    //   title: "Warehouse Associate",
    //   location: "Multiple Locations",
    //   type: "Full-time",
    //   department: "Warehousing",
    //   description:
    //     "Join our warehouse team to help with receiving, storing, and shipping goods. You'll ensure accurate inventory management and efficient warehouse operations.",
    //   requirements: [
    //     "High school diploma or equivalent",
    //     "Previous warehouse experience preferred",
    //     "Ability to lift up to 50 lbs regularly",
    //     "Forklift certification a plus",
    //     "Attention to detail and safety-conscious mindset",
    //   ],
    // },
    {
      title: "Fleet Maintenance Technician",
      location: "Nationwide",
      type: "Full-time",
      department: "Maintenance",
      applyLink:"https://account.neweratitans.com/apply/MjE5NA==",
      description:
        "Help keep our fleet in top condition by performing regular maintenance and repairs on our trucks and trailers.",
      requirements: [
        "Technical certification in automotive or diesel mechanics",
        "2+ years experience in truck/trailer maintenance",
        "Knowledge of DOT regulations",
        "Valid driver's license",
        "Ability to work flexible hours including some weekends",
      ],
    },
    // {
    //   title: "Customer Service Representative",
    //   location: "Remote",
    //   type: "Full-time",
    //   department: "Customer Service",
    //   description:
    //     "Provide exceptional support to our clients by addressing inquiries, resolving issues, and ensuring a positive customer experience.",
    //   requirements: [
    //     "High school diploma or equivalent",
    //     "1+ years of customer service experience",
    //     "Excellent communication and problem-solving skills",
    //     "Ability to work in a fast-paced environment",
    //     "Experience with CRM software preferred",
    //   ],
    // },
    // {
    //   title: "Sales Representative",
    //   location: "Multiple Locations",
    //   type: "Full-time",
    //   department: "Sales",
    //   description:
    //     "Drive company growth by identifying and pursuing new business opportunities while maintaining relationships with existing clients.",
    //   requirements: [
    //     "Bachelor's degree in business or related field preferred",
    //     "2+ years of sales experience, preferably in logistics or transportation",
    //     "Strong negotiation and relationship-building skills",
    //     "Self-motivated with ability to work independently",
    //     "Willingness to travel occasionally",
    //   ],
    // },
  ];

  const filteredJobs = filter
    ? jobListings.filter((job) => job.department === filter)
    : jobListings;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Careers at RAM Trucking Group"
            fill
            className="object-cover opacity-30"
          /> */}
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <AnimatedSection delay={1.3}>
            <p className="text-xl max-w-3xl mx-auto">
              Build your career with a company that values innovation, teamwork,
              and excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Why Work With Us
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              At RAM Trucking Group, we believe our people are our greatest
              asset. Here's why you should consider joining our team:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="h-10 w-10 text-[#FF6600]" />,
                delay: 0.8,
                title: "Collaborative Culture",
                description:
                  "Join a team that values collaboration, respect, and open communication.",
              },
              {
                icon: <Award className="h-10 w-10 text-[#FF6600]" />,
                delay: 1.6,
                title: "Professional Growth",
                description:
                  "We invest in our employees through training, mentorship, and advancement opportunities.",
              },
              {
                icon: <Heart className="h-10 w-10 text-[#FF6600]" />,
                delay: 2.4,
                title: "Comprehensive Benefits",
                description:
                  "Enjoy competitive pay, health insurance, retirement plans, and paid time off.",
              },
              // {
              //   icon: <Zap className="h-10 w-10 text-[#FF6600]" />,
              //   delay: 3.2,
              //   title: "Innovation & Impact",
              //   description:
              //     "Be part of a forward-thinking company making a real difference in the logistics industry.",
              // },
              {
                icon: <Briefcase className="h-10 w-10 text-[#FF6600]" />,
                delay: 4.0,
                title: "Driver Benefits",
                description: `48c Starting Pay, Paid Vacation, Medical/Dental, Safety Bonuses, Newer Equipment, 2700+ Miles Weekly, Weekly Home Times
                `,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#F2F2F2] p-6 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <AnimatedIcon delay= {benefit.delay} className="mr-4">{benefit.icon}</AnimatedIcon>
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#333333] whitespace-pre-line">{benefit.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Current Openings
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Explore our available positions and find the perfect fit for your
              skills and career goals.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full ${
                !filter
                  ? "bg-[#003366] text-white"
                  : "bg-white text-[#333333] hover:bg-[#99CCFF]"
              }`}
            >
              All Departments
            </button>
            <button
              onClick={() => setFilter("Operations")}
              className={`px-4 py-2 rounded-full ${
                filter === "Operations"
                  ? "bg-[#003366] text-white"
                  : "bg-white text-[#333333] hover:bg-[#99CCFF]"
              }`}
            >
              Operations
            </button>
            <button
              onClick={() => setFilter("Warehousing")}
              className={`px-4 py-2 rounded-full ${
                filter === "Warehousing"
                  ? "bg-[#003366] text-white"
                  : "bg-white text-[#333333] hover:bg-[#99CCFF]"
              }`}
            >
              Warehousing
            </button>
            <button
              onClick={() => setFilter("Maintenance")}
              className={`px-4 py-2 rounded-full ${
                filter === "Maintenance"
                  ? "bg-[#003366] text-white"
                  : "bg-white text-[#333333] hover:bg-[#99CCFF]"
              }`}
            >
              Maintenance
            </button>
            <button
              onClick={() => setFilter("Customer Service")}
              className={`px-4 py-2 rounded-full ${
                filter === "Customer Service"
                  ? "bg-[#003366] text-white"
                  : "bg-white text-[#333333] hover:bg-[#99CCFF]"
              }`}
            >
              Customer Service
            </button>
            <button
              onClick={() => setFilter("Sales")}
              className={`px-4 py-2 rounded-full ${
                filter === "Sales"
                  ? "bg-[#003366] text-white"
                  : "bg-white text-[#333333] hover:bg-[#99CCFF]"
              }`}
            >
              Sales
            </button>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#003366]">
                      {job.title}
                    </h3>
                    <p className="text-[#FF6600]">{job.department}</p>
                  </div>
                  <Link href={job.applyLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white mt-4 md:mt-0">
                    Apply Now
                  </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm text-[#333333]">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-[#333333]">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-[#333333]">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.department}
                  </div>
                </div>

                <p className="text-[#333333] mb-4">{job.description}</p>

                <div>
                  <h4 className="font-bold text-[#003366] mb-2">
                    Requirements:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="text-[#333333]">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Our Application Process
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Here's what to expect when you apply for a position at RAM
              Trucking Group.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#F2F2F2] md:left-1/2 md:-ml-0.5"></div>

              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Application Submission",
                    description:
                      "Submit your application through our online portal, including your resume and cover letter.",
                  },
                  {
                    step: 2,
                    title: "Initial Screening",
                    description:
                      "Our HR team reviews applications and conducts initial phone interviews with qualified candidates.",
                  },
                  {
                    step: 3,
                    title: "In-depth Interview",
                    description:
                      "Selected candidates are invited for in-person or virtual interviews with the hiring manager and team members.",
                  },
                  {
                    step: 4,
                    title: "Assessment",
                    description:
                      "Depending on the role, you may be asked to complete a skills assessment or job-specific test.",
                  },
                  {
                    step: 5,
                    title: "Offer & Onboarding",
                    description:
                      "Successful candidates receive a job offer, followed by a comprehensive onboarding process.",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div
                      className={`absolute left-8 -ml-0.5 mt-1.5 h-8 w-8 rounded-full border-4 border-white bg-[#FF6600] text-white flex items-center justify-center font-bold md:left-1/2`}
                    >
                      {step.step}
                    </div>

                    <div
                      className={`ml-20 md:ml-0 ${
                        index % 2 === 0
                          ? "md:mr-[50%] md:pr-8 md:text-right"
                          : "md:ml-[50%] md:pl-8"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#003366] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#333333] mb-4">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      {/* <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">
              Employee Testimonials
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Hear from our team members about their experiences working at RAM
              Trucking Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I've been driving for RAM Trucking Group for over 5 years, and it's the best company I've worked for in my 15-year career. They truly care about their drivers' wellbeing and provide the support we need on the road.",
                name: "Michael Johnson",
                position: "CDL Driver",
                years: "5 years with RAM Trucking Group",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The growth opportunities here are incredible. I started as a logistics coordinator and have been promoted twice in three years. The company invests in employee development and recognizes hard work.",
                name: "Sarah Williams",
                position: "Operations Manager",
                years: "3 years with RAM Trucking Group",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "What I appreciate most about working at RAM Trucking Group is the collaborative environment. Everyone from warehouse staff to executives works together to solve problems and deliver for our customers.",
                name: "David Chen",
                position: "Warehouse Supervisor",
                years: "4 years with RAM Trucking Group",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#FF6600] text-4xl font-serif mb-4">"</div>
                <p className="text-[#333333] mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#003366]">
                      {testimonial.name}
                    </p>
                    <p className="text-[#333333] text-sm">
                      {testimonial.position}
                    </p>
                    <p className="text-[#333333] text-xs">
                      {testimonial.years}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
              <p className="max-w-2xl mx-auto">
                If you have questions about our open positions or the
                application process, feel free to reach out to our HR team.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Question about job application"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="w-full min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white w-full py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-[#333333] max-w-2xl mx-auto mb-8">
            Explore our current openings and take the first step toward a
            rewarding career with RAM Trucking Group.
          </p>
          <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 text-lg">
            View All Job Openings
          </Button>
        </div>
      </section>
    </div>
  );
}
