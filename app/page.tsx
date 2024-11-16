import Link from "next/link"; 
import Navbar from "@/app/components/Navbar";
import ReviewSection from "@/app/reviews/page";
import ResumeSamples from "@/app/components/ResumeSamples";
import Footer from "@/app/components/Footer";
import Slideshow from "./components/slides";
import BenefitSection from "./components/BenefitSection";
import FeaturesSection from "./features/page";
import { DocumentTextIcon, PencilAltIcon } from '@heroicons/react/solid';

export default function Home() {
  return (
    <div className="text-black min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section with Slideshow at the Top and Content Below */}
      <section className="relative w-full pt-16 pb-16 bg-gray-100">
        {/* Slideshow */}
        <div className="w-full max-w-screen-xl mx-auto mb-10">
          <Slideshow />
        </div>

        {/* Text and Buttons Below the Slideshow */}
        <div className="text-center px-8">
          <h1 className="text-3xl font-extrabold text-yellow-500 mb-6">
            Unlock Your Dream Job with the Perfect Resume
          </h1>

          {/* Motivational Subheading */}
          <h2 className="text-lg font-medium text-gray-700 mb-8">
            Stand out from the crowd. Our resume builder creates professional, eye-catching resumes that get noticed by employers.
          </h2>

          {/* Horizontal Lines */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex-grow border-t border-gray-400"></div>
            <p className="text-gray-500 font-semibold">Start building your future</p>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 justify-center mb-8">
            {/* Link to View Resume Page */}
            <Link href="/veiwresume.pdf">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:from-blue-800 hover:to-blue-600 transition duration-200 ease-in-out">
                <DocumentTextIcon className="h-5 w-5" />
                <span>View Resume</span>
              </button>
            </Link>

            {/* Link to Create Resume Page */}
            <Link href="/createresume">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-3 font-semibold rounded-lg shadow-lg hover:from-yellow-600 hover:to-yellow-500 transition duration-200 ease-in-out">
                <PencilAltIcon className="h-5 w-5" />
                <span>Create Resume</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-8 space-y-12">
        <BenefitSection />
        <ReviewSection />
        <ResumeSamples />
        <FeaturesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
