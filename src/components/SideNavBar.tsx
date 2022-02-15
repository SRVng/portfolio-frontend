import React, { useContext, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export const RobertoFont = 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff';

const SideNavBar = (props: any) => {

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

  return (
    <Canvas>
        <SideNavBarLine start={[0,10,0]} end={[0,-10,0]} />
        <SideNavBarMenu />
        <SideNavBarBox 
            aboutOnClick={handleAbout}
            portfolioOnClick={handlePortfolio}
            contactOnClick={handleContact}
            battleOnClick={handleBattle}
            rsvpOnClick={handleRsvp}
            thisWebOnClick={handleThisWebsite}
            {...props}/>
    </Canvas>
  )
}

const SideNavBarLine = (props: {start: number[], end: number[]}) => {

    const ref = useRef<any>();

    useEffect(() => {
        ref.current.geometry.setFromPoints(
            [props.start, props.end].map(
                (point) => new THREE.Vector3(...point)
            )
        )
        ref.current.position.z = -10;
    });

    return (
        <line ref={ref}>
            <bufferGeometry />
            <lineBasicMaterial color='white' />
        </line>
    )
}

const SideNavBarMenu = () => {

    return (
        <>
            <TextWithHover position={[0,3,0]}>
                About
            </TextWithHover>
            <TextWithHover position={[0,1.5,0]} scale={[2,2,2]}>
                Portfolio
            </TextWithHover>
            <TextWithHover scale={[1.5,1.5,1.5]} position={[0,0.75,0]}>
                BattleBoobas
            </TextWithHover>
            <TextWithHover scale={[1.5,1.5,1.5]} position={[0,0,0]}>
                RSVP Staking
            </TextWithHover>
            <TextWithHover scale={[1.5,1.5,1.5]} position={[0,-0.75,0]}>
                This Website
            </TextWithHover>
            <TextWithHover position={[0,-2,0]}>
                Contact
            </TextWithHover>
            <TextWithHover position={[0,-3,0]}>
                To Top
            </TextWithHover>
        </>
    )
}

const SideNavBarBox = (props: any) => {

    return (
        <>
            <BoxWithHover 
                position={[0,3.07,-0.1]} 
                selected={props.about ? true : false}
                onClick={props.aboutOnClick ? props.aboutOnClick : null } />
            <BoxWithHover 
                position={[0,1.55,-0.1]} 
                selected={props.portfolio ? true : false}
                onClick={props.portfolioOnClick ? props.portfolioOnClick : null } />
            <BoxWithHover 
                position={[0,0.77,-0.1]} 
                selected={props.battle ? true : false}
                onClick={props.battleOnClick ? props.battleOnClick : null } />
            <BoxWithHover 
                position={[0,0,-0.1]} 
                selected={props.rsvp ? true : false}
                onClick={props.rsvpOnClick ? props.rsvpOnClick : null } />
            <BoxWithHover 
                position={[0,-0.76,-0.1]} 
                selected={props.thisWeb ? true : false}
                onClick={props.thisWebOnClick ? props.thisWebOnClick : null } />
            <BoxWithHover 
                position={[0,-2.03,-0.1]} 
                selected={props.contact ? true : false}
                onClick={props.contactOnClick ? props.contactOnClick : null } />
            <BoxWithHover position={[0,-3.05,-0.1]} onClick={() => {window.scrollTo({top: 0, left:0, behavior: 'smooth'})}} />
        </>
    )    
}

export const TextWithHover = (props: any) => {
    const [hovered, setHover] = React.useState(false);
    const RobertoFont = 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff';

    useEffect(() => {document.body.style.cursor = hovered ? 'pointer' : 'auto';});


    return (
        <Text 
            onPointerOver={() => setHover(true)}  
            onPointerOut={() => setHover(false)}
            scale={[2.25,2.25,2.25]}
            position={[0,0,0]} 
            color='white'
            font={RobertoFont}
            {...props}
            >
            {props.children}
        </Text>
    )
}

export const TextWithHoverColored = (props: any) => {
    const [hovered, setHover] = React.useState(false);
    const RobertoFont = 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff';

    useEffect(() => {document.body.style.cursor = hovered ? 'pointer' : 'auto';});

    return (
        <Text 
            onPointerOver={() => setHover(true)}  
            onPointerOut={() => setHover(false)}
            scale={[2.25,2.25,2.25]}
            position={[0,0,0]} 
            color={hovered ? 'cyan' : 'white'}
            font={RobertoFont}
            {...props}
            >
            {props.children}
        </Text>
    )
}

const BoxWithHover = (props: any) => {

    const [hovered, setHover] = React.useState(false);

    return (
        <mesh 
            position={[0,0,0]}
            onPointerOver={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            {...props}>
            <boxGeometry args={props.args ? props.args : [1,0.4,0]} />
            <meshBasicMaterial 
                color={
                    props.selected ? 'darkblue' :
                    hovered ? 'darkblue' : '#34495E'
                }
            />
        </mesh>
    )
}

export default SideNavBar