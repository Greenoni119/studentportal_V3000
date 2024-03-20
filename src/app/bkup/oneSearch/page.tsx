"use client";

import Image from "next/image";
import { Navbar } from "../../../components/Navbar";
import { Button } from "@/components/ui/button";

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
      {/* <header className="flex p-4 items-center">
        <Image
          src="/smccd-horizontal-blue.svg"
          alt="SMCCCD Logo"
          width={300}
          height={100}
          className="mr-10"
        />
        <Navbar />
        <Button variant="default" className="ml-auto">
          Need Help?
        </Button>
      </header> */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600  flex justify-center items-center h-32">
        <h1 className="text-7xl text-white">OneSearch</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>OneSearch: Integrated Library Discovery Platform</h1>
            <p>
              OneSearch is a cutting-edge integrated library discovery platform
              designed to streamline research processes, enhance access to
              academic resources, and support scholarly inquiry in educational
              institutions. Embraced by libraries and universities worldwide,
              OneSearch offers a unified search experience that enables
              students, faculty, and researchers to discover and access a vast
              array of scholarly materials from diverse sources and disciplines.
            </p>
            <h2>Key Features of OneSearch</h2>
            <p>
              OneSearch encompasses a variety of features aimed at facilitating
              efficient research and information discovery:
            </p>
            <ul>
              <li>
                <strong>Unified Search Interface: </strong> OneSearch provides
                users with a single, intuitive search interface that allows them
                to explore a wide range of library resources, including books,
                journals, articles, databases, and multimedia materials. By
                consolidating access to multiple resources in one platform,
                OneSearch simplifies the research process and saves users time
                and effort.
              </li>
              <li>
                <strong>Comprehensive Content Coverage: </strong> OneSearch
                offers access to a comprehensive collection of academic
                resources spanning various disciplines, subjects, and formats.
                Users can discover scholarly materials from the library&apos;s
                catalog, institutional repositories, online databases, and open
                access repositories, ensuring access to a wealth of information
                for their research needs.
              </li>
              <li>
                <strong>Advanced Search and Filtering Options:</strong>{" "}
                OneSearch provides users with advanced search and filtering
                options to refine their search results and locate relevant
                resources efficiently. Users can narrow down search results by
                criteria such as publication date, resource type, subject area,
                and language, enabling precise and targeted searches.
              </li>
            </ul>
            <h2>Benefits of Utilizing OneSearch</h2>
            <p>
              The adoption of OneSearch offers numerous benefits that contribute
              to the academic success and research productivity of students,
              faculty, and researchers:
            </p>
            <ul>
              <li>
                <strong>Streamlined Research Process:</strong> OneSearch
                streamlines the research process by providing users with a
                centralized platform for discovering and accessing scholarly
                materials. With its intuitive search interface and comprehensive
                content coverage, OneSearch empowers users to find relevant
                resources quickly and easily, facilitating efficient research
                workflows.
              </li>
              <li>
                <strong>Expanded Access to Academic Resources:</strong>{" "}
                OneSearch enhances access to academic resources by providing
                users with access to a wide range of materials from diverse
                sources and disciplines. Whether accessing materials from the
                library&apos;s collection, online databases, or open access
                repositories, users can discover a wealth of scholarly
                information to support their research and learning needs.
              </li>
              <li>
                <strong>Promotion of Information Literacy:</strong> OneSearch
                promotes information literacy by empowering users to develop
                critical thinking skills, evaluate information sources, and
                engage in scholarly inquiry. Through its user-friendly
                interface, advanced search capabilities, and access to curated
                resources, OneSearch supports users in navigating the complex
                landscape of scholarly communication and information discovery.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an era characterized by vast amounts of information and rapid
              technological advancements, OneSearch emerges as a vital tool for
              supporting research, scholarship, and learning in educational
              institutions. By providing users with a unified search experience,
              comprehensive content coverage, and advanced search capabilities,
              OneSearch facilitates efficient information discovery, promotes
              scholarly inquiry, and empowers users to access a wealth of
              academic resources to support their research and learning
              endeavors. Through continued innovation, integration, and
              collaboration with libraries and academic institutions, OneSearch
              remains at the forefront of transforming research and information
              discovery in the digital age.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
