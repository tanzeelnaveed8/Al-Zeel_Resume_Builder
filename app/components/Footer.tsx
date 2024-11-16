import { MailIcon } from "@heroicons/react/solid";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import React Icons

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-10 mt-12 text-gray-400">
            <div className="max-w-6xl mx-auto px-4">
                {/* Upper Footer Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {/* Job Seekers & Career Resources */}
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Job Seekers & Career Resources</h3>
                        <p className="text-sm">
                            Access powerful tools to create standout resumes and gain insights to advance your career. 
                            Our resources are designed to help you achieve your professional goals.
                        </p>
                    </div>

                    {/* Company Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Our Company Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#about" className="hover:text-yellow-500 transition">About Us</a>
                            </li>
                            <li>
                                <a href="#help" className="hover:text-yellow-500 transition">Help & Support</a>
                            </li>
                            <li>
                                <a href="#privacy" className="hover:text-yellow-500 transition">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Connect With Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center space-x-2">
                                <FaLinkedin className="text-yellow-500 h-5 w-5 transition hover:text-yellow-400" />
                                <a
                                    href="https://linkedin.com/in/tanzeel-naveed-660491312"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-yellow-500 transition"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaInstagram className="text-yellow-500 h-5 w-5 transition hover:text-yellow-400" />
                                <a
                                    href="https://www.instagram.com/tanzeel_702/profilecard/?igsh=Z2dneHFpdW44bjJr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-yellow-500 transition"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MailIcon className="text-yellow-500 h-5 w-5 transition hover:text-yellow-400" />
                                <a
                                    href="mailto:tanzeelnaveed8@gmail.com"
                                    className="hover:text-yellow-500 transition"
                                >
                                    Email Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-6"></div>

                {/* Lower Footer Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left */}
                    <p className="text-sm">
                        Created with 💻 by <span className="text-yellow-500">Tanzeel Naveed Khan</span>
                    </p>

                    {/* Right */}
                    <p className="text-sm mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
