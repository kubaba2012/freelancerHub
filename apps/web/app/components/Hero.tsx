'use client';
import { useEffect } from 'react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-8">
            连接人才，成就未来
          </h1>
          
          <p className="mt-3 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl">
            在FreelanceHub，找最靠谱的甲方；在FreelanceHub，找到最适合您项目的专业人才。
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex rounded-md shadow-sm">
              <input
                type="text"
                className="flex-1 px-5 py-3 rounded-l-md border-0 focus:ring-2 focus:ring-blue-500"
                placeholder="搜索技能、项目或人才"
              />
              <button className="px-6 py-3 bg-blue-900 text-white rounded-r-md hover:bg-blue-800 transition-colors">
                搜索
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}