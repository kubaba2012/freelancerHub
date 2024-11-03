export default function FindTalentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">找人才</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 搜索区域 */}
        <div className="col-span-full mb-8">
          <input
            type="text"
            placeholder="搜索技能、经验要求..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* 人才卡片示例 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">全栈开发工程师</h3>
          <p className="text-gray-600 mb-4">5年经验 | React, Node.js, Python</p>
          <button className="text-blue-600 hover:text-blue-800">查看详情</button>
        </div>
      </div>
    </div>
  );
} 