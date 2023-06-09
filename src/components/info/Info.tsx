import style from './Info.module.css'

export default function Info () {


    return <div className={style.container}>
          <div className={style.infoContainer}>
            <div>
             <h3>Disfruta en tu TV</h3>
             <p>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
            </div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png" alt="" />
          </div>
          <div className={style.infoContainer} id={style.reverse}>
            <div>
             <h3>Disfruta donde quieras</h3>
             <p>Películas y series ilimitadas en tu teléfono, tablet, computadora y TV..</p>
            </div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png" alt="" />
          </div>
          <div className={style.infoContainer}>
            <div>
             <h3>Crea perfiles para niños</h3>
             <p>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</p>
            </div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/es-AR.png" alt="" />
          </div>
          <div className={style.infoContainer} id={style.reverse}>
            <div>
             <h3>Descarga tus series para verlas offline</h3>
             <p>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
            </div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/es.png" alt="" />
          </div>
          
          

    </div>
}