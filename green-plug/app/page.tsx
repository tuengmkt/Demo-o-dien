"use client";

import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.');
    setFormData({ name: '', phone: '', address: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold">Ổ Điện</div>
            <span className="ml-2 text-sm">Chất lượng - An toàn</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-green-200">Trang chủ</a></li>
              <li><a href="#products" className="hover:text-green-200">Sản phẩm</a></li>
              <li><a href="#contact" className="hover:text-green-200">Liên hệ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-green-50 py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Ổ Điện Chất Lượng Cao</h1>
          <p className="text-lg text-gray-700 mb-8">Sản phẩm ổ điện an toàn, bền bỉ cho gia đình và công nghiệp. Đặt mua ngay để nhận tư vấn miễn phí!</p>
          <a href="#register" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Đăng ký ngay</a>
        </div>
      </section>

      {/* Product Description */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Mô tả sản phẩm</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Ổ Cắm Điện An Toàn</h3>
              <p className="text-gray-600">Thiết kế chống cháy nổ, chịu tải cao, phù hợp cho mọi nhu cầu sử dụng trong gia đình và công nghiệp.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Chất Lượng Đảm Bảo</h3>
              <p className="text-gray-600">Sản xuất từ vật liệu cao cấp, đạt tiêu chuẩn quốc tế, bảo hành lâu dài.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="bg-green-50 py-20">
        <div className="container mx-auto px-6 max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Đăng ký đặt mua</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Họ tên</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Địa chỉ</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Gửi đăng ký</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2026 Ổ Điện. Tất cả quyền được bảo lưu.</p>
          <p>Liên hệ: info@odien.vn | Hotline: 0123 456 789</p>
        </div>
      </footer>
    </div>
  );
}
