import React from "react";

const Scholarships = () => {
  const scholarshipsData = [
    // Central Government Scholarships
    {
      category: "Central Government Scholarships",
      scholarships: [
        {
          title: "National Scholarship Portal (NSP)",
          description:
            "The NSP provides a wide range of scholarships for students across different levels of education, including pre-matric, post-matric, and merit-based scholarships for minorities and economically backward classes.",
          image: "https://scholarships.gov.in/public/assets2425/images/nsp-logo.svg",
          link: "https://scholarships.gov.in",
        },
        {
          title: "PM Scholarship Scheme",
          description:
            "This scheme offers scholarships to the dependents of ex-servicemen and widows of Indian Armed Forces personnel for technical and professional education.",
          image: "https://imgs.search.brave.com/kUDhr8L8yaGxvjS3pgTky3EtlDwEwKT4fxailfGEysQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90ZWFj/aGVyc2JhZGkuaW4v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDEvUHJpbWUtTWlu/aXN0ZXIlRTIlODAl/OTlzLVNjaG9sYXJz/aGlwLVNjaGVtZS5w/bmc",
          link: "https://www.desw.gov.in/scholarship",
        },
        {
          title: "AICTE Pragati Scholarship for Girls",
          description:
            "This scholarship is awarded to girl students pursuing technical education to help with tuition and academic expenses.",
          image: "https://imgs.search.brave.com/3102sqll5c_Nex6QqtCds0rZK4qc-IBNdhSHpM2e4as/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/M2E5OGQ3Y2EzNzQ5/N2IyNmU1YmEyMmMv/NjViODhmNDQ5OTUw/MDFiNjc3YjBlNjRl/X0FJQ1RFLmF2aWY",
          link: "https://www.aicte-india.org/schemes/students-development-schemes",
        },
        {
          title: "Central Sector Scholarship Scheme for College Students",
          description:
            "This scheme provides financial support to meritorious students from low-income families to meet day-to-day expenses during their undergraduate and postgraduate studies.",
          image: "https://files.oaiusercontent.com/file-JJ7iBio9kjoeFjhVxPT1se?se=2024-11-26T11%3A18%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7feb9bd1-0764-4682-ba2d-1ad45806e295.webp&sig=HsXSY39G0W9l2g2uZl7VT1ZU27aVPQD/m31UEeTTQA4%3D",
          link: "https://scholarships.gov.in",
        },
      ],
    },
    // State Government Scholarships
    {
      category: "State Government Scholarships",
      scholarships: [
        {
          title: "Maharashtra Scholarship Scheme",
          description:
            "The state of Maharashtra offers various scholarships for economically backward students, including the Rajarshi Shahu Maharaj Scholarship and Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna for hostel fees.",
          image: "https://imgs.search.brave.com/il86x5KU78uVvPKlIVsBQmxk06hTmRN7jRKhrdh-2zk/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9idWRk/eTRzdHVkeS5zMy5h/cC1zb3V0aGVhc3Qt/MS5hbWF6b25hd3Mu/Y29tL2FydGljbGUv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDUvMTAxNjQyNDUv/TWFoYXJhc2h0cmEt/U2Nob2xhcnNoaXAt/MjAyMi5qcGc",
          link: "https://mahadbtmahait.gov.in",
        },
        {
          title: "West Bengal Merit-cum-Means Scholarship",
          description:
            "This scheme provides financial aid to students from minority communities in West Bengal for pursuing higher education.",
          image: "https://imgs.search.brave.com/0LIxqehA-C46mff1E6tGc35eVHJmHxTALsQAcgj7wR4/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9kMnc3/bDFwNTlxa2wwci5j/bG91ZGZyb250Lm5l/dC9hcnRpY2xlL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAy/LzI4MTQ1NDIxL1Nj/aG9sYXJzaGlwcy1m/b3ItV2VzdC1CZW5n/YWwuanBn",
          link: "https://wbmdfcscholarship.gov.in",
        },
        {
          title: "Karnataka Vidyasiri Scholarship",
          description:
            "Vidyasiri is a popular scholarship scheme in Karnataka, offering support to SC/ST/OBC students pursuing higher education in recognized institutions.",
          image: "https://via.placeholder.com/400x300.png?text=Karnataka+Vidyasiri",
          link: "https://karepass.cgg.gov.in",
        },
        {
          title: "Kerala Post-Matric Scholarship",
          description:
            "Post-Matric Scholarship provided by the Kerala government offers financial assistance to students from minority communities pursuing post-secondary education.",
          image: "https://via.placeholder.com/400x300.png?text=Kerala+Scholarship",
          link: "https://dcescholarship.kerala.gov.in",
        },
      ],
    },
    // Private Scholarships
    {
      category: "Private Scholarships",
      scholarships: [
        {
          title: "Tata Trusts Scholarship",
          description:
            "Tata Trusts offers scholarships for undergraduate and postgraduate students in India, covering fields like engineering, medicine, law, and more.",
          image: "https://via.placeholder.com/400x300.png?text=Tata+Trusts",
          link: "https://www.tatatrusts.org",
        },
        {
          title: "Aditya Birla Scholarship",
          description:
            "This prestigious scholarship is awarded to the top students from institutions like IITs, IIMs, and other top law and business schools.",
          image: "https://via.placeholder.com/400x300.png?text=Aditya+Birla",
          link: "https://www.adityabirla.com/scholarships",
        },
        {
          title: "Reliance Foundation Scholarships",
          description:
            "Reliance Foundation offers scholarships to meritorious students in India in fields such as engineering, technology, and business management.",
          image: "https://via.placeholder.com/400x300.png?text=Reliance+Foundation",
          link: "https://www.reliancefoundation.org",
        },
        {
          title: "HDFC Educational Crisis Scholarship",
          description:
            "HDFC Bank provides financial assistance to students facing difficulties due to a family crisis or personal emergency, allowing them to continue their education without disruption.",
          image: "https://via.placeholder.com/400x300.png?text=HDFC+Scholarship",
          link: "https://www.hdfcbank.com",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-6 pb-10 px-8 bg-gradient-to-b from-gray-50 via-blue-100 to-white">
      <h1 className="text-4xl font-semibold text-center text-blue-900 mt-6 mb-6">
        Scholarships in India
      </h1>
      <p className="text-center max-w-4xl mx-auto mb-8 text-gray-700">
        Explore various scholarships provided by central and state governments,
        as well as private organizations, to support students in achieving their academic goals.
      </p>

      {scholarshipsData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{section.category}</h2>
          {section.scholarships.map((scholarship, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center lg:gap-10`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/3">
                <img
                  src={scholarship.image}
                  alt={scholarship.title}
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
              </div>

              {/* Description Section */}
              <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {scholarship.title}
                </h3>
                <p className="text-gray-700 mb-4">{scholarship.description}</p>
                <a
                  href={scholarship.link}
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

export default Scholarships;
