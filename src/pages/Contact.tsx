import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { IoIosSend, IoIosRefresh } from "react-icons/io";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

type Props = {
  isDark: boolean;
}

const Contact = ({ isDark }: Props) => {
  const { t } = useTranslation();
  
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pirb8os',
      'template_aevr1ui',
      formRef.current!,
      'tY7StYuJjS7lWHLwM'
    )
    .then(() => {
      toast.success(t("contact_success"));
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error(error);
      toast.error(t("contact_fail"))
    });
  };

  return (
    <div>
      <Toaster />
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="h-[calc(100vh-128px)] px-6 flex items-center justify-center"
      >
        <div className="w-full max-w-xl space-y-8">
          <div>
            <h1 className={`text-4xl font-bold ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
              {t("contact")}
            </h1>
            <p className={`text-base ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
              {t("contact_form_title")}
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder={t("contact_name")}
              required
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${isDark 
                ? 'bg-transparent border-sky-400 focus:ring-sky-500'
                : 'bg-white border-sky-600 focus:ring-sky-600'}`}
            />
            <input
              type="email"
              name="email"
              placeholder={t("contact_email")}
              required
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${isDark 
                ? 'bg-transparent border-sky-400 focus:ring-sky-500'
                : 'bg-white border-sky-600 focus:ring-sky-600'}`}
            />
            <textarea
              name="bio"
              rows={5}
              placeholder={t("contact_message")}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${isDark 
                ? 'bg-transparent border-sky-400 focus:ring-sky-500'
                : 'bg-white border-sky-600 focus:ring-sky-600'}`}
            ></textarea>

            <div className="flex justify-end gap-4 pt-2">
              <button
                type="submit"
                className={`flex items-center gap-2 px-5 py-2 border rounded-md transition duration-200
                  ${isDark 
                    ? 'border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-[#1e1e2e]'
                    : 'border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'}`}
              >
                <IoIosSend />
                {t("contact_submit")}
              </button>
              <button
                type="reset"
                className={`flex items-center gap-2 px-5 py-2 border rounded-md transition duration-200
                  ${isDark
                    ? 'border-[#70f6d6] text-[#70f6d6] hover:bg-[#70f6d6] hover:text-[#1e1e2e]'
                    : 'border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white'}`}
              >
                <IoIosRefresh />
                {t("contact_clear")}
              </button>
            </div>
          </form>

          <div className={`flex justify-center gap-6 text-3xl pt-4 ${isDark ? 'text-slate-400' : 'text-gray-700'}`}>
            <a href="https://www.linkedin.com/in/peining-chu-a21bb3207/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/z_julia_17?igsh=M3A0dmJrcmVxY2x1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaInstagramSquare />
            </a>
            <a href="https://github.com/chu-pei-ning" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
