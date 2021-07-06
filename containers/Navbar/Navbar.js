import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = (props) => {
    return (
        <nav className={styles.nav__wrapper}>
            <Image src="/whiteLogo.png" width={38.2} height={21.5}/>
        </nav>
    )
}

export default Navbar;
