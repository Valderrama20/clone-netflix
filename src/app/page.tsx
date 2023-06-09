import Info from "@/components/info/Info"
import style from "./page.module.css"


import Nav from '@/components/nav/Nav'

export default function Home() {
  return (<div className={style.container}>
      <header><Nav/></header>
      <main className={style.main}>
      <div className={style.info}>
        <h1>Películas y series<br />ilimitadas y mucho más</h1>
        <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
        <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
         <div className={style.container_buttons}>
          <input type="text" name="" id="" />
          <button>Comenzar</button>
         </div>
        
      </div>
        <Info/>
     </main>
     </div>
  )
}
