import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const BenefitSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Why Choose Our Resume Builder?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* First Benefit */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faBolt} className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              40% More Likely to Get Hired
            </h3>
            <p className="text-gray-600">
              Stand out to recruiters with professional, optimized resume templates.
            </p>
          </div>

          {/* Second Benefit */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faDollarSign} className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              10% Better Pay with Your Next Job
            </h3>
            <p className="text-gray-600">
              Get noticed by top employers and negotiate a higher salary with a standout resume.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
