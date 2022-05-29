import { NextSeo } from "next-seo";
import Project from "../components/Home/Project";

const Proyectos = ({ projects }) => {
  return (
    <>
      <NextSeo 
        title="Proyectos | CursoSoft"
        description="Los proyectos de la empresa CursoSoft"
      />

      <main className="main">
        <section className="projects-section section-container">
          <h1>Nuestros Proyectos</h1>
          <div className="content-wrapper">
            {
              projects.map(proj => (
                <Project
                  key={proj.id}
                  title={proj.title}
                  image={proj.image}
                  description={proj.description}
                />
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const resp = await fetch("http://localhost:3050/projects");
  const projects = await resp.json();

  return {
    props: {
      projects
    }
  }
}


export default Proyectos;