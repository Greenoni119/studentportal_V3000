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
        <h1 className="text-7xl text-white">Rave Mobile</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1>
              Rave Mobile Safety: Emergency Notification and Communication
              Platform
            </h1>
            <p>
              Rave Mobile Safety is a leading emergency notification and
              communication platform designed to enhance safety and security in
              educational institutions. Trusted by schools, colleges, and
              universities worldwide, Rave Mobile Safety offers a comprehensive
              suite of tools and features to facilitate rapid emergency
              response, communication, and coordination during critical
              incidents.
            </p>
            <h2>Key Features of Rave Mobile</h2>
            <p>
              Rave Mobile Safety encompasses a variety of features aimed at
              supporting emergency preparedness and response:
            </p>
            <ul>
              <li>
                <strong>Emergency Alerts and Notifications: </strong> Rave
                Mobile Safety enables institutions to send emergency alerts and
                notifications to students, faculty, and staff via multiple
                communication channels, including text messages, emails, voice
                calls, and mobile app notifications. Alerts can be customized
                based on the nature of the emergency, ensuring timely
                dissemination of critical information.
              </li>
              <li>
                <strong>Two-Way Communication:</strong> Rave Mobile Safety
                facilitates two-way communication between administrators and the
                campus community during emergencies. Users can reply to alerts,
                report their status, and provide additional information to aid
                in emergency response efforts, fostering collaboration and
                coordination among stakeholders.
              </li>
              <li>
                <strong>Geographic Targeting and Location-Based Alerts:</strong>{" "}
                Rave Mobile Safety offers geofencing capabilities that allow
                institutions to target emergency alerts and notifications to
                specific geographic areas or campus locations. This ensures that
                individuals receive relevant information based on their
                proximity to the incident, enhancing situational awareness and
                response effectiveness.
              </li>
            </ul>
            <h2>Benefits of Utilizing Rave Mobile Safety</h2>
            <p>
              The adoption of Rave Mobile Safety offers numerous benefits that
              contribute to enhanced safety, security, and emergency
              preparedness:
            </p>
            <ul>
              <li>
                <strong>Rapid Emergency Response:</strong> Rave Mobile Safety
                enables institutions to initiate rapid emergency response
                procedures and communicate critical information to the campus
                community within seconds. By leveraging multiple communication
                channels and customizable alerting options, Rave Mobile Safety
                helps minimize response times and mitigate the impact of
                emergencies.
              </li>
              <li>
                <strong>Enhanced Situational Awareness:</strong> Rave Mobile
                Safety enhances situational awareness by providing real-time
                updates and information during emergencies. Users can receive
                timely alerts, access emergency resources, and stay informed
                about evolving situations, enabling them to make informed
                decisions and take appropriate actions to ensure their safety.
              </li>
              <li>
                <strong>Community Engagement and Support:</strong> Rave Mobile
                Safety fosters community engagement and support by facilitating
                two-way communication between administrators and the campus
                community. By empowering individuals to report incidents,
                request assistance, and provide feedback, Rave Mobile Safety
                promotes a culture of safety, collaboration, and shared
                responsibility within the institution.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              In an educational landscape characterized by evolving safety
              threats and emergency risks, Rave Mobile Safety emerges as a
              critical tool for enhancing emergency preparedness, response, and
              communication. By providing institutions with a comprehensive
              platform for delivering emergency alerts, facilitating two-way
              communication, and enhancing situational awareness, Rave Mobile
              Safety helps create safer and more resilient campus environments.
              Through ongoing collaboration, training, and engagement with
              stakeholders, Rave Mobile Safety remains committed to supporting
              institutions in their efforts to prioritize safety and security
              for students, faculty, and staff.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
