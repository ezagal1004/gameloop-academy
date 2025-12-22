export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#3B9FD8] py-20 overflow-hidden">
        {/* Comic book dots texture */}
        <div
          className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,1) 1.5px, transparent 1.5px)`,
            backgroundSize: '20px 20px',
          }}
        ></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight font-[family-name:var(--font-bm-hanna)] uppercase tracking-tight text-white mb-4"
              style={{
                WebkitTextStroke: '3px black',
                paintOrder: 'stroke fill',
              }}
            >
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white font-sans">
              Last Updated: December 21, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-gray-700 font-sans text-lg leading-relaxed mb-4">
                Gameloop Academy ("we," "us," or "our") operates as a private coding tutoring service based in Redondo Beach, California. We are committed to protecting the privacy of our students and their families. This Privacy Policy explains how we collect, use, and safeguard your personal information.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                1. Information We Collect
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed mb-3">
                  We collect the following personal information when you contact us or enroll in tutoring sessions:
                </p>
                <ul className="list-disc list-inside text-gray-700 font-sans leading-relaxed space-y-2 ml-4">
                  <li>Student's name and age</li>
                  <li>Parent/guardian name and contact information (email address and phone number)</li>
                  <li>Scheduling preferences and availability</li>
                  <li>Information about the student's coding experience and learning goals</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                2. How We Use Your Information
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed mb-3">
                  We use your personal information solely for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 font-sans leading-relaxed space-y-2 ml-4">
                  <li>To schedule and conduct tutoring sessions</li>
                  <li>To communicate with parents/guardians about student progress and session details</li>
                  <li>To process payments for tutoring services</li>
                  <li>To send updates about session times, cancellations, or schedule changes</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                3. Data Sharing and Disclosure
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed mb-3">
                  <strong>We do not sell, rent, or share your personal information with third parties.</strong> Your data is kept private and confidential. The only exceptions are:
                </p>
                <ul className="list-disc list-inside text-gray-700 font-sans leading-relaxed space-y-2 ml-4">
                  <li>When required by law or legal process</li>
                  <li>To protect the safety and rights of Gameloop Academy, our students, or others</li>
                </ul>
                <p className="text-gray-700 font-sans leading-relaxed mt-3">
                  We use payment platforms (Zelle, Venmo, PayPal) to process payments. These platforms have their own privacy policies governing how they handle your payment information.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                4. Cookies and Tracking
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed">
                  Our website does not use cookies or tracking technologies. We do not collect any data about your browsing behavior on our website.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                5. Children's Privacy (COPPA Compliance)
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed mb-3">
                  We provide tutoring services to children ages 7-14. We are committed to complying with the Children's Online Privacy Protection Act (COPPA). We:
                </p>
                <ul className="list-disc list-inside text-gray-700 font-sans leading-relaxed space-y-2 ml-4">
                  <li>Only collect personal information from children with verifiable parental consent</li>
                  <li>Collect only the minimum information necessary to provide tutoring services</li>
                  <li>Do not condition participation on the disclosure of more information than is reasonably necessary</li>
                  <li>Allow parents to review, delete, or refuse further collection of their child's information</li>
                </ul>
                <p className="text-gray-700 font-sans leading-relaxed mt-3">
                  Parents may contact us at any time to review or request deletion of their child's information.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                6. California Privacy Rights
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed mb-3">
                  As a California-based business serving California residents, we comply with the California Consumer Privacy Act (CCPA). California residents have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 font-sans leading-relaxed space-y-2 ml-4">
                  <li>Know what personal information we collect and how it is used</li>
                  <li>Request deletion of their personal information</li>
                  <li>Opt-out of the sale of personal information (note: we do not sell personal information)</li>
                  <li>Non-discrimination for exercising their privacy rights</li>
                </ul>
                <p className="text-gray-700 font-sans leading-relaxed mt-3">
                  To exercise these rights, please contact us at gameloopacademy20@gmail.com.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                7. Data Security
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed">
                  We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                8. Data Retention
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed">
                  We retain your personal information only for as long as necessary to provide tutoring services and to comply with our legal obligations. When information is no longer needed, we securely delete or destroy it.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                9. Third-Party Services
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed mb-3">
                  We use the following third-party services in connection with our tutoring business:
                </p>
                <ul className="list-disc list-inside text-gray-700 font-sans leading-relaxed space-y-2 ml-4">
                  <li><strong>Google Meet:</strong> For conducting online tutoring sessions</li>
                  <li><strong>Facebook Messenger & Instagram:</strong> For communication with parents/guardians</li>
                  <li><strong>Payment Platforms:</strong> Zelle, Venmo, and PayPal for processing payments</li>
                </ul>
                <p className="text-gray-700 font-sans leading-relaxed mt-3">
                  Each of these services has its own privacy policy. We encourage you to review their privacy practices.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                10. Changes to This Privacy Policy
              </h2>
              <div className="bg-gray-50 border-3 border-black rounded-xl p-6 mb-4">
                <p className="text-gray-700 font-sans leading-relaxed">
                  We may update this Privacy Policy from time to time. When we make changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 
                className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-bm-hanna)] uppercase text-[#3B9FD8] mb-4"
                style={{
                  WebkitTextStroke: '1px black',
                  paintOrder: 'stroke fill',
                }}
              >
                11. Contact Us
              </h2>
              <div className="bg-[#FDB927] border-4 border-black rounded-xl p-6 shadow-[6px_6px_0_0_#000]">
                <p className="text-black font-sans leading-relaxed mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="text-black font-sans leading-relaxed space-y-1">
                  <p><strong>Gameloop Academy</strong></p>
                  <p>Email: <a href="mailto:gameloopacademy20@gmail.com" className="underline hover:text-[#3B9FD8] transition-colors">gameloopacademy20@gmail.com</a></p>
                  <p>Location: Redondo Beach, California</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}