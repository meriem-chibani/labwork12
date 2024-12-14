import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Calculation } from "../img/calculation.svg";
import { ReactComponent as Measuring } from "../img/measering.svg";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css" ; 
function NavBar(){
    return(
        <div className={styles.nav}>
        <div >
        <Link to="/"> <Logo/></Link>
        </div>
        <ul className={styles.menu}>
        <div className={styles.links}>
          <li><Link to="/services"> Services </Link></li>
          <li><Link to="/products"> Products </Link></li>
          <li><Link to="/aboutus"> About-us </Link></li>
          <li><Link to="/portfolio"> Portfolio </Link></li>
          <li><Link to="/FAQ"> FAQ </Link></li>
          <li><Link to="/contacts"> Contact </Link></li>
        </div>
          <div className={styles.btn}>
          <Link to="/make-request"><button className={styles.orangebtn}><Calculation/>Make request</button></Link>
          <Link to="/calculations"><button className={styles.purplebtn}><Measuring/>Calculation</button></Link>
        </div>  
        </ul>
      
      </div>
    )

}

export default NavBar;