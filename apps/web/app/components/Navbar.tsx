'use client';

'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex-shrink-0">
        <a href="/" className="text-2xl font-bold text-blue-600">
          FreelanceHub
        </a>
      </div>
      
      <div className="hidden md:flex md:space-x-8">
        <a href="/find-talent" className="text-gray-700 hover:text-blue-600 px-3 py-2">找人才</a>
        <a href="/find-project" className="text-gray-700 hover:text-blue-600 px-3 py-2">找项目</a>
        <a href="/guarantee" className="text-gray-700 hover:text-blue-600 px-3 py-2">平台保障</a>
        <a href="/community" className="text-gray-700 hover:text-blue-600 px-3 py-2">社区</a>
      </div>

      <div className="flex items-center space-x-4">
        <a href="/login" className="text-gray-700 hover:text-blue-600">登录</a>
        <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          注册
        </a>
      </div>
    </nav>
  );
}
