import { useRef } from 'react'
import styles from '../css/About.module.css';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import SideNavBar from './SideNavBar';

import moonImage from '../texture/moon.jpg';
import normalImage from '../texture/normal.jpg';
import spaceImage from '../texture/spaceBg.jpg';

interface SideNavBarProps {
    setBattleBoobas: Function
    setRsvpStaking: Function
    setPortfolioWebsite: Function
}

const About = (props: SideNavBarProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.canvasContainer}>
        <Canvas>
            <ambientLight color='white'/>
            <Model />
        </Canvas>
        </div>
        <div className={styles.description}>
            <h1>About</h1>
            <p>Hello! I'm Vut, a self-taught developer, I'm graduated from Thammasat Business Scholl with Finance and Entrepreneurship as a major and minor.</p>
            <p>I love to code and I'm always learn a new things everyday, I'm pretty much into Frontend Framework  and Blockchain. Aside from coding I'm interested in Music, Gaming, and Anime</p>
            <p>My programming language stack: Typescript, Rust, Python ,and Solidity.</p>
            <p>I'm doing nothing currently except from a learning and building project loop, so if you are reading this please consider to hire me &#128526;</p>
        </div>
        <div className={styles.sideNavBar}>
            <SideNavBar about={true} {...props} />
        </div>
    </div>
  )
}

const Model = () => {

    const { camera,scene } = useThree();
    const model = useRef<THREE.Mesh>(null!);

    const moonTexture = new THREE.TextureLoader().load(moonImage);
    const normalTexture = new THREE.TextureLoader().load(normalImage);
    const spaceBackground = new THREE.TextureLoader().load(spaceImage);

    useFrame(() => {
        scene.background = spaceBackground;
        model.current.rotation.y += 0.01
    })

    const moveCamera = () => {
        const t = document.body.getBoundingClientRect().top;

        if (t > -2000) {
            camera.position.z = 200 + t / 4.5;
            if (camera.position.z <= 10) {
                camera.position.z = 3.73
            }
        }
    }
    document.body.onscroll = moveCamera

    return (
        <mesh ref={model}>
            <sphereGeometry />
            <meshStandardMaterial map={moonTexture} normalMap={normalTexture} />
        </mesh>
    )
}

export default About