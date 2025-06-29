import { useState } from 'react';

function Projects() {
  const categories = ['All', 'AI/ML', 'MLOps', 'NLP'];

  const allProjects = [
    {
      title: 'AI-Powered Resume & Job Matching Assistant',
      date: 'Feb 2025 – May 2025',
      category: 'AI/ML',
      description: 'Multi-agent RAG system with CrewAI, LangChain, ChromaDB, OpenAI, and Streamlit for resume scoring, matching, and feedback.',
      link: 'https://github.com/marwahsparsh24/404_JOB_Not_Found',
    },
    {
      title: 'Air Quality Prediction',
      date: 'Sep 2024 – Dec 2024',
      category: 'MLOps',
      description: 'Real-time AQI prediction using GCP pipelines, MLflow retraining, and Cloud Functions for drift monitoring.',
      link: 'https://github.com/marwahsparsh24/Air-Quality',
    },
    {
      title: 'YELP Review Sentiment Analyzer & Recommender',
      date: 'Feb 2024 – Apr 2024',
      category: 'NLP',
      description: 'Sentiment classifier (91.4% accuracy) and recommender system using KNN, SVD, and neural networks.',
      link: 'https://github.com/marwahsparsh24/YELP-Sentiment-Analyzer-Recommender',
    },
    {
      title: 'Churn Prediction using XGBoost',
      date: 'Jan 2024 – Feb 2024',
      category: 'AI/ML',
      description: 'Built churn prediction pipeline using XGBoost with SHAP explainability and real-time inference.',
      link: 'https://github.com/marwahsparsh24/Customer-Churn',
    },
    {
      title: 'Face Mask Detection',
      date: 'Nov 2023 – Dec 2023',
      category: 'AI/ML',
      description: 'Built real-time face mask detection system using OpenCV and CNNs for safety monitoring.',
      link: 'https://github.com/marwahsparsh24/Face-Mask-Detection',
    },
    {
      title: 'Liver Cirrhosis Survival Prediction',
      date: 'Apr 2025 – May 2025',
      category: 'AI/ML',
      description: 'Multiclass classification (transplant, death, censored) using Random Forest & XGBoost, 84.3% accuracy.',
      link: 'https://github.com/marwahsparsh24/Liver-Cirrhosis-Survival',
    },
  ];

  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === selected);

  return (
    <section className="bg-[#121212] text-white py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-primary">Projects</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full transition font-semibold 
                ${
                  selected === cat
                    ? 'bg-primary text-black shadow-[0_4px_15px_rgba(255,115,0,0.4)]'
                    : 'bg-[#1e1e1e] text-gray-300 border border-gray-600 hover:border-primary hover:text-primary hover:shadow-[0_4px_15px_rgba(255,115,0,0.2)]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] border border-gray-700 p-5 rounded-xl shadow-xl transform transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,115,0,0.3)]"
            >
              <h3 className="text-xl font-bold text-primary">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.date} • {project.category}</p>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-sm text-primary underline hover:text-orange-400"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/marwahsparsh24"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-full hover:bg-orange-400 transition"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
