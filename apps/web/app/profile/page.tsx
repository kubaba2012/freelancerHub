import ProfileCard from '../components/ProfileCard';

export default function ProfilePage() {
  const profileData = {
    name: "张三",
    title: "全栈开发工程师",
    skills: ["React", "Node.js", "Python", "Docker"],
    experience: "5年",
    rating: 4.8,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">个人主页</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <ProfileCard {...profileData} />
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">详细介绍</h2>
            <p className="text-gray-600 mb-6">
              资深全栈开发工程师，擅长前后端开发和系统架构设计...
            </p>

            <h3 className="text-lg font-semibold mb-3">项目经历</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-medium">电商平台开发</h4>
                <p className="text-gray-600">负责整个平台的架构设计和核心功能开发...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 