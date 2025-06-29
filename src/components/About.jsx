import React from "react";
import profileImage from "/Users/sparshmarwah21/sparsh-portfolio/src/assets/profile.jpeg";

function About() {
  return (
    <section id="about" className="relative py-16 px-6 text-white overflow-hidden bg-[#121212]">
      {/* 🔥 Background Blobs from Hero.jsx */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-700 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Left - Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={profileImage}
            alt="Sparsh Marwah"
            className="rounded-xl border-4 border-orange-500 w-full max-w-sm object-cover shadow-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold mb-6 text-orange-500">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a Data Science Analyst with 3+ years of experience turning complex data into scalable, real-world solutions. With a Master’s in Data Analytics Engineering from Northeastern University (GPA: 3.8/4.0), I specialize in:
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-lg">
            <li><span className="text-orange-400 font-medium">Predictive modeling:</span> XGBoost, Random Forest, SHAP</li>
            <li><span className="text-orange-400 font-medium">Data engineering:</span> PySpark, AWS Glue, Redshift</li>
            <li><span className="text-orange-400 font-medium">Real-time ML deployment:</span> MLflow, Lambda, SageMaker</li>
            <li><span className="text-orange-400 font-medium">Visualization:</span> Tableau, Streamlit</li>
          </ul>

          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            At <span className="font-medium">Tredence Analytics</span>, I built fraud detection systems and customer retention models on 10M+ records, reducing deployment time by 40% using Databricks and MLflow.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            My project portfolio includes an AI-powered resume matcher, medical non-adherence prediction, and equipment price forecasting — all rooted in measurable business impact.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            I’m driven by a passion for building intelligent, data-driven systems that solve real-world problems. Let’s connect and explore how data can drive innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
