import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col items-center">
      <div className="container mx-auto p-8 lg:p-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 animate-pulse">Welcome to Encryptix</h1>
          <p className="text-2xl lg:text-3xl text-gray-700 font-light">Secure Your Healthcare Data with Advanced Analytics</p>
        </header>

        <section className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">About Encryptix</h2>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
            Welcome to Encryptix, the forefront solution for secure and advanced medical data analysis. Our mission is to
            empower healthcare institutions with cutting-edge encryption and cloud-based analytics, ensuring that patient
            data remains private and secure while unlocking powerful insights.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
            In today's digital age, data security and privacy are paramount, especially in the healthcare sector. At
            Encryptix, we envision a world where healthcare providers can leverage the full power of cloud computing without
            compromising the confidentiality of their sensitive data. By combining state-of-the-art cryptographic techniques
            with advanced machine learning, we aim to transform how medical data is analyzed and utilized.
          </p>
        </section>

        <section className="mb-12 bg-white shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">Our Solution</h2>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6">
            Encryptix offers a sophisticated interface that allows hospitals and medical institutes to encrypt their datasets
            and perform classification queries using k-nearest neighbors (KNN) algorithms. Here's how we achieve this:
          </p>
          <ul className="list-disc list-inside space-y-4 text-xl lg:text-2xl text-gray-700 leading-relaxed">
            <li>
              <strong>Data Encryption</strong>: All medical datasets are encrypted using partial homomorphic encryption before
              leaving your premises. This ensures that sensitive information remains protected throughout the process.
            </li>
            <li>
              <strong>Secure Cloud Processing</strong>: Encrypted data is processed by two non-colluding cloud servers. These
              servers perform the necessary calculations on the encrypted data without decrypting it, maintaining the utmost
              level of security.
            </li>
            <li>
              <strong>Classification Queries</strong>: Users can run KNN classification queries on the encrypted datasets. Our
              advanced algorithms handle these queries in the cloud, delivering accurate and secure results.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">Key Features</h2>
          <ul className="list-disc list-inside space-y-4 text-xl lg:text-2xl text-gray-700 leading-relaxed">
            <li>
              <strong>Uncompromised Data Security</strong>: Encryptix ensures that your data is always encrypted, preventing
              unauthorized access and breaches.
            </li>
            <li>
              <strong>Advanced Analytics</strong>: Perform complex data analysis with ease, leveraging the powerful computing
              capabilities of the cloud.
            </li>
            <li>
              <strong>Scalability</strong>: Our solution scales effortlessly to handle large datasets and high query volumes,
              meeting the needs of growing healthcare institutions.
            </li>
            <li>
              <strong>User-Friendly Interface</strong>: Designed for both technical and non-technical users, our intuitive
              interface simplifies data management and analysis.
            </li>
          </ul>
        </section>

        <section className="mb-12 bg-white shadow-xl rounded-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">Why Choose Encryptix?</h2>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
            Encryptix stands out as a reliable and robust solution for medical data security and analysis. With rising
            concerns about data breaches and cyber threats, our application offers a secure and efficient way to manage and
            analyze medical data. By using Encryptix, healthcare providers can protect patient information, comply with data
            privacy regulations, and make informed decisions to enhance patient care and operational efficiency.
          </p>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mt-6">
            Join us at Encryptix, and take the first step towards a more secure and insightful future in healthcare.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
