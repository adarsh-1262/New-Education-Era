import React, { useState } from "react";

// Extended dummy data for resources
const resourcesData = [
  { id: 1, title: "Resource 1", type: "📄", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 2, title: "Resource 2", type: "🎬", link: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 3, title: "Resource 3", type: "📝", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 4, title: "Resource 4", type: "📄", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 5, title: "Resource 5", type: "🎬", link: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 6, title: "Resource 6", type: "📝", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 7, title: "Resource 7", type: "📄", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 8, title: "Resource 8", type: "🎬", link: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 9, title: "Resource 9", type: "📝", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 10, title: "Resource 10", type: "📄", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { id: 11, title: "Resource 11", type: "🎬", link: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 12, title: "Resource 12", type: "📝", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
];

export default function ResourceLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (resource) => {
    if (favorites.includes(resource.id)) {
      setFavorites(favorites.filter((id) => id !== resource.id)); // Remove from favorites
    } else {
      setFavorites([...favorites, resource.id]); // Add to favorites
    }
  };

  const filteredResources = resourcesData.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterType === "All" ||
      resource.type === filterType ||
      (filterType === "Favorites" && favorites.includes(resource.id));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-6 pb-10 px-8 bg-gradient-to-b from-gray-50 via-blue-100 to-white">
      <h1
        className="text-3xl font-semibold text-center text-blue-900 mt-6 mb-6"
        style={{
          textShadow: "0 0 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        Resource Library
      </h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-blue-400 p-2 w-full max-w-md bg-gray-100 text-blue-900 rounded-md shadow-sm"
          placeholder="Search resources..."
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-blue-400 p-2 w-full max-w-md bg-gray-100 text-blue-900 rounded-md shadow-sm"
        >
          <option value="All">All Types</option>
          <option value="📄">PDF</option>
          <option value="🎬">Video</option>
          <option value="📝">Article</option>
          <option value="Favorites">Favorites</option>
        </select>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 flex flex-col justify-between"
              style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div>
                <h2 className="text-lg font-medium mb-2 text-blue-900">{resource.title}</h2>
                <p className="mb-4 text-gray-600">Type: {resource.type}</p>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                  View
                </a>
                <button
                  onClick={() => handleFavoriteToggle(resource)}
                  className={`py-2 text-sm ${
                    favorites.includes(resource.id) ? "text-red-500" : "text-gray-500"
                  } hover:text-red-600`}
                >
                  {favorites.includes(resource.id) ? "Remove Favorite" : "Add Favorite"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No resources found. Try adjusting your search or filter.
          </p>
        )}
      </div>
    </div>
  );
}
