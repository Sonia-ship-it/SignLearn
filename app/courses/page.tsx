import Header from "../components/Header";
import Footer from "../components/Footer";
import CoursesHero from "../components/courses/CoursesHero";
import CourseCatalog from "../components/courses/CourseCatalog";
import JourneyToFluency from "../components/courses/JourneyToFluency";
import CoursesCTA from "../components/courses/CoursesCTA";

export default function Courses() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <CoursesHero />
        <CourseCatalog />
        <JourneyToFluency />
        <CoursesCTA />
      </main>
      <Footer />
    </div>
  );
}
