export default function FindProjectPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">找项目</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 搜索区域 */}
        <div className="col-span-full mb-8">
          <input
            type="text"
            placeholder="搜索项目类型、预算范围..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* 项目卡片示例 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">电商网站开发</h3>
          <p className="text-gray-600 mb-4">预算: ¥50,000 | 工期: 2个月</p>
          <button className="text-blue-600 hover:text-blue-800">查看详情</button>
        </div>
      </div>
    </div>
  );
} 