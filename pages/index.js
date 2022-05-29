import { NextSeo } from "next-seo";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import AboutUs from "../components/Home/AboutUs";
import Projects from "../components/Home/Projects";
import Jobs from "../components/Home/Jobs";


export default function Home({services, projects}) {
  return (
    <>
      <NextSeo 
        title="Bienvenidos | CursoSoft"
        description="Pagina de inicio de nuestro sitio CursoSoft"
      />

      <main>
        <Banner />
        <Services services={services} />
        <AboutUs />
        <Projects projects={projects} />
        <Jobs />
      </main>
    </>
    
  )
}

// Request from the backend
export async function getStaticProps() {
  const resp = await fetch("http://cursosoft.vercel.app/api/services");
  const services = await resp.json();

  const resp2 = await fetch("http://cursosoft.vercel.app/api/last-projects");
  const projects = await resp2.json();

  return {
    props: {
      services: services,
      projects: projects
    }
  }
}
