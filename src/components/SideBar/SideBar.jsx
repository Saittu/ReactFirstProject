import { Avatar } from "../Avatar/Avatar"
import { PencilLine } from "phosphor-react"

import styles from "./SideBar.module.css"

export function SideBar() {
    return (
        <aside className={styles.SideBar}>

            
            <img className={styles.cover} src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />


            <div className={styles.profile}>

                <Avatar src="https://github.com/Saittu.png" />

                <strong>Jean Santos</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}