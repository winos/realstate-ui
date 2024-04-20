import Image from "next/image";
import Link from "next/link";
import heroIllustration from "/public/images/hero/hero-illustration.png";

const Hero = () => {
  return (
    <section className="hero hero__bg pos__rel over__hi bg__img">
      <div className="container">
        <div className="hero__area">
          <div className="row">
            <div className="col-lg-6 col-xxl-5">
              <div className="hero__content">
                <h5 className="neutral-top">Encuentra tu inversión ideal</h5>
                <p style={{ marginBottom: '2rem' }}></p>
                <h3>
                 Invierte en tu casa ideal <span> o compra una parte de ella </span>{" "}
                </h3>
                <p style={{ marginBottom: '1rem' }}></p>
                <p className="primary neutral-bottom">
                Compra fracciones de propiedades en alquiler, gana ingresos mensuales y mira cómo crece tu dinero
                </p>
                <p style={{ marginBottom: '2rem' }}></p>

                
             
            

                {/* Botones call to Action */}
                <div className="hero__cta__group style={{ marginTop: 'auto' }} " > 
                  <Link href="/property" className="button button--effect" style={{backgroundColor: '#3D8AA9'}} >
                    
                    Buscar Propiedad
                  </Link>
                  <Link
                    href="/business-loan"
                    className="button button--secondary button--effect"
                  >
                    Que es LotusFraction?
                  </Link>
                </div>
              </div>
            </div>
             {/* Botones call to Action */}

            {/* Este comentario no se verá en el navegador */}
            <div className="col-lg-6 col-xxl-6 offset-xxl-1">
              <div className="hero__illustration d-none d-lg-block">
                <Image
                  src={heroIllustration}
                  alt="heroIllustration"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
