"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ตรวจสอบตัวแปรสิ่งแวดล้อมว่ามีค่าหรือไม่
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    // ถ้าตัวแปรใดเป็น undefined ให้แสดงแจ้งเตือนและไม่ส่งฟอร์ม
    if (!serviceId || !templateId || !userId) {
      alert('❌ ข้อผิดพลาด: ตัวแปรสิ่งแวดล้อมไม่ได้ถูกตั้งค่า');
      return;
    }

    emailjs
      .send(serviceId, templateId, formData, userId)
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
