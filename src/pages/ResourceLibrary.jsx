import React, { useState } from 'react';

// Dummy data for resources
const resourcesData = [
  { id: 1, title: "Resource 1", type: "📄", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 2, title: "Resource 2", type: "🎬", link: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 3, title: "Resource 3", type: "📝", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 4, title: "Resource 4", type: "📄", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 5, title: "Resource 5", type: "🎬", link: "https://www.w3schools.com/html/mov_bbb.mp4" },
];


export default function ResourceLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (resource) => {
    if (favorites.includes(resource.id)) {
      setFavorites(favorites.filter(id => id !== resource.id)); // Remove from favorites
    } else {
      setFavorites([...favorites, resource.id]); // Add to favorites
    }
  };

  const filteredResources = resourcesData.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = (filterType === "All" || resource.type === filterType || (filterType === "Favorites" && favorites.includes(resource.id)));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-r  from-gray-900 via-gray-800 to-black">
      <h1 className="text-3xl font-semibold text-center text-white mt-12 mb-6" 
      style={{textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)'}}>Resource Library</h1>
      <div className='flex justify-around item-center'> 
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-green-500 p-2 w-full bg-gray-600 text-white max-w-md mx-auto mt-7 mb-4 rounded-md"
        placeholder="Search resources..."
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border border-green-500 p-2 w-full bg-gray-600 text-white max-w-md mx-auto mt-7 mb-4 rounded-md"
      >
        <option value="All">All Types</option>
        <option value="📄">PDF </option>
        <option value="🎬">Video</option>
        <option value="📝">Article</option>
        <option value="Favorites">Favorites</option> {/* Added Favorites filter */}
      </select>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-8">Available Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 " >
        {filteredResources.length > 0 ? (
          filteredResources.map(resource => (
            <div key={resource.id} className="bg-blue-100 mb-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4 flex flex-col justify-between" style={{ boxShadow: '0 4px 30px rgba(255, 255, 255, 0.3)' }} >
              <div>
                <h2 className="text-xl font-medium mb-2 text-gray-800">{resource.title}</h2>
                <p className="mb-4 text-gray-600">Type: {resource.type}</p>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={resource.link}
                  target='_blank'
                  className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200 transform hover:scale-105 mr-4"
                >
                  Download
                </a>
                <button
                  onClick={() => handleFavoriteToggle(resource)}
                  className={`py-2 text-sm ${favorites.includes(resource.id) ? 'text-red-500' : 'text-gray-500'} hover:text-red-600`}
                >
                  {favorites.includes(resource.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No resources found.</p>
        )}
      </div>
    </div>
  );
}
