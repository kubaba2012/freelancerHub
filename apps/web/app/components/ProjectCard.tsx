interface ProjectCardProps {
  title: string;
  budget: string;
  duration: string;
  skills: string[];
  description: string;
}

export default function ProjectCard({
  title,
  budget,
  duration,
  skills,
  description
}: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
        <span>预算: {budget}</span>
        <span>周期: {duration}</span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      
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
      
      <div className="flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          查看详情
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          投递简历
        </button>
      </div>
    </div>
  );
} 