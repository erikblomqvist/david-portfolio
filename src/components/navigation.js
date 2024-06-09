import styles from './navigation.module.css'
import Link from 'next/link'

const Navigation = () => (
    <nav className={styles.menu}>
        <ul>
            <li>
                <Link className={styles.clean} href="/">david vickhoff</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="#">About me</Link>
            </li>
            <li>
                <Link href="/#cases">My work</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation