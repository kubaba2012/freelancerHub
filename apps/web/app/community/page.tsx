export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">社区</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧：热门讨论 */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">热门讨论</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">如何提高远程工作效率？</h3>
              <p className="text-gray-600 mb-4">分享一下大家的远程工作经验和工具...</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>42 回复</span>
                <span className="mx-2">·</span>
                <span>2小时前</span>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：社区公告 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">社区公告</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-3">
              <li>
                <span className="text-blue-600">【置顶】</span>
                <span>社区规范与指南</span>
              </li>
              <li>
                <span className="text-green-600">【活动】</span>
                <span>每周技术分享会</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 