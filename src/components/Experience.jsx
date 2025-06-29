import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: 'Graduate Teaching Assistant',
      company: 'Northeastern University',
      period: 'Sep 2024 – May 2025',
      bullets: [
        'Instructed students on Python, SQL, and data analysis; mentored 40+ projects across Tableau and data storytelling.',
        'Led hands-on labs in advanced analytics tools, offering tailored guidance on data visualization best practices.'
      ]
    },
    {
      title: 'Data Science Analyst',
      company: 'Tredence Analytics Solutions Pvt. Ltd.',
      period: 'Jun 2021 – Jul 2023',
      bullets: [
        'Predicted Customer Lifetime Value (CLTV) and churn for a top U.S. retail client using machine learning models such as XGBoost, Linear Regression, and Random Forest, supporting more targeted and effective customer retention strategies.',
        'Developed MLOps pipelines using Databricks, MLflow, and Docker; reduced deployment time by 40% and improved model monitoring capabilities by 30%, ensuring robust and scalable analytics infrastructure.',
        'Processed 10M+ customer records using PySpark, achieving 91.2% accuracy in demand forecasting.',
        'Ran A/B and multivariate tests to optimize product category strategy, increasing conversions by 15%.',
        'Created Tableau dashboards to support pricing decisions, driving a 25% uplift in conversions.',
        'Collaborated with engineers and PMs to deploy real-time ML systems aligned with business outcomes.'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'SJVN Ltd.',
      period: 'Jun 2019 – Aug 2019',
      bullets: [
        'Analyzed inventory and energy sales data using SQL; reduced stockouts by 20% and improved inventory turnover by 15%.',
        'Documented data integration workflows and ensured high data integrity across systems, reducing errors by 30%.'
      ]
    }
  ];

  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-primary">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-primary pl-6 py-4 bg-black/60 shadow-md hover:shadow-lg transition-all rounded"
            >
              <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.company} • {exp.period}</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-300">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
