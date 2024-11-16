'use client';
import { useRouter } from 'next/router';

const templates: Record<string, string> = {
  "1": "Modern Resume",
  "2": "Creative Resume",
  "3": "Professional Resume",
};

export default function ResumePreview() {
  const router = useRouter();
  const { name, email, phone, education, skills, template } = router.query;

  // Ensure `template` is a valid string key
  const selectedTemplate = typeof template === 'string' && templates[template]
    ? templates[template]
    : "Default Resume";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Resume - {selectedTemplate}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <header className="text-center mb-6">
          <h2 className="text-2xl font-bold">{name || "Your Name"}</h2>
          <p>{email || "Your Email"} | {phone || "Your Phone"}</p>
        </header>

        <section className="mb-4">
          <h3 className="font-bold text-lg">Education</h3>
          <p>{education || "Your Education Details"}</p>
        </section>

        <section>
          <h3 className="font-bold text-lg">Skills</h3>
          <p>{skills || "Your Skills"}</p>
        </section>
      </div>
    </div>
  );
}
