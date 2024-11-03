interface ProfileCardProps {
  name: string;
  title: string;
  skills: string[];
  experience: string;
  rating: number;
  avatar: string;
}

interface ProfileCardProps {
  name: string;
  title: string;
  skills: string[];
  experience: string;
  rating: number;
  avatar: string;
}

export default function ProfileCard({
  name,
  title,
  skills,
  experience,
  rating,
  avatar
}: ProfileCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        <p>工作经验：{experience}</p>
      </div>
      
      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        联系我
      </button>
    </div>
  );
}