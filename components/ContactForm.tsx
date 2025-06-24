'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
  purpose: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    purpose: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Replace with actual API endpoint when backend is set up
      // const response = await fetch('http://localhost:5000/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '', purpose: '' });
      // } else {
      //   throw new Error('Failed to send message');
      // }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto"
    >
      {success ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full text-green-600">
            <Send size={24} />
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
          <p className="text-green-700 mb-4">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-navy-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-navy-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your email address"
            />
          </div>
          
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Purpose of Inquiry
            </label>
            <select
              id="purpose"
              name="purpose"
              required
              value={formData.purpose}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-navy-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="">Select Purpose</option>
              <option value="partnership">Partnership</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-navy-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              placeholder="Your message"
            ></textarea>
          </div>
          
          {error && (
            <div className="text-red-600 bg-red-50 border border-red-200 rounded-md p-3 text-sm">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <>
                <Loader size={18} className="animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;