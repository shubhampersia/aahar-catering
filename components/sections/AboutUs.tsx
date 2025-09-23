import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <Image
              src="/aboutusPic.jpg"
              alt="Chef cooking"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold text-[#c68c2e] mb-4">
              ABOUT US
              <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto md:mx-0"></div>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              At Ahar Hospitality Services, we provide top-tier catering and
              event management for businesses of all sizes, from large
              corporations to dynamic startups. We are all about delivering
              quality, consistency, and unforgettable experiences. Whether it's
              corporate catering or a fully customised event, we're here to make
              your next gathering smooth, successful, and truly memorable.
            </p>
            <Button
              asChild
              className="bg-[#c68c2e] hover:bg-[#c48621] text-white rounded-lg px-12 py-6 text-lg"
            >
              <Link href="/about-us">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
