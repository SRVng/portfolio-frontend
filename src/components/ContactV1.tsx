import React from 'react'
import styles from '../css/Contact.module.css'

import profilePic from '../img/pxArt.png';

const Contact = () => {

  return (
    <div className={styles.container}>
        <div className={styles.github}>
            <ContactBox>
                <div className={styles.githubContent}>
                    <div className={styles.githubContentProfile}>
                        <img src={profilePic} alt=""/>
                    </div>
                    <ButtonBox onClick={() => {window.open('https://github.com/SRVng','_blank')}}>
                        Github Profile
                    </ButtonBox>
                    <ButtonBox onClick={() => {window.open('https://github.com/SRVng/avalanche-battleboobas-calculator','_blank')}}>
                        BattleBoobas Calculator
                    </ButtonBox>
                    <ButtonBox onClick={() => {window.open('https://github.com/SRVng/portfolio-frontend','_blank')}}>
                        Portfolio
                    </ButtonBox>
                    <ButtonBox onClick={() => {window.open('https://github.com/SRVng/solidity-avalanche-RSVP-staking-event-frontend','_blank')}}>
                        RSVP Frontend
                    </ButtonBox>
                    <ButtonBox onClick={() => {window.open('https://github.com/SRVng/solidity-avalanche-RSVP-staking-event','_blank')}}>
                        RSVP Smart Contract
                    </ButtonBox>
                </div>
            </ContactBox>
        </div>
        <div className={styles.contact}>
            <ContactBox>
                <div className={styles.contactContent}>
                    <TextBox>
                        Name: Saravut Nakglom
                    </TextBox>
                    <TextBox>
                        Email: snakglom@gmail.com
                    </TextBox>
                    <TextBox>
                        Facebook: Saravut Nakglom
                    </TextBox>
                    <TextBox>
                        Github: SRVng
                    </TextBox>
                </div>
            </ContactBox>
        </div>
        <div className={styles.livePage}>
            <ContactBox>
                <div className={styles.livePageContent}>
                    <ButtonBox onClick={() => {window.open('https://avalanche-battleboobas-calculator.vercel.app/','_blank')}}>
                        BattleBoobas Calculator
                    </ButtonBox>
                    <ButtonBox onClick={() => {window.open('https://rsvp-staking.vercel.app/','_blank')}}>
                        RSVP Staking Event
                    </ButtonBox>
                    <ButtonBox onClick={() => {window.open('https://saravut-portfolio.vercel.app/','_blank')}}>
                        Portfolio Website
                    </ButtonBox>
                </div>
            </ContactBox>
        </div>
    </div>
  )
}

const ContactBox = (props: {children: React.ReactChild}) => {

    return (
        <div className={styles.contactBox}>
            {props.children}
        </div>
    )
}

const ButtonBox = (props: {onClick: Function, children: React.ReactChild}) => {
    return (
        <div className={styles.buttonBox}>
            <button className={styles.buttonBoxbtn} onClick={() => props.onClick()}>
                {props.children}
            </button>
        </div>
    )
}

const TextBox = (props: {children: React.ReactChild}) => {
    return (
        <div className={styles.textBox}>
            {props.children}
        </div>
    )
}

export default Contact