import { notFound } from 'next/navigation';
import ProfileCard from '../../components/ProfileCard';

interface Props {
  params: {
    id: string;
  };
}

export default function UserProfilePage({ params }: Props) {
  // 模拟用户数据，实际项目中应该从 API 获取
  const userData = {
    name: "用户" + params.id,
    title: "软件工程师",
    skills: ["JavaScript", "React", "Vue"],
    experience: "3年",
    rating: 4.5,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${params.id}`
  };

  // 如果找不到用户，返回 404
  if (!userData) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧：用户资料卡片 */}
        <div>
          <ProfileCard {...userData} />
        </div>
        
        {/* 右侧：用户作品集 */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">作品集</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 作品卡片示例 */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">电商网站开发</h3>
                <p className="text-gray-600 text-sm">完整的电商解决方案，包含前后端开发...</p>
              </div>
            </div>
          </div>

          {/* 评价区域 */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">用户评价</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'text-gray-300'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">一个月前</span>
                </div>
                <p className="text-gray-600">非常专业的开发者，沟通顺畅，完成度高。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 