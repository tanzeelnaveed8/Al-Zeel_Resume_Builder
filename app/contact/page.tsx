'use client'
import { useState } from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form after submission
        } else {
            alert('Failed to send message');
        }
    };

    return (
        <section id="contact" className="bg-white py-20 text-gray-300">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-12">
                    Get in Touch with Us
                </h2>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Contact Item 1 - Email */}
                    <div className="flex items-center space-x-4 bg-black p-6 rounded-lg hover:bg-gray-600 transition">
                        <MailIcon className="h-8 w-8 text-yellow-500" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Email Us</h3>
                            <p className="text-sm">Get in touch with us via email for any inquiries.</p>
                            <a href="mailto:tanzeelnaveed8@gmail.com" className="text-yellow-400 hover:underline mt-2 block">
                                tanzeelnaveed8@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Contact Item 2 - Phone */}
                    <div className="flex items-center space-x-4 bg-black p-6 rounded-lg hover:bg-gray-600 transition">
                        <PhoneIcon className="h-8 w-8 text-yellow-500" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Call Us</h3>
                            <p className="text-sm">Speak directly to our support team for assistance.</p>
                            <a href="tel:+923202834184" className="text-yellow-400 hover:underline mt-2 block">
                                +92 (320) 2834-184
                            </a>
                        </div>
                    </div>

                    {/* Contact Item 3 - Location */}
                    <div className="flex items-center space-x-4 bg-black p-6 rounded-lg hover:bg-gray-600 transition">
                        <LocationMarkerIcon className="h-8 w-8 text-yellow-500" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">Visit Us</h3>
                            <p className="text-sm">Come visit our office for more information.</p>
                            <p className="text-yellow-400 mt-2">Karachi, Pakistan</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-center text-yellow-500 mb-6">
                        Or Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-black p-8 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-300">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 mt-2 bg-gray-600 text-white rounded-lg focus:outline-none"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-300">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 mt-2 bg-gray-600 text-white rounded-lg focus:outline-none"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-300">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full p-3 mt-2 bg-gray-600 text-white rounded-lg focus:outline-none"
                                placeholder="Write your message here"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 w-full bg-yellow-500 text-black py-3 font-semibold rounded-lg hover:bg-yellow-600 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
