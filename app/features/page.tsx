import {
    LightBulbIcon,
    ShareIcon,
    DownloadIcon,
    DocumentTextIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    ThumbUpIcon, // Import the Thumb Icon
} from "@heroicons/react/solid";

export default function FeaturesSection() {
    const features = [
        {
            title: "Create Stunning Resumes",
            description: "With our online resume maker, you can select from professional templates, customize details, and stand out from the crowd.",
            icon: LightBulbIcon,
            iconColor: "text-yellow-400", // Custom color
        },
        {
            title: "Share & Download",
            description: "Easily share your resume or CV online or download it in multiple formats like PDF, ensuring you're always prepared.",
            icon: ShareIcon,
            iconColor: "text-white", // Custom color
        },
        {
            title: "Manage Multiple Resumes",
            description: "Create and manage multiple resumes tailored to different jobs, making your applications more targeted and effective.",
            icon: DocumentTextIcon,
            iconColor: "text-green-400", // Custom color
        },
        {
            title: "Track Your Results",
            description: "Get insights on how well your resume is performing and make data-driven improvements to enhance its impact.",
            icon: ChartBarIcon,
            iconColor: "text-purple-400", // Custom color
        },
        {
            title: "Feedback & Improvement",
            description: "Receive constructive feedback on your resume and make improvements to boost your chances of landing interviews.",
            icon: ThumbUpIcon, // Use Thumb Icon here
            iconColor: "text-blue-500", // Custom color
        },
        {
            title: "Data & Privacy Control",
            description: "We prioritize your privacy, ensuring that all your data is safe and secure with full control over what you share.",
            icon: ShieldCheckIcon,
            iconColor: "text-green-500", // Custom color
        },
    ];

    return (
        <section className="max-w-6xl mx-auto my-12 px-6 pt-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-yellow-500">Professional Resume Maker & CV Builder</h2>
                <h3 className="text-lg text-gray-400 mt-2">
                    Build your resume effortlessly with our powerful online tools. Stand out and make an impression.
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
                    >
                        <div className="flex items-center mb-4">
                            <feature.icon className={`h-12 w-12 mr-4 ${feature.iconColor}`} />
                            <h3 className="text-lg font-semibold text-gray-200">{feature.title}</h3>
                        </div>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
