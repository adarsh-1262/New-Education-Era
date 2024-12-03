import React from "react";

const Grants = () => {
  const grantsData = [
    {
      category: "Government Grants",
      grants: [
        {
          title: "National Research Development Corporation (NRDC) Grants",
          description:
            "NRDC provides grants for innovative projects in science and technology, encouraging researchers and entrepreneurs to bring their ideas to life.",
          image: "https://via.placeholder.com/400x300.png?text=NRDC+Grants",
          link: "http://www.nrdcindia.com",
        },
        {
          title: "Technology Development Board (TDB) Grant",
          description:
            "TDB offers financial assistance to Indian industries and entrepreneurs for developing and commercializing indigenous technologies.",
          image: "https://via.placeholder.com/400x300.png?text=TDB+Grant",
          link: "http://www.tdb.gov.in",
        },
        {
          title: "Department of Science and Technology (DST) Innovation Grants",
          description:
            "DST provides grants to support research and innovation in various scientific fields, with a focus on promoting entrepreneurship and R&D activities in India.",
          image: "https://via.placeholder.com/400x300.png?text=DST+Innovation+Grants",
          link: "https://dst.gov.in",
        },
        {
          title: "PMEGP (Prime Minister’s Employment Generation Programme)",
          description:
            "This grant is aimed at creating employment opportunities in rural and urban areas through self-employment ventures, supported by the Government of India.",
          image: "https://via.placeholder.com/400x300.png?text=PMEGP",
          link: "https://www.kviconline.gov.in",
        },
      ],
    },
    {
      category: "Private Organization Grants",
      grants: [
        {
          title: "Tata Trusts Research Grants",
          description:
            "Tata Trusts provides grants for research projects in fields such as healthcare, technology, education, and rural development.",
          image: "https://via.placeholder.com/400x300.png?text=Tata+Trusts+Grant",
          link: "https://www.tatatrusts.org",
        },
        {
          title: "Ford Foundation India Grants",
          description:
            "Ford Foundation supports organizations and individuals working towards social justice, education, and sustainable development in India.",
          image: "https://via.placeholder.com/400x300.png?text=Ford+Foundation+Grant",
          link: "https://www.fordfoundation.org",
        },
        {
          title: "Azim Premji Foundation Grants",
          description:
            "Azim Premji Foundation provides grants for educational projects aimed at improving primary and secondary education in rural India.",
          image: "https://via.placeholder.com/400x300.png?text=Azim+Premji+Grants",
          link: "https://azimpremjifoundation.org",
        },
        {
          title: "Infosys Foundation Grants",
          description:
            "Infosys Foundation offers grants to support initiatives in education, healthcare, rural development, and the arts in India.",
          image: "https://via.placeholder.com/400x300.png?text=Infosys+Foundation+Grants",
          link: "https://www.infosys.com/infosys-foundation",
        },
      ],
    },
    {
      category: "Educational and Research Grants",
      grants: [
        {
          title: "Fulbright-Nehru Research Grants",
          description:
            "These grants support Indian researchers and scholars in pursuing educational projects in the U.S. and fostering academic exchanges between the two countries.",
          image: "https://via.placeholder.com/400x300.png?text=Fulbright+Nehru+Grants",
          link: "https://www.usief.org.in/Fulbright-Nehru-Grants.aspx",
        },
        {
          title: "Wellcome Trust India Alliance Grants",
          description:
            "The Wellcome Trust provides grants to researchers in biomedical science, healthcare, and related fields, aimed at improving public health in India.",
          image: "https://via.placeholder.com/400x300.png?text=Wellcome+Trust",
          link: "https://www.indiaalliance.org",
        },
        {
          title: "DBT-Research Grant (Department of Biotechnology)",
          description:
            "The DBT provides grants to promote research and development in biotechnology and its applications, focusing on healthcare, agriculture, and environmental sustainability.",
          image: "https://via.placeholder.com/400x300.png?text=DBT+Grants",
          link: "https://dbtindia.gov.in",
        },
        {
          title: "ICMR (Indian Council of Medical Research) Research Grants",
          description:
            "ICMR provides grants to support biomedical research projects, focusing on enhancing healthcare services and innovations in India.",
          image: "https://via.placeholder.com/400x300.png?text=ICMR+Grants",
          link: "https://www.icmr.gov.in",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-6 pb-10 px-8 bg-gradient-to-b from-gray-50 via-blue-100 to-white">
      <h1 className="text-4xl font-semibold text-center text-blue-900 mt-6 mb-6">
        Grants in India
      </h1>
      <p className="text-center max-w-4xl mx-auto mb-8 text-gray-700">
        Explore various grants offered by government and private organizations in India, providing financial
        assistance for research, entrepreneurship, education, and community development.
      </p>

      {grantsData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{section.category}</h2>
          {section.grants.map((grant, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center lg:gap-10`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/3">
                <img
                  src={grant.image}
                  alt={grant.title}
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
              </div>

              {/* Description Section */}
              <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {grant.title}
                </h3>
                <p className="text-gray-700 mb-4">{grant.description}</p>
                <a
                  href={grant.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grants;
