"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUsPage() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the email sending functionality to simplecoder007@gmail.com
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#c68c2e] mb-4">
            GET IN TOUCH
            <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to make your next event unforgettable? Get in touch with us
            today and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-lg font-medium text-gray-700 mb-3"
                    >
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      className="rounded-lg h-14 text-lg border-2 border-gray-200 focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-lg font-medium text-gray-700 mb-3"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      className="rounded-lg h-14 text-lg border-2 border-gray-200 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700 mb-3"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="rounded-lg h-14 text-lg border-2 border-gray-200 focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-medium text-gray-700 mb-3"
                    >
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="rounded-lg h-14 text-lg border-2 border-gray-200 focus:border-orange-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium text-gray-700 mb-3"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Event type or inquiry topic"
                    className="rounded-lg h-14 text-lg border-2 border-gray-200 focus:border-orange-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-3"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={8}
                    placeholder="Please provide details about your event including date, number of guests, type of event, specific requirements, dietary preferences, budget range, and any other relevant information that will help us serve you better..."
                    className="rounded-lg text-lg border-2 border-gray-200 focus:border-orange-500 resize-none"
                    required
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-[#c68c2e] hover:bg-[#c48621] text-white rounded-lg px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col h-full justify-between">
              {/* Contact Details and Map */}
              <div className="bg-white rounded-2xl shadow-xl p-8 flex-1 overflow-hidden">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Get in Touch
                  </h3>
                  <h4 className="text-2xl font-bold text-gray-900">Find Us</h4>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 h-full">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-4 text-[#c68c2e] flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-lg">
                          Phone
                        </p>
                        <p className="text-gray-600 text-lg">
                          +91-9916033133, <br /> +91-9916033533
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-4 text-[#c68c2e] flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-lg">
                          Email
                        </p>
                        <p className="text-gray-600 text-lg">
                          sales@ahar.co.in
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-4 text-[#c68c2e] flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-lg">
                          Address
                        </p>
                        <p className="text-gray-600 text-lg">
                          #20/1, Sharada Layout 3rd Cross Road, Raja Rajeshwaro
                          Nagar, Bengaluru - 560098
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Google Map */}
                  <div className="flex flex-col min-h-0">
                    <div className="bg-gray-200 rounded-lg overflow-hidden flex-1 min-h-[200px] max-h-[300px] w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.854431929819!2d77.50366671074131!3d12.917076016018571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f02c282a6e1%3A0x8889bd67075fd856!2sSharada%20Layout%203rd%20Cross%20Rd%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e0!3m2!1sen!2sin!4v1755804615948!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mt-3">
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
          </div>
        </div>
      </section>
    </div>
  );
}
