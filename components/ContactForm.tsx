"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_6os60aa', // ใส่ Service ID ของคุณ
        'template_hwl0dxv', // ใส่ Template ID ของคุณ
        formData,
        'mQCHgE5jmI1NyyyWa' // ใช้ Public Key (User ID) ที่คุณมี
      )
      .then(
        (result) => {
          console.log('✅ ส่งข้อความสำเร็จ:', result.text);
          alert('✅ ข้อความถูกส่งเรียบร้อยแล้ว!');
          setFormData({ name: '', email: '', message: '' }); // เคลียร์ฟอร์มหลังส่ง
        },
        (error) => {
          console.error('❌ เกิดข้อผิดพลาด:', error.text);
          alert('❌ ไม่สามารถส่งข้อความได้ โปรดลองอีกครั้ง');
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold mb-5 text-white'>Contact Me</h2>
      <div className='mb-3'>
        <input
          type='text'
          placeholder='Your name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded shadow'
        />
      </div>

      <div className='mb-3'>
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded shadow'
        />
      </div>

      <div className='mb-3'>
        <textarea
          placeholder='Your message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          className='w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded shadow'
        />
      </div>
      
      <button type="submit" className='px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'>
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
