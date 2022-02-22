import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from '../css/Greetings.module.css';

const Greetings = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1>
                <span>Greetings!</span> <br/>
                <span>I'm Vut,</span> &nbsp;
                <span className={styles.coloredText}>Nice to meet you.</span>
            </h1>
        </div>
        <div className={styles.lineAnimation}>
            <Canvas>
                <LineAnimation />
            </Canvas>
        </div>
        <div className={styles.arrow}>
            <ScrollArrow />
        </div>
    </div>
  )
}

const LineAnimation = () => {

    const { scene } = useThree();

    const firstLine = useRef<THREE.Mesh>(null!);
    const secondLine = useRef<THREE.Mesh>(null!);
    const thridLine = useRef<THREE.Mesh>(null!);
    const fourthLine = useRef<THREE.Mesh>(null!);

    useEffect(() => {
        firstLine.current.position.y = 3;
        secondLine.current.position.y = 1;
        thridLine.current.position.y = -1;
        fourthLine.current.position.y = -3;

        scene.background = new THREE.Color('black');
    }, [])

    useFrame(() => {
        firstLine.current.rotation.x += 0.005;
        secondLine.current.rotation.x += 0.005;
        thridLine.current.rotation.x += 0.005;
        fourthLine.current.rotation.x += 0.005;
    })

    return (
        <>
        <pointLight color='white' intensity={0.1} position={[0,-5,0]}/>
        <group>
            <mesh ref={firstLine}>
                <boxGeometry args={[40,0.25,0.01]} />
                <meshStandardMaterial />
            </mesh>
            <mesh ref={secondLine}>
                <boxGeometry args={[30,0.25,0.01]} />
                <meshStandardMaterial />
            </mesh>
            <mesh ref={thridLine}>
                <boxGeometry args={[10,0.25,0.01]} />
                <meshStandardMaterial />
            </mesh>
            <mesh ref={fourthLine}>
                <boxGeometry args={[5,0.25,0.01]} />
                <meshStandardMaterial />
            </mesh>
        </group>
        </>
    )
}

const ScrollArrow = () => {
    return (
        <p>&#10229; Scroll</p>
    )
}

export default Greetings