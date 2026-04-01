import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Send,
  CheckCircle2,
  Download 
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "baraitame.imene@gmail.com",
    href: "mailto:baraitame.imene@gmail.com",
    color: "#c084fc",
  },
  {
    icon: FaGithub,
    label: "Github",
    value: "github.com/imenebaraitame",
    href: "mailto:https://github.com/imenebaraitame",
    color: "#c084fc",
  },
  {
    icon: FaLinkedin,
    label: "Linkedin",
    value: "linkedin.com/in/imene-baraitame",
    href: "mailto:https://dz.linkedin.com/in/imene-baraitame-03280412b",
    color: "#c084fc",
  }
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/imenebaraitame", label: "GitHub" },
  { icon: FaLinkedin, href: "https://dz.linkedin.com/in/imene-baraitame-03280412b", label: "LinkedIn" },
];

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const RESUME_URL = "https://drive.google.com/file/d/1_jPZjqZyp7j8iD_Mguew8y9A3iNSDWv4/view?usp=sharing";


  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputStyle = (hasError) => ({
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${hasError ? "#ff4466" : "rgba(255,255,255,0.08)"}`,
    color: "#c0c0d8",
    borderRadius: "12px",
    outline: "none",
    width: "100%",
    padding: "12px 16px",
    fontSize: "0.9rem",
    transition: "border-color 0.2s",
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm tracking-widest uppercase" style={{ color: "#c084fc" }}>
            Get In Touch
          </span>
          <h1
            className="mt-2 mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#e8e8f0",
            }}
          >
            Contact Me
          </h1>
          <p style={{ color: "#5a5a7a", maxWidth: "480px", margin: "0 auto", lineHeight: "1.8" }}>
            I welcome connecting with you to discuss professional opportunities or answer your questions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e8e8f0", marginTop: "0.5em", marginBottom: "1rem" }}>
                Contact Information
              </h3>
              {contactInfo.map((info, ) => (
                <div className="flex items-center gap-4 p-4 group transition-all duration-200">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${info.color}18` }}
                  >
                    <info.icon className="w-5 h-5" style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "#4a4a6a" }}>
                      {info.label}
                    </p>
                    <p className="text-sm" style={{ color: "#c0c0d8" }}>
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
             </div>

            {/* Download cv */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e8e8f0", marginTop: "0.5em", marginBottom: "1.2rem" }}>
                Download CV
              </h3>
              <p className="text-sm mb-6 m" style={{ color: "#6a6a8a" }}>
                You can download a PDF version of my CV to see more details about my experience and qualifications
              </p>
              <a
                href={RESUME_URL}
                download="ImeneBaraitame_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 disabled:opacity-70"
                style={{
                  background: "linear-gradient(135deg, #c084fc, #9333ea)",
                  color: "#ffffff",
                  fontWeight: 600,
                  cursor:"pointer",
                }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3"
          >
            <div
              className="p-7 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,255,136,0.1)" }}
                  >
                    <CheckCircle2 className="w-8 h-8" style={{ color: "#00ff88" }} />
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#e8e8f0" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#6a6a8a", maxWidth: "280px", lineHeight: "1.7" }}>
                    Thanks for reaching out. I'll get back to you within 24 hours!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-2 text-sm px-5 py-2 rounded-lg transition-all duration-200"
                    style={{
                      background: "rgba(192,132,252,0.08)",
                      border: "1px solid rgba(192,132,252,0.2)",
                      color: "#c084fc",
                    }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e8e8f0" }}>
                    Send a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1.5 text-sm" style={{ color: "#6a6a8a" }}>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle(errors.name)}
                        onFocus={(e) => {
                          if (!errors.name)
                            (e.currentTarget).style.borderColor =
                              "rgba(192,132,252,0.3)";
                        }}
                        onBlur={(e) => {
                          if (!errors.name)
                            (e.currentTarget).style.borderColor =
                              "rgba(255,255,255,0.08)";
                        }}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs" style={{ color: "#ff4466" }}>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-1.5 text-sm" style={{ color: "#6a6a8a" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle(errors.email)}
                        onFocus={(e) => {
                          if (!errors.email)
                            (e.currentTarget).style.borderColor =
                              "rgba(192,132,252,0.3)";
                        }}
                        onBlur={(e) => {
                          if (!errors.email)
                            (e.currentTarget).style.borderColor =
                              "rgba(255,255,255,0.08)";
                        }}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs" style={{ color: "#ff4466" }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1.5 text-sm" style={{ color: "#6a6a8a" }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry / Collaboration..."
                      value={form.subject}
                      onChange={handleChange}
                      style={inputStyle(errors.subject)}
                      onFocus={(e) => {
                        if (!errors.subject)
                          (e.currentTarget).style.borderColor =
                            "rgba(192,132,252,0.3)";
                      }}
                      onBlur={(e) => {
                        if (!errors.subject)
                          (e.currentTarget).style.borderColor =
                            "rgba(255,255,255,0.08)";
                      }}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs" style={{ color: "#ff4466" }}>
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1.5 text-sm" style={{ color: "#6a6a8a" }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Write your massage here..."
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      style={{ ...inputStyle(errors.message), resize: "vertical" }}
                      onFocus={(e) => {
                        if (!errors.message)
                          (e.currentTarget).style.borderColor =
                            "rgba(192,132,252,0.3)";
                      }}
                      onBlur={(e) => {
                        if (!errors.message)
                          (e.currentTarget).style.borderColor =
                            "rgba(255,255,255,0.08)";
                      }}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs" style={{ color: "#ff4466" }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 disabled:opacity-70"
                    style={{
                      background: "linear-gradient(135deg, #c084fc, #9333ea)",
                      color: "#ffffff",
                      fontWeight: 600,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? (
                      <>
                        <div
                          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage