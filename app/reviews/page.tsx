import { UserCircleIcon, StarIcon } from "@heroicons/react/solid";

export default function ReviewSection() {
    const reviews = [
        {
            name: "Mehwish Khan",
            review: "This resume builder transformed my resume! It looks professional, and I received more interview calls than ever.",
            rating: 5,
        },
        {
            name: "Zulfiqar Ahmed",
            review: "Such an intuitive and easy-to-use tool! Saved me so much time, and the result was amazing.",
            rating: 4,
        },
        {
            name: "Sehrish",
            review: "The design options are top-notch, and the suggestions really helped me stand out to recruiters.",
            rating: 5,
        },
        {
            name: "Abdullah Amir",
            review: "Highly recommended! Simple, clean, and effective. Perfect for anyone looking to upgrade their resume.",
            rating: 4,
        },
    ];

    return (
      <section className="max-w-4xl mx-auto my-12 px-4 text-center pt-10">
        <h2 className="text-3xl font-bold mb-8 text-yellow-500">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <UserCircleIcon className="h-10 w-10 text-yellow-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-200">{review.name}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-3">{review.review}</p>
              
              {/* Star Ratings */}
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    className={`h-5 w-5 ${starIndex < review.rating ? "text-yellow-500" : "text-gray-400"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
