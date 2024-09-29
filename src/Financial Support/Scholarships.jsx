import React from 'react';

const Scholarships = () => {
  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-4xl font-semibold text-center mt-12 mb-6">Scholarships in India</h1>
      <p className="text-center max-w-4xl mx-auto mb-8">
        Explore various scholarships provided by the central and state governments as well as private organizations 
        to support students in achieving their academic goals.
      </p>

      <div className="space-y-8">
        {/* Central Government Scholarships */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Central Government Scholarships</h2>
          <ul className="space-y-4">
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-green-700">
              <h3 className="text-xl font-semibold">National Scholarship Portal (NSP)</h3>
              <p>The NSP provides a wide range of scholarships for students across different levels of education, including pre-matric, post-matric, and merit-based scholarships for minorities and economically backward classes.</p>
              <a href="https://scholarships.gov.in" target="_blank" rel="noreferrer" className="underline text-black">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-green-700">
              <h3 className="text-xl font-semibold">PM Scholarship Scheme</h3>
              <p>This scheme offers scholarships to the dependents of ex-servicemen and widows of Indian Armed Forces personnel for technical and professional education.</p>
              <a href="https://www.desw.gov.in/scholarship" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600  py-4 px-6 rounded-lg shadow-md hover:bg-green-700">
              <h3 className="text-xl font-semibold">AICTE Pragati Scholarship for Girls</h3>
              <p>This scholarship is awarded to girl students pursuing technical education to help with tuition and academic expenses.</p>
              <a href="https://www.aicte-india.org/schemes/students-development-schemes" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600  py-4 px-6 rounded-lg shadow-md hover:bg-green-700">
              <h3 className="text-xl font-semibold">Central Sector Scholarship Scheme for College Students</h3>
              <p>This scheme provides financial support to meritorious students from low-income families to meet day-to-day expenses during their undergraduate and postgraduate studies.</p>
              <a href="https://scholarships.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
          </ul>
        </section>

        {/* State Government Scholarships */}
        <section>
          <h2 className="text-2xl font-bold mb-4">State Government Scholarships</h2>
          <ul className="space-y-4">
            <li className="bg-gradient-to-tr from-[#92FE9D] to-[#00C9FF] text-gray-700  py-4 px-6 rounded-lg shadow-md hover:bg-blue-700">
              <h3 className="text-xl font-semibold">Maharashtra Scholarship Scheme</h3>
              <p>The state of Maharashtra offers various scholarships for economically backward students, including the Rajarshi Shahu Maharaj Scholarship and Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna for hostel fees.</p>
              <a href="https://mahadbtmahait.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#92FE9D] to-[#00C9FF] text-gray-700 py-4 px-6 rounded-lg shadow-md hover:bg-blue-700">
              <h3 className="text-xl font-semibold">West Bengal Merit-cum-Means Scholarship</h3>
              <p>This scheme provides financial aid to students from minority communities in West Bengal for pursuing higher education.</p>
              <a href="https://wbmdfcscholarship.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#92FE9D] to-[#00C9FF] text-gray-700 py-4 px-6 rounded-lg shadow-md hover:bg-blue-700">
              <h3 className="text-xl font-semibold">Karnataka Vidyasiri Scholarship</h3>
              <p>Vidyasiri is a popular scholarship scheme in Karnataka, offering support to SC/ST/OBC students pursuing higher education in recognized institutions.</p>
              <a href="https://karepass.cgg.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#92FE9D] to-[#00C9FF] text-gray-700 py-4 px-6 rounded-lg shadow-md hover:bg-blue-700">
              <h3 className="text-xl font-semibold">Kerala Post-Matric Scholarship</h3>
              <p>Post-Matric Scholarship provided by the Kerala government offers financial assistance to students from minority communities pursuing post-secondary education.</p>
              <a href="https://dcescholarship.kerala.gov.in" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
          </ul>
        </section>

        {/* Private Scholarships */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Private Scholarships</h2>
          <ul className="space-y-4">
            <li className="bg-gradient-to-l from-[#6C87BE] to-[#133987] text-gray-400 py-4 px-6 rounded-lg shadow-md hover:bg-red-700">
              <h3 className="text-xl font-semibold">Tata Trusts Scholarship</h3>
              <p>Tata Trusts offers scholarships for undergraduate and postgraduate students in India, covering fields like engineering, medicine, law, and more.</p>
              <a href="https://www.tatatrusts.org" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-l from-[#6C87BE] to-[#133987] text-gray-400 py-4 px-6 rounded-lg shadow-md hover:bg-red-700">
              <h3 className="text-xl font-semibold">Aditya Birla Scholarship</h3>
              <p>This prestigious scholarship is awarded to the top students from institutions like IITs, IIMs, and other top law and business schools.</p>
              <a href="https://www.adityabirla.com/scholarships" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-l from-[#6C87BE] to-[#133987] text-gray-400 py-4 px-6 rounded-lg shadow-md hover:bg-red-700">
              <h3 className="text-xl font-semibold">Reliance Foundation Scholarships</h3>
              <p>Reliance Foundation offers scholarships to meritorious students in India in fields such as engineering, technology, and business management.</p>
              <a href="https://www.reliancefoundation.org" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-l from-[#6C87BE] to-[#133987] text-gray-400 py-4 px-6 rounded-lg shadow-md hover:bg-red-700">
              <h3 className="text-xl font-semibold">HDFC Educational Crisis Scholarship</h3>
              <p>HDFC Bank provides financial assistance to students facing difficulties due to a family crisis or personal emergency, allowing them to continue their education without disruption.</p>
              <a href="https://www.hdfcbank.com" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Scholarships;
