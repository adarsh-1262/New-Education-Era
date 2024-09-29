import React from 'react';

const Loans = () => {
  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-4xl font-semibold text-center mt-12 mb-6">Education Loans in India</h1>
      <p className="text-center max-w-4xl mx-auto mb-8">
        Explore various education loan options available for students in India to help you finance your education,
        understand eligibility criteria, interest rates, and the application process.
      </p>

      <div className="space-y-8">
        {/* Education Loans */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Types of Education Loans</h2>
          <ul className="space-y-4">
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-purple-700">
              <h3 className="text-xl font-semibold">Bank Loans</h3>
              <p>Many banks in India offer education loans with varying interest rates and repayment terms. They typically cover tuition fees, accommodation, and other expenses.</p>
              <a href="https://www.sbi.co.in/web/home/footer/education-loan" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-purple-700">
              <h3 className="text-xl font-semibold">Government Schemes</h3>
              <p>The Indian government provides several schemes for education loans with subsidies and lower interest rates, such as the Central Sector Scheme of Scholarships.</p>
              <a href="https://www.education.gov.in/en" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-purple-700">
              <h3 className="text-xl font-semibold">Private Lenders</h3>
              <p>Private financial institutions offer education loans with flexible repayment options and may require less documentation than traditional banks.</p>
              <a href="https://www.zerodha.com/z-connect/queries/information-on-education-loans" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
            <li className="bg-gradient-to-tr from-[#89F7FE] to-[#66A6FF] text-gray-600 py-4 px-6 rounded-lg shadow-md hover:bg-purple-700">
              <h3 className="text-xl font-semibold">Student Loans for Foreign Studies</h3>
              <p>Students planning to study abroad can avail of specific loans that cover tuition fees, living expenses, and travel costs.</p>
              <a href="https://www.hdfcbank.com/personal/payments/education-loan-foreign-studies" target="_blank" rel="noreferrer" className="underline text-blue-400">Learn More</a>
            </li>
          </ul>
        </section>

        {/* Eligibility and Process */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
          <p>
            Eligibility for education loans varies by lender, but generally includes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>A minimum age of 18 years.</li>
            <li>Admission to a recognized educational institution.</li>
            <li>Proof of income or a co-signer with a stable income.</li>
            <li>Good credit score (for certain lenders).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Loan Application Process</h2>
          <p>
            The process for applying for an education loan typically involves:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Research and select the loan type and lender.</li>
            <li>Gather necessary documents (identity proof, admission letter, income proof).</li>
            <li>Fill out the loan application form and submit it to the lender.</li>
            <li>Wait for loan approval and disbursement details.</li>
          </ol>
        </section>

        {/* Repayment Information */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Repayment Terms</h2>
          <p>
            Repayment terms vary by lender but typically include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Repayment period ranging from 5 to 15 years.</li>
            <li>Grace periods after course completion (usually 6 months to 1 year).</li>
            <li>EMI options based on the total loan amount and interest rates.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Loans;
