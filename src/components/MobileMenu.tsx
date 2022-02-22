import React, { useEffect, useRef, useState } from 'react'
import styles from '../css/MobileMenu.module.css'

import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import CalculateIcon from '@mui/icons-material/Calculate';
import RsvpIcon from '@mui/icons-material/Rsvp';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { GitHub, Link, Menu, MenuOpen } from '@mui/icons-material';

interface PortfolioProps {
    battleBoobas: boolean
    setBattleBoobas: Function
    rsvpStaking: boolean
    setRsvpStaking: Function
    portfolioWebsite: boolean
    setPortfolioWebsite: Function
}

const MobileMenu = (props: PortfolioProps) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const { setBattleBoobas, setRsvpStaking, setPortfolioWebsite } = props

    const handleOpenMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleAbout = () => {
        setMenuOpen(false);
        window.scrollTo({
          top: 1196,
          left: 0,
          behavior: 'smooth'
        })
    };
    
    const handlePortfolio = () => {
        setMenuOpen(false);
        window.scrollTo({
          top: 1852,
          left: 0,
          behavior: 'smooth'
        })

        setBattleBoobas(false);
        setRsvpStaking(false);
        setPortfolioWebsite(false);  
    };

    const handleBattle = () => {
        setMenuOpen(false);
        window.scrollTo({
            top: 1991,
            left: 0,
            behavior: 'smooth'
        });
        setPortfolioWebsite(false);
        setRsvpStaking(false);
        setBattleBoobas(true);      
    }

    const handleRsvp = () => {
        setMenuOpen(false);
        window.scrollTo({
            top: 1991,
            left: 0,
            behavior: 'smooth'
        });
        setPortfolioWebsite(false);
        setBattleBoobas(false);
        setRsvpStaking(true);      
    }

    const handleThisWebsite = () => {
        setMenuOpen(false);
        window.scrollTo({
            top: 1991,
            left: 0,
            behavior: 'smooth'
        });
        setBattleBoobas(false);
        setRsvpStaking(false);
        setPortfolioWebsite(true);        
    }
    
      const handleContact = () => {
        setMenuOpen(false);
        window.scrollTo({
          top: 2500,
          left: 0,
          behavior: 'smooth'
        })
    };

  return (
    <div className={styles.container}>
        <div className={menuOpen ? styles.menuActive  : styles.menu}>
            <p onClick={handleAbout}>
                {/* <span className={styles.muiIcons}><InfoIcon /></span> */}
                About
            </p>
            <p onClick={handlePortfolio}>
                {/* <span className={styles.muiIcons}><WorkIcon /></span> */}
                My Projects
            </p>
            {/* <p onClick={handleBattle}>
                <span className={styles.muiIcons}><CalculateIcon /></span>
                BattleBoobas Calculator
            </p>
            <p onClick={handleRsvp}>
                <span className={styles.muiIcons}><RsvpIcon /></span>
                RSVP Staking
            </p>
            <p onClick={handleThisWebsite}>
                <span className={styles.muiIcons}><WebAssetIcon /></span>
                Portfolio Website
            </p> */}
            <p onClick={handleContact}>
                {/* <span className={styles.muiIcons}><ContactMailIcon /></span> */}
                Contact
            </p>
            <br/>
            <p onClick={() => {
                setMenuOpen(false);
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}>
                <span className={styles.muiIcons}><ArrowUpwardIcon /> </span>
                Top
            </p>
            <div className={styles.miniContact}>
            <p onClick={() => {window.open('https://github.com/SRVng', '_blank')}}>
                <span className={styles.muiIcons}><GitHub /> </span>
                Github
            </p>
            <p onClick={() => {window.open('https://linktr.ee/SRVng', '_blank')}}>
                <span className={styles.muiIcons}><Link /> </span>
                Linktree
            </p>
            </div>
        </div>
        <div className={styles.menuIcon}>
        <p style={{color : 'white'}} onClick={handleOpenMenu}>
            {
                menuOpen ? <MenuOpen /> : <Menu />
            }
        </p>
        </div>
    </div>
  )
}

export default MobileMenu