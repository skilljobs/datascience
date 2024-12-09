import Image from "next/image";
import { hindSiliguri } from "../layout";

export default function DataScienceTools() {
  const tools = [
    {
      name: "Python",
      description: "Programming Language",
      image: "/tools/111.png",
    },
    {
      name: "PyCharm",
      description: "IDE for Python",
      image: "/tools/222.png",
    },
    {
      name: "Jupyter Notebook",
      description: "Interactive Computing",
      image: "/tools/333.png",
    },
    {
      name: "NumPy",
      description: "Numerical Computing Library",
      image: "/tools/444.png",
    },
    {
      name: "Pandas",
      description: "Data Manipulation Library",
      image: "/tools/555.png",
    },
    {
      name: "Matplotlib",
      description: "Plotting Library",
      image: "/tools/666.png",
    },
    {
      name: "Scikit-learn",
      description: "Machine Learning Library",
      image: "/tools/777.png",
    },
    {
      name: "TensorFlow",
      description: "Machine Learning Framework",
      image: "/tools/888.png",
    },
    // one div space then left of them
    {
      name: "Seaborn",
      description: "Statistical Visualization",
      image: "/tools/999.png",
    },
    {
      name: "Keras",
      description: "Deep Learning Library",
      image: "/tools/keras-logo.png",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* <h1 className={`text-3xl font-bold text-center mb-8 ${hindSiliguri.className}`}>যেসব ট্যুলস ও টেকনোলোজি শিখবেন</h1> */}
      <h1 className={`text-3xl font-bold text-center mb-8 ${hindSiliguri.className}`}>টুলস এবং লাইব্রেরি</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div key={index} className={`${index === tools.length - 2 ? " col-start-2	" : ""} bg-gray-200 p-4 h-max rounded-lg shadow hover:shadow-lg transition-shadow`}>
            <div className="flex flex-col items-center">
              <Image width={32} height={32} src={tool.image} alt={`${tool.name} logo`} className="object-contain mb-4" />
              <h2 className="text-sm font-semibold text-center">{tool.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
