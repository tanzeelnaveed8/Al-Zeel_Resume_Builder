import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } else {
            alert('There was an error sending your message.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-black p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="name" className="block text-sm text-gray-300">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 bg-gray-600 text-white rounded-lg focus:outline-none"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm text-gray-300">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 bg-gray-600 text-white rounded-lg focus:outline-none"
                        placeholder="Enter your email"
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
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-600 text-white rounded-lg focus:outline-none"
                    placeholder="Write your message here"
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
    );
}
