import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '../css/Portfolio.module.css';
import { RobertoFont, TextWithHover, TextWithHoverColored } from './utils';
import { OrbitControls, OrthographicCamera, PerspectiveCamera, Text } from '@react-three/drei';
import spaceBackground from '../texture/space.jpg'

import rsvpWebpage from '../texture/rsvpWebpage.png';
import battleBoobasWebpage from '../texture/calculatorWebpage.jpg';
import portfolioWebpage from '../texture/portfolioWebpage.png';

interface PortfolioProps {
    battleBoobas: boolean
    setBattleBoobas: Function
    rsvpStaking: boolean
    setRsvpStaking: Function
    portfolioWebsite: boolean
    setPortfolioWebsite: Function
}

const Portfolio = (props: PortfolioProps) => {

    const { setBattleBoobas, setRsvpStaking, setPortfolioWebsite } = props

  return (
    <div className={styles.container}>
        <div className={styles.canvasContainer}>
        <Canvas>
            <ThreeBox {...props}/>
        </Canvas>
        </div>
    </div>
  )
}

const ThreeBox = (props: PortfolioProps) => {

    const { 
        battleBoobas, 
        setBattleBoobas,
        rsvpStaking,
        setRsvpStaking,
        portfolioWebsite,
        setPortfolioWebsite  
    } = props

    const { camera, scene, set } = useThree();

    const calculatorTexture = new THREE.TextureLoader().load(battleBoobasWebpage);
    const rsvpTexture = new THREE.TextureLoader().load(rsvpWebpage);
    const portfolioTexture = new THREE.TextureLoader().load(portfolioWebpage);

    useEffect(() => {

        scene.background = new THREE.TextureLoader().load(spaceBackground);

        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 1.75;
        camera.lookAt(0,0,0);

        if (battleBoobas) {
            camera.position.set(-2.5, 0, -0.68);
            camera.lookAt(-2.4, 0, -0.5);
        }

        if (rsvpStaking) {
            camera.position.set(-0.4, 0, -1.8);
            camera.lookAt(-1, 0, 0);
        }

        if (portfolioWebsite) {
            camera.position.set(2.64, 0, -0.43);
            camera.lookAt(2.3,0,0);
        }
    });

    const handlebattleBoobasClick = () => {

        if (rsvpStaking || portfolioWebsite) {
            null;
        } else {
            setBattleBoobas(!battleBoobas);
        }
    }

    const handlersvpStakingClick = () => {

        if (battleBoobas || portfolioWebsite) {
            null;
        } else {
            setRsvpStaking(!rsvpStaking);
        }
    }

    const handleportfolioWebsiteClick = () => {

        if (battleBoobas || rsvpStaking) {
            null;
        } else {
            setPortfolioWebsite(!portfolioWebsite);
        }
    }

    const checkCamera = () => {
        console.log(camera.position.x)
        console.log(camera.position.y)
        console.log(camera.position.z)
    }

    return (
        <group>
            <Box 
                first={true} 
                position={[-1.5,0,-0.061]} 
                onClick={handlebattleBoobasClick} 
                map={calculatorTexture} />
            <Box 
                position={[0,0,-0.5]} 
                onClick={handlersvpStakingClick}
                map={rsvpTexture} />
            <Box 
                third={true} 
                position={[1.5,0,-0.1]} 
                onClick={handleportfolioWebsiteClick} 
                map={portfolioTexture}/>
            {
                !battleBoobas && !rsvpStaking && !portfolioWebsite ?
                <Text scale={[1.5,1.5,1.5]} position={[0,1,0]} color={'black'} font={RobertoFont}>
                    CLICK TO INTERACT
                </Text>
                : null
            }
            {
                battleBoobas ? 
                <BattleBoobasDescriptionText /> 
                : null
            }
            {
                rsvpStaking ?
                <RsvpStakingDescriptionText />
                : null
            }
            {
                portfolioWebsite ?
                <PortfolioDescriptionText />
                : null
            }
        </group>
    )
}

const Box = (props: any) => {

    const [hovered, setHover] = useState(false);
    const ref = useRef<THREE.Mesh>(null!);

    useEffect(() => {
        if (props.first) {
            ref.current.rotation.y = 0.75
        } else if (props.third) {
            ref.current.rotation.y = -0.75
        }

        hovered ? document.body.style.cursor = 'pointer' : document.body.style.cursor = 'auto';
    })

    return (
        <mesh 
            ref={ref} 
            position={[0,0,0]}
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => setHover(false)}
            {...props}>
            <boxGeometry args={[1.3,1,0.25]}/>
            <meshBasicMaterial 
                map={props.map ? props.map : null}  
                color={hovered ? 'pink' : 'white'}/>
        </mesh>
    )
}

const BattleBoobasDescriptionText = () => {
    const mesh = useRef<any>();
    const groupText = useRef<any>();

    const handleWebsite = () => {
        window.open('https://avalanche-battleboobas-calculator.vercel.app/', '_blank');
    };
    const handleGithub = () => {
        window.open('https://github.com/SRVng/avalanche-battleboobas-calculator', '_blank');
    };

    useEffect(() => {
        groupText.current.lookAt(-6.5,0.9,-10);
        mesh.current.lookAt(-9.5,0.9,-10);
    });

    return (
        <>
        <mesh position={[-3.75,0.03,7]} ref={mesh}>
            <boxGeometry args={[10,6,1]}/>
            <meshBasicMaterial color='grey'/>
        </mesh>
        <group ref={groupText} scale={[1.25,1.25,1]} position={[-2.85,0.9,2.2]}>
        <Text color='white' font={RobertoFont}>
            BattleBoobas Calculator
        </Text>
        <Text  position={[0,-0.15,0]} color='white' font={RobertoFont}>
            A project that calculate NFT Staking profit for you.
        </Text>
        <Text  position={[0,-0.45,0]} color='white' font={RobertoFont}>
            Framework: Typescript/React.js/Next.js
        </Text>
        <Text  position={[0,-0.60,0]} color='white' font={RobertoFont}>
            API: Moralis and Next.js API Routes
        </Text>
        <Text  position={[0,-0.90,0]} color='white' font={RobertoFont}>
            This project introduced me to CSS, API Usage
        </Text>
        <Text  position={[0,-1.05,0]} color='white' font={RobertoFont}>
            and how to deal with Link and Modal.
        </Text>
        <TextWithHoverColored 
            scale={[1,1,1]} 
            position={[0,-1.35,0]}
            onClick={handleWebsite}>
            To Website
        </TextWithHoverColored>
        <TextWithHoverColored 
            scale={[1,1,1]} 
            position={[0,-1.5,0]}
            onClick={handleGithub}>
            To Github
        </TextWithHoverColored>
        </group>
        </>
    )
}

const RsvpStakingDescriptionText = () => {
    const mesh = useRef<any>();
    const groupText = useRef<any>();

    const handleWebsite = () => {
        window.open('https://rsvp-staking.vercel.app/', '_blank');
    };
    const handleGithubFrontend = () => {
        window.open('https://github.com/SRVng/solidity-avalanche-RSVP-staking-event-frontend', '_blank');
    };

    const handleGitHubSmartContract = () => {
        window.open('https://github.com/SRVng/solidity-avalanche-RSVP-staking-event', '_blank');
    };

    useEffect(() => {
        groupText.current.lookAt(-0.1,0.4,-4);
        mesh.current.lookAt(0,0,-5);
    });

    return (
        <>
        <mesh position={[-1.9,0,-0.4]} ref={mesh}>
            <boxGeometry args={[2.9,1.16,1]}/>
            <meshBasicMaterial color='grey'/>
        </mesh>
        <group ref={groupText} scale={[0.5,0.5,1]} position={[-1.45, 0.4, -1]}>
        <Text color='white' font={RobertoFont}>
            RSVP Staking Project
        </Text>
        <Text  position={[0,-0.15,0]} color='white' font={RobertoFont}>
            A fullstack project with both frontend and smart contract.
        </Text>
        <Text  position={[0,-0.45,0]} color='white' font={RobertoFont}>
            Frontend Framework: Typescript/React.js/Ethers.js
        </Text>
        <Text  position={[0,-0.60,0]} color='white' font={RobertoFont}>
            Blockchain Framework: Solidity/Python/Brownie
        </Text>
        <Text  position={[0,-0.90,0]} color='white' font={RobertoFont}>
            This project let me grasp the basic of unit-test and integrated-test,
        </Text>
        <Text  position={[0,-1.05,0]} color='white' font={RobertoFont}>
            how Blockchain works and how to connect to the frontend.
        </Text>
        <TextWithHoverColored 
            scale={[1,1,1]} 
            position={[0,-1.3,0]}
            onClick={handleWebsite}>
            To Website *Metamask needed*
        </TextWithHoverColored>
        <TextWithHoverColored 
            scale={[1,1,1]} 
            position={[-0.5,-1.45,0]}
            onClick={handleGithubFrontend}>
            To Github (Frontend)
        </TextWithHoverColored>
        <TextWithHoverColored 
            scale={[1,1,1]} 
            position={[0.65,-1.45,0]}
            onClick={handleGitHubSmartContract}>
            To Github (Smart Contract)
        </TextWithHoverColored>
        </group>
        </>
    )
}

const PortfolioDescriptionText = () => {
    const mesh = useRef<any>();
    const groupText = useRef<any>();

    const handleInspireWebsite = () => {
        window.open('https://cherupil.com/', '_blank')
    };

    const handleWebsite = () => {
        window.open('https://saravut-portfolio.vercel.app/', '_blank');
    };
    const handleGithub = () => {
        window.open('https://github.com/SRVng/portfolio-frontend', '_blank');
    };

    useEffect(() => {
        groupText.current.lookAt(9,0,-10);
        mesh.current.lookAt(8, 0, -10);
    });

    return (
        <>
        <mesh position={[2, 0, 5]} ref={mesh}>
            <boxGeometry args={[10,5.6,1]}/>
            <meshBasicMaterial color='grey'/>
        </mesh>
        <group ref={groupText} scale={[1.15,1.15,1]} position={[2.48, 0.9, 2]}>
        <Text color='white' font={RobertoFont}>
            Portfolio Website
        </Text>
        <Text  position={[0,-0.15,0]} color='white' font={RobertoFont}>
            A portfolio website that based on Three.js
        </Text>
        <Text  position={[0,-0.45,0]} color='white' font={RobertoFont}>
            Framework: Typescript/React.js/R3F-Three.js
        </Text>
        <Text  position={[0,-0.60,0]} color='white' font={RobertoFont}>
            Inspiration: Website
        </Text>
        <TextWithHoverColored 
            scale={[1,1,1]} 
            position={[0.26,-0.60,0.01]} 
            onClick={handleInspireWebsite}>
            Website 
        </TextWithHoverColored>
        <Text  position={[0,-0.90,0]} color='white' font={RobertoFont}>
            I learn about wireframe and how to copy the design
        </Text>
        <Text  position={[0,-1.05,0]} color='white' font={RobertoFont}>
            of other website and build on my own.
        </Text>
        <TextWithHoverColored 
            scale={[1,1,1]} 
            position={[0,-1.35,0]}
            onClick={handleWebsite}>
            To Website
        </TextWithHoverColored>
        <TextWithHoverColored 
            scale={[1,1,1]} 
            position={[0,-1.5,0]}
            onClick={handleGithub}>
            To Github
        </TextWithHoverColored>
        </group>
        </>
    )
}

export default Portfolio