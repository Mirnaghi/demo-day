import styles from './SideBar.module.css';
import SideBarBtn from '../../components/SideBarBtn/SideBarBtn';

const SideBar = (props) => {
    return (
        <div className={styles.sideBar}>
            <SideBarBtn icon="" linkTo=""/>
            <SideBarBtn icon="" linkTo=""/>
            <SideBarBtn icon="" linkTo=""/>
            <SideBarBtn icon="" linkTo=""/>
            <SideBarBtn icon="" linkTo=""/>
        </div>
    );
}

export default SideBar;
