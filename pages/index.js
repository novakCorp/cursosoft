import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import AboutUs from "../components/Home/AboutUs";
import Projects from "../components/Home/Projects";
import Jobs from "../components/Home/Jobs";

export default function Home({services}) {
  return (
    <main>
      <Banner />
      <Services services={services} />
      <AboutUs />
      <Projects />
      <Jobs />
    </main>
  )
}

// Request from the backend
export async function getStaticProps() {
  const resp = await fetch("http://localhost:3050/services");
  const services = await resp.json();

  return {
    props: {
      services: services
    }
  }
}
