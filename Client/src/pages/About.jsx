import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-100 to-white text-gray-800 py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">About EduHub</h1>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Welcome to EduHub</h2>
          <p className="leading-relaxed">
            EduHub is more than a platform; it’s a movement to redefine the educational landscape by tackling the 
            challenges of dropout rates, accessibility, and engagement. Our innovative, student-focused solutions 
            address critical gaps in traditional education systems, creating a brighter and more inclusive future 
            for learners at all stages.
          </p>
        </section>

        {/* Mission and Vision */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission and Vision</h2>
          <p className="leading-relaxed">
            Our mission is to empower students, educators, and parents through technology-driven, personalized learning 
            tools. We envision a world where every student has the opportunity to succeed, regardless of their background 
            or circumstances. By harnessing the power of AI and community engagement, we aim to create an ecosystem 
            where education is accessible, flexible, and impactful.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Understanding the Challenge</h2>
          <p className="leading-relaxed">
            The modern educational system faces significant hurdles, including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              High dropout rates caused by financial difficulties, lack of resources, and limited engagement.
            </li>
            <li>
              Unequal access to quality education, particularly in rural and underserved areas.
            </li>
            <li>
              Limited involvement of parents and guardians in the educational journey.
            </li>
            <li>
              Rigid schooling structures that fail to accommodate diverse student needs.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed">
            EduHub was born to address these issues, offering solutions that combine innovation, technology, and compassion 
            to create a supportive and effective educational framework.
          </p>
        </section>

        {/* Solutions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How We Solve the Problem</h2>
          <p className="leading-relaxed">
            At EduHub, we offer a range of solutions tailored to meet the diverse needs of students, parents, and educators:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>AI-Driven Early Warning System:</strong> Identifies at-risk students for timely interventions.
            </li>
            <li>
              <strong>Community Learning Hub Platform:</strong> Brings digital resources, virtual mentoring, and online 
              classes to underserved areas.
            </li>
            <li>
              <strong>Mobile Learning Application:</strong> Delivers personalized, interactive content and tracks student 
              progress, even offline.
            </li>
            <li>
              <strong>Parental Engagement Portal:</strong> Strengthens collaboration between parents and teachers, 
              providing tools to monitor and support student progress.
            </li>
            <li>
              <strong>Flexible Schooling Management System:</strong> Supports part-time programs and monitors student 
              performance in alternative learning setups.
            </li>
            <li>
              <strong>Student Support and Engagement App:</strong> Offers counseling, goal-setting tools, motivational 
              content, and engagement tracking to ensure holistic development.
            </li>
          </ul>
        </section>

        {/* Impact */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">The Impact We Create</h2>
          <p className="leading-relaxed">
            EduHub is committed to creating a long-lasting impact on students, institutions, and the educational ecosystem. 
            Our solutions have already begun to transform the way education is delivered:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reduced dropout rates by providing timely support to students in need.</li>
            <li>Improved access to quality education in rural and underserved regions.</li>
            <li>Enhanced collaboration between parents, students, and educators for better outcomes.</li>
            <li>Equipped institutions with data-driven insights to make informed decisions.</li>
          </ul>
        </section>

        {/* Our Values */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <p className="leading-relaxed">
            At the heart of EduHub lies a commitment to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Inclusivity:</strong> Ensuring education is accessible to all, regardless of socio-economic 
              background.
            </li>
            <li>
              <strong>Innovation:</strong> Leveraging cutting-edge technology to create impactful solutions.
            </li>
            <li>
              <strong>Empowerment:</strong> Equipping students, parents, and educators with the tools they need to succeed.
            </li>
            <li>
              <strong>Sustainability:</strong> Building scalable, adaptable solutions that stand the test of time.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Us in Revolutionizing Education</h2>
          <p className="leading-relaxed">
            Together, we can make education more accessible, impactful, and inclusive. Join EduHub in our mission to 
            empower learners, bridge educational gaps, and create a brighter future for generations to come.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
