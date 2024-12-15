import React, { useState } from 'react';
import Camera from '../components/Camera';

const FreshnessDetection = () => {
  const [capturedImages, setCapturedImages] = useState([]);

  const handleCapture = (imageData) => {
    setCapturedImages([...capturedImages, {
      id: Date.now(),
      image: imageData,
      timestamp: new Date().toLocaleString(),
      produce: "Apple",
      freshness: "Fresh",
      "Expected-Lifespan": "10 days",
    }]);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col lg:flex-row gap-5">
        <Camera heading="Freshness-Detection" onCapture={handleCapture} />

        <div className="w-full lg:w-2/3 p-5">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produce
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Freshness
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expected-Lifespan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[...capturedImages].reverse().map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img 
                        src={item.image} 
                        alt="Captured" 
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.timestamp}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.produce}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.freshness}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item["Expected-Lifespan"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button 
                        onClick={() => {
                          setCapturedImages(capturedImages.filter(img => img.id !== item.id));
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshnessDetection;