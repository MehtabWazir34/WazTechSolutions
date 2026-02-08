import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { init, sendForm } from "@emailjs/browser";

init('kA-_f4Iyn8GmTk8nF');

function RequestForm({title}) {

  let formRef = useRef();
  let [statusMsg, setMsg] = useState('');

  const sendMessage =(a)=>{
    a.preventDefault();
    setMsg("Sending...");

    sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      // import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      formRef.current
    ).then(() => {
      setMsg("Message sent!");
      alert(statusMsg);
      formRef.current.reset();

    }).catch((err) => {
      setMsg("Failed to send message! ")
      console.log("Err: ", err);
      
    });
  }
  return (
    <motion.section
      className="px-6 py-12 flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.form ref={formRef} onSubmit={sendMessage} className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4 transition-colors duration-300">
        <div className="text-center border-b border-orange-500 pb-2 mb-4">
          <h2 className="text-3xl font-bold text-orange-400">{title}</h2>
          <p className="text-gray-300">Fill it to make a request.</p>
        </div>

        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Your Name:
          </label>
          <input required
            type="text"
            id="name"
            name="name"
            placeholder="Write your name here..."
            className="w-full px-3 py-2 rounded-md border border-orange-500 bg-transparent focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Your Email:
          </label>
          <input required
            type="email"
            id="email"
            name="email"
            placeholder="Active email address for contact..."
            className="w-full px-3 py-2 rounded-md border border-orange-500 bg-transparent focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            Your Message:
          </label>
          <textarea required
            id="message"
            rows="5"
            name="message"
            placeholder="Write your detailed request/message here..."
            className="w-full px-3 py-2 rounded-md border border-orange-500 bg-transparent focus:ring-2 focus:ring-orange-400 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 w-full py-3 rounded-lg font-semibold"
        >
          Send Request
        </button>
      </motion.form>
    </motion.section>
  );
}

export default RequestForm;
