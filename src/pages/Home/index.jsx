import styles from "./home.module.css"

import Greeting from "../../components/Greeting"

export default function Home() {
    return (
        <div>
            < Greeting name="Gabriel"/>
            < Greeting name="Zé"/>
            < Greeting name="Ricardo"/>
        </div>
    )
}