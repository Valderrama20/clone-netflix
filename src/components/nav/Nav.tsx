import style from "./Nav.module.css"

export default function Nav () {
    
    return <header>
        <nav className={style.nav}>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
            <div className={style.container_buttons}>
                <div >
                    <img src="" alt="en proceso" />
                    <select name="" id="">
                    <option value="Español">Español ▾</option>
                    </select>
                </div>
                
                <button>Cerrar Sesion</button>
            </div>
        </nav>
    </header>
}