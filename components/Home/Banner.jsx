const Banner = () => {
    return (
        <section className="main-banner section-container">
          <div className="content-wrapper content">
            <div className="container">
              <h1 className="title">Bienvenidos a EDsoft</h1>
              <p className="subtitle">Necesitas acesoramiento urgente!!! Nosotros te podemos ayudar en la construcción de tu sitio web.</p>
              <div>
                <a className="button white" href="/contacto.html">Escríbenos ya mismo!</a>
              </div>
            </div>
            <div className="container">
              <img className="image" src="/images/computer.svg" alt="Computadora EDsoft" />
            </div>
          </div>
        </section>
    )
}

export default Banner;