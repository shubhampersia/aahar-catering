"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function CTAForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would implement the email sending functionality
    // For now, we'll just show an alert
    alert("Message sent! We'll get back to you soon.")
  }

  return (
    <section id="cta-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            GET IN TOUCH
            <div className="w-20 h-1 bg-orange-500 mt-2 mx-auto"></div>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Your first name"
                    className="rounded-lg h-12 text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" type="text" placeholder="Your last name" className="rounded-lg h-12 text-base" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="rounded-lg h-12 text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="rounded-lg h-12 text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Event type or inquiry"
                  className="rounded-lg h-12 text-base"
                  required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  rows={8}
                  placeholder="Please provide detailed information about your event including: event date and time, number of guests expected, type of event (corporate meeting, wedding, conference, etc.), preferred cuisine or dietary requirements, budget range, venue location, specific services needed (catering only, full event management, bar services, etc.), any special requests or themes, and any other relevant details that will help us create the perfect experience for you..."
                  className="rounded-lg text-base flex-1 min-h-[200px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-4 text-lg font-semibold mt-auto"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 flex flex-col h-full">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-orange-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 text-lg mb-1">Phone</p>
                    <p className="text-gray-600 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-orange-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 text-lg mb-1">Email</p>
                    <p className="text-gray-600 text-lg">info@bricksbywall.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-orange-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 text-lg mb-1">Address</p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      123 Construction Ave,
                      <br />
                      Builder City, BC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Office Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 text-lg">Monday - Friday:</span>
                  <span className="text-gray-600 text-lg">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 text-lg">Saturday:</span>
                  <span className="text-gray-600 text-lg">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 text-lg">Sunday:</span>
                  <span className="text-gray-600 text-lg">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
