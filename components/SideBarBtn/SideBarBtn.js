import React from 'react';
import Link from 'next/link';
import styles from './SideBarBtn.module.css';

const SideBarBtn = ({ icon, linkTo}) => {
    return (
        <Link href={linkTo}>
            <a className={styles.sidebarBtn}>
                {icon}
            </a>
        </Link>
    );
}

export default SideBarBtn;