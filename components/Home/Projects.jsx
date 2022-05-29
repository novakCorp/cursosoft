import Project from "./Project";

const Projects = ({projects}) => {
    return (
        <section className="section-container last-projects">
          <h2>Últimos proyectos</h2>
          <div className="content-wrapper">
            { projects && projects.map((proy) => (
              <Project
                key={proy.id} 
                title={proy.title} 
                description={proy.description} 
                image={proy.image} 
              />
            ))}
          </div>
        </section>
    )
}

export default Projects;