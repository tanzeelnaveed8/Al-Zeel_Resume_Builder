export default function ResumeSample() {
  const images = [
    "/cv1.webp",
    "/cv2.jpg",
    "/cv3.png",
  ];

  return (
    <section className="max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8 text-center bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-900">
        Samples Of Resumes
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Explore these sample resumes to get an idea of how to showcase your skills and experience in the most professional way.
      </p>

      {/* Resume Samples Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <img
              src={image}
              alt={`Resume Sample ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
