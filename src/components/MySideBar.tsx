import React, { useEffect, useRef, useState } from 'react'
import styles from '../css/MySideBar.module.css'

import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import CalculateIcon from '@mui/icons-material/Calculate';
import RsvpIcon from '@mui/icons-material/Rsvp';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { GitHub, Link } from '@mui/icons-material';

interface PortfolioProps {
    battleBoobas: boolean
    setBattleBoobas: Function
    rsvpStaking: boolean
    setRsvpStaking: Function
    portfolioWebsite: boolean
    setPortfolioWebsite: Function
}

const MySideBar = (props: PortfolioProps) => {

    const [minimize, setMinimize] = useState(true);
    const [width, setWidth] = useState(85);

    const handlePointer = () => {
        setMinimize(!minimize)
    }

    const { setBattleBoobas, setRsvpStaking, setPortfolioWebsite } = props

    const handleAbout = () => {
        window.scrollTo({
          top: 1020,
          left: 0,
          behavior: 'smooth'
        })
    };
    
    const handlePortfolio = () => {
        window.scrollTo({
          top: 1991,
          left: 0,
          behavior: 'smooth'
        })

        setBattleBoobas(false);
        setRsvpStaking(false);
        setPortfolioWebsite(false);  
    };

    const handleBattle = () => {
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
        window.scrollTo({
          top: 2983,
          left: 0,
          behavior: 'smooth'
        })
    };

    useEffect(() => {minimize ? setWidth(85) : setWidth(250)});

  return (
    <div className={styles.container}>
        <div className={styles.sidebar} onPointerOver={handlePointer} onPointerOut={handlePointer} style={{width: width}}>
            <p onClick={handleAbout}>
                <span className={styles.muiIcons}><InfoIcon /></span>
                About
            </p>
            <p onClick={handlePortfolio}>
                <span className={styles.muiIcons}><WorkIcon /></span>
                My Projects
            </p>
            <p onClick={handleBattle}>
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
            </p>
            <p onClick={handleContact}>
                <span className={styles.muiIcons}><ContactMailIcon /></span>
                Contact
            </p><br/>
            <p onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                <span className={styles.muiIcons}><ArrowUpwardIcon /></span>
                Top
            </p><br/><br/>
            <p onClick={() => {window.open('https://github.com/SRVng', '_blank')}}>
                <span className={styles.muiIcons}><GitHub /></span>
                SRVng
            </p>
            <p onClick={() => {window.open('https://linktr.ee/SRVng', '_blank')}}>
                <span className={styles.muiIcons}><Link /> </span>
                My Linktree
            </p>
        </div>
    </div>
  )
}

export default MySideBar