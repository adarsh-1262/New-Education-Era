import React from 'react';

const Grants = () => {
  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-4xl font-semibold text-center mt-12 mb-6">Grants in India</h1>
      <p className="text-center max-w-4xl mx-auto mb-8">
        Explore various grants offered by government and private organizations in India, providing financial 
        assistance for research, entrepreneurship, education, and community development.
      </p>

      <div className="space-y-8">
        {/* Government Grants */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Government Grants</h2>
          <ul className="space-y-4">
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-green-700">
              <h3 className="text-xl font-semibold">National Research Development Corporation (NRDC) Grants</h3>
              <p>NRDC provides grants for innovative projects in science and technology, encouraging researchers and entrepreneurs to bring their ideas to life.</p>
              <a href="http://www.nrdcindia.com" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-green-700">
              <h3 className="text-xl font-semibold">Technology Development Board (TDB) Grant</h3>
              <p>TDB offers financial assistance to Indian industries and entrepreneurs for developing and commercializing indigenous technologies.</p>
              <a href="http://www.tdb.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-green-700">
              <h3 className="text-xl font-semibold">Department of Science and Technology (DST) Innovation Grants</h3>
              <p>DST provides grants to support research and innovation in various scientific fields, with a focus on promoting entrepreneurship and R&D activities in India.</p>
              <a href="https://dst.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-green-700">
              <h3 className="text-xl font-semibold">PMEGP (Prime Minister’s Employment Generation Programme)</h3>
              <p>This grant is aimed at creating employment opportunities in rural and urban areas through self-employment ventures, supported by the Government of India.</p>
              <a href="https://www.kviconline.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
          </ul>
        </section>

        {/* Private Organization Grants */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Private Organization Grants</h2>
          <ul className="space-y-4">
            <li className="bg-gradient-to-tr from-[#92FE9D] to-[#00C9FF] text-gray-700 py-4 px-6 rounded-lg shadow-md hover:bg-blue-700">
              <h3 className="text-xl font-semibold">Tata Trusts Research Grants</h3>
              <p>Tata Trusts provides grants for research projects in fields such as healthcare, technology, education, and rural development.</p>
              <a href="https://www.tatatrusts.org" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#92FE9D] to-[#00C9FF] text-gray-700 py-4 px-6 rounded-lg shadow-md hover:bg-blue-700">
              <h3 className="text-xl font-semibold">Ford Foundation India Grants</h3>
              <p>Ford Foundation supports organizations and individuals working towards social justice, education, and sustainable development in India.</p>
              <a href="https://www.fordfoundation.org" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#92FE9D] to-[#00C9FF] text-gray-700 py-4 px-6 rounded-lg shadow-md hover:bg-blue-700">
              <h3 className="text-xl font-semibold">Azim Premji Foundation Grants</h3>
              <p>Azim Premji Foundation provides grants for educational projects aimed at improving primary and secondary education in rural India.</p>
              <a href="https://azimpremjifoundation.org" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#92FE9D] to-[#00C9FF] text-gray-700 py-4 px-6 rounded-lg shadow-md hover:bg-blue-700">
              <h3 className="text-xl font-semibold">Infosys Foundation Grants</h3>
              <p>Infosys Foundation offers grants to support initiatives in education, healthcare, rural development, and the arts in India.</p>
              <a href="https://www.infosys.com/infosys-foundation" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
          </ul>
        </section>

        {/* Educational and Research Grants */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Educational and Research Grants</h2>
          <ul className="space-y-4">
            <li className="bg-gradient-to-l from-[#6C87BE] to-[#133987] text-gray-400 py-4 px-6 rounded-lg shadow-md hover:bg-red-700">
              <h3 className="text-xl font-semibold">Fulbright-Nehru Research Grants</h3>
              <p>These grants support Indian researchers and scholars in pursuing educational projects in the U.S. and fostering academic exchanges between the two countries.</p>
              <a href="https://www.usief.org.in/Fulbright-Nehru-Grants.aspx" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-l from-[#6C87BE] to-[#133987] text-gray-400 py-4 px-6 rounded-lg shadow-md hover:bg-red-700">
              <h3 className="text-xl font-semibold">Wellcome Trust India Alliance Grants</h3>
              <p>The Wellcome Trust provides grants to researchers in biomedical science, healthcare, and related fields, aimed at improving public health in India.</p>
              <a href="https://www.indiaalliance.org" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-l from-[#6C87BE] to-[#133987] text-gray-400 py-4 px-6 rounded-lg shadow-md hover:bg-red-700">
              <h3 className="text-xl font-semibold">DBT-Research Grant (Department of Biotechnology)</h3>
              <p>The DBT provides grants to promote research and development in biotechnology and its applications, focusing on healthcare, agriculture, and environmental sustainability.</p>
              <a href="https://dbtindia.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-l from-[#6C87BE] to-[#133987] text-gray-400 py-4 px-6 rounded-lg shadow-md hover:bg-red-700">
              <h3 className="text-xl font-semibold">ICMR (Indian Council of Medical Research) Research Grants</h3>
              <p>ICMR provides grants to support biomedical research projects, focusing on enhancing healthcare services and innovations in India.</p>
              <a href="https://www.icmr.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Grants;
