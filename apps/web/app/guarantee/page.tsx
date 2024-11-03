import React from 'react';

export default function GuaranteePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-12 transition-all hover:text-blue-600">
        平台保障
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 资金安全 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            资金安全
          </h3>
          <p className="text-gray-600 leading-relaxed">
            项目资金由平台托管，保证交易安全
          </p>
        </div>

        {/* 合同保障 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            合同保障
          </h3>
          <p className="text-gray-600 leading-relaxed">
            标准电子合同，法律效力保障
          </p>
        </div>

        {/* 售后保障 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            售后保障
          </h3>
          <p className="text-gray-600 leading-relaxed">
            专业客服团队，7*24小时服务
          </p>
        </div>
      </div>
    </div>
  );
} 