import styles from './navigation.module.css'
import Link from 'next/link'

const Navigation = () => (
    <nav className={styles.menu}>
        <ul>
            <li>
                <Link href="/">david vickhoff</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="#">about me</Link>
            </li>
            <li>
                <Link href="#">work</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation