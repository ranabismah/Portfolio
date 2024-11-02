"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ranabismah178@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Karachi, Sindh Pakistan",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstname || !formData.email || !formData.message) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    
    setTimeout(() => {
      setSuccess('Your message has been sent successfully!');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto text-center mb-4"> {/* Reduced margin */}
        <h1 className="text-4xl text-red-800 font-bold">Contact Me</h1> {/* Changed to h1 */}
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-red-800">Let&apos;s work together</h3>
              <p className="text-white/60">Let&apos;s collaborate and create something amazing!</p>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Firstname" />
                <Input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Lastname" />
                <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email address" />
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" />
                <Textarea name="message" value={formData.message} onChange={handleChange} className="h-[200px]" placeholder="Type your message here." />
                <Button className="max-w-40">Send message</Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-red-800 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
