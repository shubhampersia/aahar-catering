"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function CTAForm() {
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());

  // merge first + last name
  data.name = `${data.firstName || ""} ${data.lastName || ""}`.trim();

  try {
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent! We'll get back to you soon.");
      form.reset();
    } else {
      const err = await res.json();
      alert("Failed to send: " + (err.error || "Unknown error"));
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <section id="cta-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#c68c2e] mb-4">
            GET IN TOUCH
            <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto"></div>
          </h2>
        </div>

        {/* 2-col layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                    className="rounded-lg h-12 text-base"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    className="rounded-lg h-12 text-base"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="rounded-lg h-12 text-base"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="rounded-lg h-12 text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Event type or inquiry"
                  className="rounded-lg h-12 text-base"
                  required
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={8}
                  placeholder="Please provide detailed information about your event including: event date and time, number of guests expected, type of event (corporate meeting, wedding, conference, etc.), preferred cuisine or dietary requirements, budget range, venue location, specific services needed (catering only, full event management, bar services, etc.), any special requests or themes, and any other relevant details that will help us create the perfect experience for you..."
                  className="rounded-lg text-base flex-1 min-h-[200px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#c68c2e] hover:bg-[#c48621] text-white rounded-lg py-4 text-lg font-semibold mt-auto"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information + Map */}
          {/* Contact Information + Map */}
          <div className="flex flex-col h-full justify-between">
            {/* Card: contact & map */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Get in Touch
                </h3>
              </div>

              {/* Equal-height columns */}
              <div className="grid lg:grid-cols-2 gap-8 h-full">
                {/* Contact Info */}
                <div className="space-y-6 h-full">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-[#c68c2e] flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-lg">Phone</p>
                      <p className="text-gray-600 text-lg">
                        +91-9916033133, <br /> +91-9916033533
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-[#c68c2e] flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-lg">Email</p>
                      <p className="text-gray-600 text-lg">sales@ahar.co.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-[#c68c2e] flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-lg">
                        Address
                      </p>
                      <p className="text-gray-600 text-lg">
                        #20/1, Sharada Layout 3rd Cross Road, Raja Rajeshwari
                        Nagar, Bengaluru - 560098
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map (responsive aspect ratio) */}
                <div className="h-[80%]">
                  <div
                    className="
            relative w-full rounded-2xl overflow-hidden bg-gray-200
            ring-1 ring-gray-200
            aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]
            mb-6            /* 👈 gives breathing room at the bottom */
          "
                  >
                    <iframe
                      className="absolute inset-0 w-full h-full block"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.854431929819!2d77.50366671074131!3d12.917076016018571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f02c282a6e1%3A0x8889bd67075fd856!2sSharada%20Layout%203rd%20Cross%20Rd%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e0!3m2!1sen!2sin!4v1755804615948!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Our Location"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mt-6">
              {/* 👈 was mt-3 */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900 text-lg">
                    Monday - Friday:
                  </span>
                  <span className="text-gray-600 text-lg">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900 text-lg">
                    Saturday:
                  </span>
                  <span className="text-gray-600 text-lg">
                    9:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900 text-lg">
                    Sunday:
                  </span>
                  <span className="text-gray-600 text-lg">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* /Contact Information + Map */}
        </div>
      </div>
    </section>
  );
}
