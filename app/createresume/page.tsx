'use client'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    profession: '',
    professionDescription: '',
    photo: null as File | null,
    languages: '',
    religion: '',
    maritalStatus: '',
    workExperience: '',
    softSkills: '',
    education: '',
    profileSummary: '',
    technicalSkills: '',
  });

  const [photoPreview, setPhotoPreview] = useState<string | undefined>(undefined);
  const [showResume, setShowResume] = useState(false); // To control when to show the resume preview

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prevData => ({
        ...prevData,
        photo: file,
      }));

      // Generate preview of the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string); // Set the preview after file is read
      };
      reader.readAsDataURL(file); // Convert file to Data URL
    }
  };

  const handlePreview = (event: React.FormEvent) => {
    event.preventDefault();
    setShowResume(true); // Show the resume preview after clicking "Preview"
  };

  const handleSavePDF = () => {
    const resumeElement = document.querySelector('.resume-preview') as HTMLElement;

    if (resumeElement) {
      const doc = new jsPDF('p', 'mm', 'a4'); // Define page size as A4

      // Calculate scaling factor to fit content on one page
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const contentWidth = resumeElement.offsetWidth;
      const contentHeight = resumeElement.offsetHeight;

      // Calculate scale to fit content to one page
      const scaleX = pageWidth / contentWidth;
      const scaleY = pageHeight / contentHeight;
      const scale = Math.min(scaleX, scaleY); // Ensure content fits both horizontally and vertically

      // Use the calculated scale when rendering the content
      doc.html(resumeElement, {
        callback: (doc) => {
          doc.save('resume.pdf'); // Save the generated PDF
        },
        margin: [10, 10], // Add margins
        html2canvas: {
          scale: 0.3, // Use the calculated scale
        },
        x: 5, // Horizontal offset from the left
        y: 10, // Vertical offset from the top
      });
    }
  };
  const handleSaveImage = () => {
    const resumeElement = document.querySelector('.resume-preview') as HTMLElement; // Type assertion
    if (resumeElement) {
      html2canvas(resumeElement).then((canvas) => {
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'resume.png';
        link.click();
      });
    }
  };


  const handleEditResume = () => {
    setShowResume(false); // Reset to the form view to edit the resume
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg pt-32">
      {!showResume ? (
        <>
          <h2 className="text-xl font-bold text-gray-700 mb-4">Professional Resume Form</h2>

          {/* Profile Photo Upload */}
          <div className="mb-4">
            <label htmlFor="photo" className="block font-bold mb-2">Profile Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
            {/* Photo Preview */}
            {photoPreview && (
              <div className="mt-4 flex justify-center">
                <img
                  src={photoPreview}
                  alt="Profile Preview"
                  className="w-32 h-32 object-cover rounded-full border-2 border-yellow-500"
                />
              </div>
            )}
          </div>

          {/* Form Fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profession" className="block font-bold mb-2">Profession</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="professionDescription" className="block font-bold mb-2">About Profession</label>
            <input
              type="text"
              id="professionDescription"
              name="professionDescription"
              value={formData.professionDescription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dob" className="block font-bold mb-2">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Languages */}
          <div className="mb-4">
            <label htmlFor="languages" className="block font-bold mb-2">Languages</label>
            <input
              type="text"
              id="languages"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Religion */}
          <div className="mb-4">
            <label htmlFor="religion" className="block font-bold mb-2">Religion</label>
            <input
              type="text"
              id="religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Marital Status */}
          <div className="mb-4">
            <label htmlFor="maritalStatus" className="block font-bold mb-2">Marital Status</label>
            <input
              type="text"
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Work Experience */}
          <div className="mb-4">
            <label htmlFor="workExperience" className="block font-bold mb-2">Work Experience</label>
            <textarea
              id="workExperience"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={11}
            />
          </div>

          {/* Education */}
          <div className="mb-4">
            <label htmlFor="education" className="block font-bold mb-2">Education</label>
            <textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Profile Summary */}
          <div className="mb-4">
            <label htmlFor="profileSummary" className="block font-bold mb-2">Profile Summary</label>
            <textarea
              id="profileSummary"
              name="profileSummary"
              value={formData.profileSummary}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Technical Skills */}
          <div className="mb-4">
            <label htmlFor="technicalSkills" className="block font-bold mb-2">Technical Skills</label>
            <textarea
              id="technicalSkills"
              name="technicalSkills"
              value={formData.technicalSkills}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Soft Skills */}
          <div className="mb-4">
            <label htmlFor="softSkills" className="block font-bold mb-2">Soft Skills</label>
            <textarea
              id="softSkills"
              name="softSkills"
              value={formData.softSkills}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Preview Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handlePreview}
              className="bg-yellow-500 text-white px-6 py-2 rounded shadow-md hover:bg-yellow-600"
            >
              Preview Resume
            </button>
          </div>
        </>
      ) : (
        /* Resume Preview */
        <div className="resume-preview max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="bg-yellow-600 text-white p-8 rounded-t-lg mb-8">
            {/* Name and Photo Section with Blue Background */}
            <div className="flex justify-between items-center">
              {/* Profile Photo */}
              {photoPreview && (
                <img
                  src={photoPreview}
                  alt="Profile Photo"
                  className="w-24 h-24 object-cover rounded-full mr-6"
                />
              )}
              {/* Name and Contact Info */}
              <div>
                <h1 className="text-4xl font-bold font-serif ">{formData.name}</h1>
                <p>{formData.profession}</p>
                <p className="text-lg text-gray-200 mt-1">{formData.professionDescription}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Profile Summary, Work Experience, and Education */}

            <div>
              <h2 className="text-2xl font-bold text-gray-700  mb-4">Personal Details</h2>
              <p>
                <>{formData.email}</><br />
                <>{formData.phone}</><br />
                <>{formData.dob}</><br />
                <>{formData.religion}</><br />
                <>{formData.maritalStatus}</>
              </p>
              <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Education</h2>
              <p className="text-gray-600">{formData.education}</p>
              <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Soft Skills</h2>
              <p className="text-gray-600">{formData.softSkills}</p>

              <h2 className="text-2xl font-bold text-gray-700 mb-4">Technical Skills</h2>
              <p className="text-gray-600">{formData.technicalSkills}</p>

              <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Languages</h2>
              <p className="text-gray-600">{formData.languages}</p>




            </div>

            {/* Right Column: Skills, Languages, Religion, and Marital Status */}
            <div>

              <h2 className="text-2xl font-bold text-gray-700 mb-4">Profile Summary</h2>
              <p className="text-gray-600">{formData.profileSummary}</p>


              <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Work Experience</h2>
              <p className="text-gray-600">{formData.workExperience}</p>


            </div>
          </div>

        </div>

      )}
      {/* Actions */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handleSavePDF}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Save as PDF
        </button>
        <button
          onClick={handleSaveImage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save as Image
        </button>
        <button
          onClick={handleEditResume}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Edit Resume
        </button>

      </div>
    </div>
  );
}
