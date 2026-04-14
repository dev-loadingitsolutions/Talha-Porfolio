import React from 'react';

const VideosSection = () => {
  const videoFiles = [
    '8ee05d0e83070eb07c410da9ef7036c6.mp4',
    'b726a6281991c3028d80144ba400148d.mp4',
    'boJaUHvcF6csWq8KWjDdQfh47Gw.mp4',
    'GxJ14S7ZTUQjTy5xYHXdJYh1sYs.mp4',
    'lmml8qWYisZkyVLGqWa5aGhhn0k.mp4',
    'n0aQWYXAsw3DorIx1fxKRjiLZo.mp4'
  ];

  return (
    <div className="w-2/3 pl-8">
      <h3 className="text-4xl font-bold text-white mb-12">Recent Projects</h3>
      <div className="grid grid-cols-2 gap-6 h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {videoFiles.map((video, index) => (
          <div key={index} className="group relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <video
              src={`../assets/videos/${video}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Project {index + 1}</h4>
                <p className="text-gray-200 text-sm">Interactive UI Animation</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosSection;

