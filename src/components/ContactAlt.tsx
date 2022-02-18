import { AddRounded, EmailOutlined, FacebookOutlined, Person } from '@mui/icons-material';
import React from 'react'
import styles from '../css/ContactAlt.module.css';

const ContactAlt = () => {

    const iconOpts = {
        sx: {
            fontSize: 100
        }
    };

  return (
    <div className={styles.container}>
        <ContactBlock header="Name" info="Saravut Nakglom">
            <Person {...iconOpts}/>
        </ContactBlock>
        <ContactBlock header="Email" info="snakglom@gmail.com">
            <EmailOutlined {...iconOpts}/>
        </ContactBlock>
        <ContactBlock header="Facebook" info={{info: "fb.com/VUTADTR", ref: "https://fb.com/VUTADTR"}}>
            <FacebookOutlined {...iconOpts}/>
        </ContactBlock>
        <ContactBlock header="Line" info={{info: "Add contact", ref: "https://line.me/ti/p/SEPtYGXN-q"}}>
            <AddRounded {...iconOpts}/>
        </ContactBlock>
    </div>
  )
}

const ContactBlock = (props: {
    children: React.ReactChild,
    header: string,
    info: string | {
        info: string,
        ref: string
    }
}) => {

    const handleClick = () => {
        if (typeof props.info === "object") {
            window.open(props.info.ref, '_blank')
        }
    }

    return (
        <div className={styles.blockContainer}>
            <div className={styles.iconBlock}>
                {props.children}
            </div>
            <div className={styles.infoBlock}>
                <h4>{props.header}</h4>
                { 
                    typeof props.info === "object" ? 
                    <button onClick={handleClick}>
                        {props.info.info}
                    </button>  :
                    <p>{props.info}</p>
                }
            </div>
        </div>
    )
}

export default ContactAlt