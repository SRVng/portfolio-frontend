import { useRef } from 'react'
import styles from '../css/About.module.css';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

import moonImage from '../texture/moon.jpg';
import normalImage from '../texture/normal.jpg';
import spaceImage from '../texture/spaceBg.jpg';

const About = () => {
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
            <p>Hello! I'm Vut, a self taught developer.</p>
            <p>I love to code and I'm always learn a new things everyday, I'm pretty much into Frontend Framework  and Blockchain. Aside from coding I'm interested in Music, Gaming, and Anime.</p>
            <p>My programming language stack: Typescript, Rust, Python ,and Solidity.</p>
            <p>I'm looking for a challenging opportunity, If you are interested in working with me please don't hesitate to reach me out! &nbsp;  &#128526;</p>
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