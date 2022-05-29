const Projects = () => {
    return (
        <section className="section-container last-projects">
          <h2>Últimos proyectos</h2>
          <div className="content-wrapper">
            <a href="#" className="project-item">
              <article>
                <div>
                  <h4>Titulo proyecto</h4>
                  <p>Descripción proyecto</p>
                </div>
                <div className="image-container">
                  <img src="/images/project-1.jpg" alt="Proyecto 1" />
                </div>
              </article>
            </a>
            <a href="#" className="project-item">
              <article>
                <div>
                  <h4>Titulo proyecto</h4>
                  <p>Descripción proyecto</p>
                </div>
                <div className="image-container">
                  <img src="/images/project-2.jpg" alt="Proyecto 2" />
                </div>
              </article>
            </a>
            <a href="#" className="project-item">
              <article>
                <div>
                  <h4>Titulo proyecto</h4>
                  <p>Descripción proyecto</p>
                </div>
                <div className="image-container">
                  <img src="/images/project-3.jpg" alt="Proyecto 3" />
                </div>
              </article>
            </a>
            <a href="#" className="project-item">
              <article>
                <div>
                  <h4>Titulo proyecto</h4>
                  <p>Descripción proyecto</p>
                </div>
                <div className="image-container">
                  <img src="/images/project-4.jpg" alt="Proyecto 4" />
                </div>
              </article>
            </a>
          </div>
        </section>
    )
}

export default Projects;