import { Canvas } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import styles from '../../css/Layout/Header.module.css';

const Header = () => {

  const handleAbout = () => {
    window.scrollTo({
      top: 1020,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handlePortfolio = () => {
    window.scrollTo({
      top: 1991,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleContact = () => {
    window.scrollTo({
      top: 2983,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.homeBtn}>
        <button>Home</button>
      </div>
      <div className={styles.line}>
        <Canvas>
          <ambientLight color='white' />
          <NavBarLine x={100} y={0.25} z={1} />
        </Canvas>
      </div>
      <div className={styles.menu}>
        <p onClick={handleAbout}>About</p>
        <p onClick={handlePortfolio}>Portfolio</p>
        <p onClick={handleContact}>Contact</p>
      </div>
    </div>
  )
}

export const NavBarLine = (props: {x: number, y: number, z: number}) => {
  return (
    <mesh>
      <boxGeometry args={[props.x, props.y, props.z]}/>
      <meshStandardMaterial />
    </mesh>
  )
}


export default Header