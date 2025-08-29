import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/Ahar_Logo.svg"
              alt="ahar logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-600 mb-6">
              Where ingredients tell a story. From our kitchen to your table.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-500 hover:text-[#c68c2e] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#c68c2e] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-[#c68c2e]" />
                <span className="text-gray-600">
                  +91-9916033133, <br /> +91-9916033533
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-[#c68c2e]" />
                <span className="text-gray-600">sales@ahar.co.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-[#c68c2e]" />
                <span className="text-gray-600">
                  #20/1, Sharada Layout 3rd Cross Road, Raja Rajeshwaro Nagar,
                  Bengaluru - 560098
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="text-gray-500">© 2025 ahar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
