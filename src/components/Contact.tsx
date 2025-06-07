import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'tanisha4bhatt@gmail.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Ghaziabad | Kanpur',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91-7388525564',
    },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Error404-ai' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/tanisha-bhatt-927315303/' },
    { icon: <Twitter size={20} />, url: 'https://x.com/TANISHABHA98049' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://message-8ui9.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title mb-8">Get in Touch</h2>

        <p className="text-center text-muted max-w-2xl mx-auto mb-16">
          Have a project in mind or want to discuss a potential collaboration? Don't hesitate to shoot me a message!
        </p>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-medium mb-4">Connect with me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-card/80 border border-border/20 p-3 rounded-full transition-colors"
                  aria-label={`Social link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                  className={`w-full px-4 py-3 bg-card border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${errors.name ? 'border-red-500' : ''}`} placeholder="John Doe" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className={`w-full px-4 py-3 bg-card border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${errors.email ? 'border-red-500' : ''}`} placeholder="john@example.com" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                  className={`w-full px-4 py-3 bg-card border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${errors.subject ? 'border-red-500' : ''}`} placeholder="Project Inquiry" />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                  className={`w-full px-4 py-3 bg-card border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors min-h-[150px] ${errors.message ? 'border-red-500' : ''}`} placeholder="Your message here..." />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className="w-full button-primary flex items-center justify-center">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>

              {isSubmitSuccess && (
                <div className="bg-green-500/20 border border-green-500/30 text-green-500 p-3 rounded-lg mt-4">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
