import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Contact</h2>
        <p className="text-gray-300 mb-10 text-lg">
          I’m always open to new opportunities, collaborations, or just a chat about data science!
        </p>

        {/* Contact Links */}
        <div className="space-y-6 text-lg text-left md:text-center">
          <p className="flex items-center justify-center gap-3 text-gray-400">
            <MdEmail className="text-2xl text-orange-400" />
            <a
              href="mailto:marwah.sp@northeastern.edu"
              className="text-primary underline hover:text-orange-400 transition"
            >
              marwah.sp@northeastern.edu
            </a>
          </p>
          <p className="flex items-center justify-center gap-3 text-gray-400">
            <FaGithub className="text-2xl text-orange-400" />
            <a
              href="https://github.com/marwahsparsh24"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline hover:text-orange-400 transition"
            >
              github.com/marwahsparsh24
            </a>
          </p>
        </div>

        {/* LinkedIn CTA Button */}
        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/sparsh-marwah/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-orange-400 text-orange-400 font-semibold rounded-md hover:bg-orange-400 hover:text-black transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
