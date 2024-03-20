"use client";

const portalItems = [
  {
    title: "Canvas",
    content: "Dive into course materials, submit tasks, and track grades.",
    imgUrl: "/canvas.webp",
    imgHeight: 321,
    imgWidth: 1095,
    targetUrl: "https://my.smccd.edu/canvas/",
  },
  {
    title: "WebSmart",
    content: "Manage your student account, enroll in classes, and view aid.",
    imgUrl: "/websmart.png",
    imgHeight: 200,
    imgWidth: 528,
    targetUrl: "https://websmart.smccd.edu/",
  },
  {
    title: "WebSchedule",
    content: "Explore the class schedule, find your next course, and more.",
    imgUrl: "/webschedule.png",
    imgHeight: 100,
    imgWidth: 264,
    targetUrl: "https://webschedule.smccd.edu/",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600  flex justify-center items-center h-32">
        <h1 className="text-7xl text-white">DegreeWorks</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>DegreeWorks Academic Planning System</h1>
            <p>
              The DegreeWorks Academic Planning System is a comprehensive and
              intuitive tool designed to empower students, advisors, and
              administrators in their academic planning and progress tracking
              efforts. Embraced by educational institutions worldwide,
              DegreeWorks offers a range of features tailored to meet the
              diverse needs of students navigating their academic journey and
              pursuing their educational goals.
            </p>
            <h2>Key Features of DegreeWorks</h2>
            <p>
              DegreeWorks encompasses a variety of features aimed at
              facilitating academic planning, progress tracking, and degree
              completion:
            </p>
            <ul>
              <li>
                <strong>Degree Audit and Progress Tracking:</strong> DegreeWorks
                provides students with a detailed degree audit, outlining their
                progress towards graduation and highlighting remaining
                requirements. Through interactive visualizations and
                comprehensive reports, students can track their academic
                progress, identify areas of focus, and stay on track towards
                degree completion.
              </li>
              <li>
                <strong>Course Planning and Registration:</strong> DegreeWorks
                offers tools for course planning and registration, allowing
                students to explore degree requirements, plan their course
                schedules, and register for classes. Integration with the
                institution&apos;s course catalog and academic policies ensures
                accuracy and alignment with program requirements.
              </li>
              <li>
                <strong>What-If Analysis:</strong>DegreeWorks enables students
                to perform What-If analysis scenarios, exploring alternative
                majors, minors, or concentrations and assessing the impact on
                their academic progress and degree completion timeline. This
                feature empowers students to make informed decisions about their
                academic pathways and explore various academic opportunities.
              </li>
            </ul>
            <h2>Benefits of Utilizing DegreeWorks</h2>
            <p>
              The adoption of DegreeWorks offers numerous benefits that
              contribute to student success and academic achievement:
            </p>
            <ul>
              <li>
                <strong>Enhanced Academic Planning:</strong> DegreeWorks
                streamlines the academic planning process, providing students
                with a clear roadmap towards degree completion. By visualizing
                degree requirements, tracking progress, and identifying
                potential academic pathways, students can make informed
                decisions about their course selection and academic goals.
              </li>
              <li>
                <strong>Improved Advising and Support:</strong>DegreeWorks
                facilitates productive advising sessions by providing advisors
                with comprehensive insights into students&apos; academic
                progress and degree requirements. Advisors can collaborate with
                students to develop personalized academic plans, address
                academic concerns, and support timely degree completion.
              </li>
              <li>
                <strong>Efficient Degree Completion:</strong> DegreeWorks helps
                students optimize their course schedules and academic pathways,
                leading to efficient degree completion and timely graduation. By
                identifying transfer credits, evaluating course equivalencies,
                and prioritizing degree requirements, students can minimize
                unnecessary coursework and maximize their academic efficiency.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by complexity and
              diversity, the DegreeWorks Academic Planning System emerges as a
              vital tool for students, advisors, and administrators alike. By
              providing intuitive features for degree audit, course planning,
              and progress tracking, DegreeWorks empowers students to navigate
              their academic journey with confidence, clarity, and efficiency.
              Through collaborative advising, personalized academic planning,
              and streamlined degree completion processes, DegreeWorks supports
              student success and enhances the overall academic experience
              within educational institutions.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
