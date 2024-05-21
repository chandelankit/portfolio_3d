import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame,useThree} from '@react-three/fiber'
import {a} from '@react-spring/three'

import mech_hangarScene from '../assets/3d/mech_hangar.glb'

const mech_hangar = (props)=> {
  const mech_hangarRef = useRef();
  const { nodes, materials } = useGLTF(mech_hangarScene)
  return (
    <a.group ref = {mech_hangarRef}{...props} >
      <group scale={0.01}>
        <mesh
          geometry={nodes.Cube054_Railing_0.geometry}
          material={materials.Railing}
          position={[1306.641, 110.024, 194.12]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube053_Railing_0.geometry}
          material={materials.Railing}
          position={[1306.641, 110.024, 105.048]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane220_Railing_0.geometry}
          material={materials.Railing}
          position={[1304.07, 7.855, 155.053]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube038_Railing_0.geometry}
          material={materials.Railing}
          position={[1307.726, 98.054, 157.466]}
          rotation={[-Math.PI / 2, 0, -1.068]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane219_Railing_0.geometry}
          material={materials.Railing}
          position={[995.937, 53.075, 698.769]}
          rotation={[-Math.PI / 2, 0, -0.863]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane218_Railing_0.geometry}
          material={materials.Railing}
          position={[995.937, 53.075, 786.691]}
          rotation={[-Math.PI / 2, 0, 0.386]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane217_Railing_0.geometry}
          material={materials.Railing}
          position={[1048.292, 53.075, 1551.535]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane216_Railing_0.geometry}
          material={materials.Railing}
          position={[390.109, 53.075, 1429.984]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane215_Railing_0.geometry}
          material={materials.Railing}
          position={[390.109, 53.075, 1342.061]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane214_Railing_0.geometry}
          material={materials.Railing}
          position={[1456.243, 53.075, -1070.449]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane213_Railing_0.geometry}
          material={materials.Railing}
          position={[1456.243, 53.075, -1158.371]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane212_Railing_0.geometry}
          material={materials.Railing}
          position={[1439.346, 53.075, 263.374]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane211_Railing_0.geometry}
          material={materials.Railing}
          position={[-656.606, 53.075, -532.741]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane210_Railing_0.geometry}
          material={materials.Railing}
          position={[-656.606, 53.075, -620.663]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane209_Railing_0.geometry}
          material={materials.Railing}
          position={[-822.983, 53.075, 754.02]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane208_Railing_0.geometry}
          material={materials.Railing}
          position={[179.247, 53.075, 925.096]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane207_Railing_0.geometry}
          material={materials.Railing}
          position={[179.247, 53.075, 837.174]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane206_Railing_0.geometry}
          material={materials.Railing}
          position={[-542.33, 53.075, -1281.286]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane205_Railing_0.geometry}
          material={materials.Railing}
          position={[413.598, 53.075, -1915.129]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane204_Railing_0.geometry}
          material={materials.Railing}
          position={[188.435, 252.164, -221.856]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane203_Railing_0.geometry}
          material={materials.Railing}
          position={[188.435, 252.164, 1436.904]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane202_Railing_0.geometry}
          material={materials.Railing}
          position={[473.365, 53.075, 1436.904]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane201_Railing_0.geometry}
          material={materials.Railing}
          position={[639.742, 53.075, 62.221]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane200_Railing_0.geometry}
          material={materials.Railing}
          position={[894.752, 53.075, -846.222]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane199_Railing_0.geometry}
          material={materials.Railing}
          position={[639.742, 53.075, 150.143]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane198_Railing_0.geometry}
          material={materials.Railing}
          position={[161.781, 53.075, -750.486]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane197_Railing_0.geometry}
          material={materials.Railing}
          position={[-621.899, 352.487, 1447.117]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane196_Railing_0.geometry}
          material={materials.Railing}
          position={[-621.899, 352.487, -73.016]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane195_Railing_0.geometry}
          material={materials.Railing}
          position={[-621.899, 352.487, -508.174]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane194_Railing_0.geometry}
          material={materials.Railing}
          position={[-175.491, 707.264, 605.374]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane193_Railing_0.geometry}
          material={materials.Railing}
          position={[-463.431, 707.264, 1704.702]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane192_Railing_0.geometry}
          material={materials.Railing}
          position={[-463.431, 707.264, -1446.486]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane191_Railing_0.geometry}
          material={materials.Railing}
          position={[-463.431, 707.264, 450.985]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane190_Railing_0.geometry}
          material={materials.Railing}
          position={[-463.431, 707.264, 367.48]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane189_Railing_0.geometry}
          material={materials.Railing}
          position={[-281.22, 707.264, -521.083]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane188_Railing_0.geometry}
          material={materials.Railing}
          position={[302.729, 53.075, -737.225]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane187_Railing_0.geometry}
          material={materials.Railing}
          position={[-206.387, 11.439, -928.205]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane186_Railing_0.geometry}
          material={materials.Railing}
          position={[-44.567, 11.439, 1596.193]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane185_Railing_0.geometry}
          material={materials.Railing}
          position={[204.884, 11.439, 910.944]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane184_Railing_0.geometry}
          material={materials.Railing}
          position={[-12.152, 11.439, 281.989]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane183_Railing_0.geometry}
          material={materials.Railing}
          position={[123.329, 11.439, -1412.309]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane182_Railing_0.geometry}
          material={materials.Railing}
          position={[80.511, 11.439, 897.41]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane181_Railing_0.geometry}
          material={materials.Railing}
          position={[211.023, 11.439, -789.304]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane177_Railing_0.geometry}
          material={materials.Railing}
          position={[48.663, 11.439, 441.007]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane176_Railing_0.geometry}
          material={materials.Railing}
          position={[-883.521, 4.705, -1064.047]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane175_Railing_0.geometry}
          material={materials.Railing}
          position={[-883.521, 4.705, 39.042]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane174_Railing_0.geometry}
          material={materials.Railing}
          position={[-883.521, 4.705, 1156.905]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube037_Railing_0.geometry}
          material={materials.Railing}
          position={[-199.066, 41.434, 1957.839]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube036_Railing_0.geometry}
          material={materials.Railing}
          position={[-278.808, 41.434, 1973.868]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane173_Railing_0.geometry}
          material={materials.Railing}
          position={[-31.515, 76.062, 1919.258]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube035_Railing_0.geometry}
          material={materials.Railing}
          position={[91.124, 98.054, -1955.114]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane172_Railing_0.geometry}
          material={materials.Railing}
          position={[87.467, 7.855, -1957.527]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane171_Railing_0.geometry}
          material={materials.Railing}
          position={[995.468, 4.705, 1063.181]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane170_Railing_0.geometry}
          material={materials.Railing}
          position={[1002.963, 4.705, 1194.915]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane169_Railing_0.geometry}
          material={materials.Railing}
          position={[1002.963, 4.705, 76.745]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane168_Railing_0.geometry}
          material={materials.Railing}
          position={[995.468, 4.705, -54.989]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane167_Railing_0.geometry}
          material={materials.Railing}
          position={[995.468, 4.705, -1136.894]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane166_Railing_0.geometry}
          material={materials.Railing}
          position={[987.222, 4.705, 1524.103]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube064_Railing_0.geometry}
          material={materials.Railing}
          position={[936.592, 41.434, 1489.789]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube063_Railing_0.geometry}
          material={materials.Railing}
          position={[1016.333, 41.434, 1473.76]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane165_Railing_0.geometry}
          material={materials.Railing}
          position={[987.222, 4.705, 390.883]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane164_Railing_0.geometry}
          material={materials.Railing}
          position={[987.222, 4.705, -725.745]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane163_Railing_0.geometry}
          material={materials.Railing}
          position={[-1183.51, 1210.751, -1068.706]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane162_Railing_0.geometry}
          material={materials.Railing}
          position={[-1183.51, 1210.751, 22.529]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane161_Railing_0.geometry}
          material={materials.Railing}
          position={[-1183.51, 1210.751, 1137.2]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane160_Railing_0.geometry}
          material={materials.Railing}
          position={[-1211.809, 593.91, -1061.948]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane159_Railing_0.geometry}
          material={materials.Railing}
          position={[-1211.809, 593.91, 1161.636]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane158_Railing_0.geometry}
          material={materials.Railing}
          position={[-1211.809, 593.91, 43.431]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane157_Railing_0.geometry}
          material={materials.Railing}
          position={[-1231.33, 777.039, -1324.409]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane156_Railing_0.geometry}
          material={materials.Railing}
          position={[-1231.33, 777.039, 886.972]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane155_Railing_0.geometry}
          material={materials.Railing}
          position={[-1231.33, 777.039, -246.308]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane154_Railing_0.geometry}
          material={materials.Railing}
          position={[-1148.474, 367.281, 1150.149]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane153_Railing_0.geometry}
          material={materials.Railing}
          position={[-1148.474, 367.281, 32.286]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane152_Railing_0.geometry}
          material={materials.Railing}
          position={[-1148.474, 367.281, -1070.803]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane151_Railing_0.geometry}
          material={materials.Railing}
          position={[-1232.957, 974.934, -1070.803]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane150_Railing_0.geometry}
          material={materials.Railing}
          position={[-1232.957, 974.934, 32.286]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane149_Railing_0.geometry}
          material={materials.Railing}
          position={[-1232.957, 974.934, 1150.149]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube028_Railing_0.geometry}
          material={materials.Railing}
          position={[-1023.947, 755.569, -1608.347]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube027_Railing_0.geometry}
          material={materials.Railing}
          position={[-1023.947, 755.569, -509.642]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube026_Railing_0.geometry}
          material={materials.Railing}
          position={[-1023.947, 755.569, 1714.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube025_Railing_0.geometry}
          material={materials.Railing}
          position={[-1023.947, 755.569, 599.31]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube020_Railing_0.geometry}
          material={materials.Railing}
          position={[-1023.947, 104.37, 599.31]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube019_Railing_0.geometry}
          material={materials.Railing}
          position={[-1023.947, 104.37, 1714.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube018_Railing_0.geometry}
          material={materials.Railing}
          position={[-1023.947, 104.37, -509.642]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube017_Railing_0.geometry}
          material={materials.Railing}
          position={[-1023.947, 104.37, -1608.347]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube060_Railing_0.geometry}
          material={materials.Railing}
          position={[936.592, 41.434, -760.058]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube059_Railing_0.geometry}
          material={materials.Railing}
          position={[1016.333, 41.434, -776.087]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube058_Railing_0.geometry}
          material={materials.Railing}
          position={[988.127, 41.434, -683.844]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube057_Railing_0.geometry}
          material={materials.Railing}
          position={[983.522, 114.608, -725.578]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane148_Railing_0.geometry}
          material={materials.Railing}
          position={[-611.746, 76.062, -1268.801]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane147_Railing_0.geometry}
          material={materials.Railing}
          position={[1388.389, 0, -612.839]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane146_Railing_0.geometry}
          material={materials.Railing}
          position={[925.98, 0, 680.425]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane145_Railing_0.geometry}
          material={materials.Railing}
          position={[60.462, 76.062, 812.516]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane144_Railing_0.geometry}
          material={materials.Railing}
          position={[200.233, 76.062, -698.696]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane143_Railing_0.geometry}
          material={materials.Railing}
          position={[-68.628, 76.062, 364.137]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube052_Railing_0.geometry}
          material={materials.Railing}
          position={[362.17, 98.054, 585.558]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane142_Railing_0.geometry}
          material={materials.Railing}
          position={[358.513, 7.855, 583.145]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane141_Railing_0.geometry}
          material={materials.Railing}
          position={[532.367, 7.855, -293.144]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube051_Railing_0.geometry}
          material={materials.Railing}
          position={[536.024, 98.054, -290.731]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane140_Railing_0.geometry}
          material={materials.Railing}
          position={[-320.312, 7.855, 978.279]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube050_Railing_0.geometry}
          material={materials.Railing}
          position={[-316.655, 98.054, 980.693]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube049_Railing_0.geometry}
          material={materials.Railing}
          position={[201.3, 98.054, 1486.504]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane139_Railing_0.geometry}
          material={materials.Railing}
          position={[197.644, 7.855, 1484.091]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane138_Railing_0.geometry}
          material={materials.Railing}
          position={[-224.764, 7.855, -782.567]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube048_Railing_0.geometry}
          material={materials.Railing}
          position={[-221.107, 98.054, -780.154]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube047_Railing_0.geometry}
          material={materials.Railing}
          position={[144.155, 98.054, -290.731]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane137_Railing_0.geometry}
          material={materials.Railing}
          position={[140.498, 7.855, -293.144]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane136_Railing_0.geometry}
          material={materials.Railing}
          position={[-468.534, 2.433, -202.048]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube046_Railing_0.geometry}
          material={materials.Railing}
          position={[-468.209, 92.632, -197.679]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube045_Railing_0.geometry}
          material={materials.Railing}
          position={[-117.661, 114.608, -1482.205]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube044_Railing_0.geometry}
          material={materials.Railing}
          position={[-85.633, 41.434, -1455.054]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube043_Railing_0.geometry}
          material={materials.Railing}
          position={[-128.541, 41.434, -1541.445]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube042_Railing_0.geometry}
          material={materials.Railing}
          position={[-175.448, 41.434, -1474.996]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube041_Railing_0.geometry}
          material={materials.Railing}
          position={[318.608, 114.66, 1719.461]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube040_Railing_0.geometry}
          material={materials.Railing}
          position={[318.608, 41.434, 1757.757]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube039_Railing_0.geometry}
          material={materials.Railing}
          position={[318.608, 41.434, 1668.685]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube034_Railing_0.geometry}
          material={materials.Railing}
          position={[318.608, 41.434, -566.463]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube033_Railing_0.geometry}
          material={materials.Railing}
          position={[318.608, 41.434, -477.391]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube032_Railing_0.geometry}
          material={materials.Railing}
          position={[-211.984, 114.608, 751.437]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube031_Railing_0.geometry}
          material={materials.Railing}
          position={[-233.201, 41.434, 787.67]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube030_Railing_0.geometry}
          material={materials.Railing}
          position={[-155.51, 41.434, 730.498]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube029_Railing_0.geometry}
          material={materials.Railing}
          position={[-229.056, 41.434, 695.761]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube024_Railing_0.geometry}
          material={materials.Railing}
          position={[-238.057, 114.608, 1538.333]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube023_Railing_0.geometry}
          material={materials.Railing}
          position={[-206.029, 41.434, 1565.484]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube022_Railing_0.geometry}
          material={materials.Railing}
          position={[-248.938, 41.434, 1479.093]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube021_Railing_0.geometry}
          material={materials.Railing}
          position={[-295.844, 41.434, 1545.542]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube016_Railing_0.geometry}
          material={materials.Railing}
          position={[-244.28, 114.608, -245.324]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube013_Railing_0.geometry}
          material={materials.Railing}
          position={[-202.456, 41.434, -241.614]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube012_Railing_0.geometry}
          material={materials.Railing}
          position={[-287.332, 41.434, -287.446]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube011_Railing_0.geometry}
          material={materials.Railing}
          position={[-287.332, 41.434, -206.11]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube006_Railing_0.geometry}
          material={materials.Railing}
          position={[-217.332, 41.434, -484.134]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane134_Railing_0.geometry}
          material={materials.Railing}
          position={[-611.746, 76.062, 222.889]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane133_Railing_0.geometry}
          material={materials.Railing}
          position={[218.607, 0, 1530.231]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane132_Railing_0.geometry}
          material={materials.Railing}
          position={[218.607, 0, 1036.444]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane131_Railing_0.geometry}
          material={materials.Railing}
          position={[164.996, 0, 945.04]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane130_Railing_0.geometry}
          material={materials.Railing}
          position={[-109.258, 0, -229.618]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane129_Railing_0.geometry}
          material={materials.Railing}
          position={[-109.258, 0, -135.592]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane128_Railing_0.geometry}
          material={materials.Railing}
          position={[-215.246, 0, 579.071]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane127_Railing_0.geometry}
          material={materials.Railing}
          position={[-88.314, 0, -542.087]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane126_Railing_0.geometry}
          material={materials.Railing}
          position={[133.892, 0, -1252.761]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane125_Railing_0.geometry}
          material={materials.Railing}
          position={[477.254, 0, -280.814]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane124_Railing_0.geometry}
          material={materials.Railing}
          position={[432.22, 0, -280.814]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane123_Railing_0.geometry}
          material={materials.Railing}
          position={[175.657, 0, -856.782]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane122_Railing_0.geometry}
          material={materials.Railing}
          position={[159.493, 0, 164.289]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane121_Railing_0.geometry}
          material={materials.Railing}
          position={[105.555, 0, 292.451]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane120_Railing_0.geometry}
          material={materials.Railing}
          position={[-241.31, 0, 874.337]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane119_Railing_0.geometry}
          material={materials.Railing}
          position={[109.98, 0, 874.337]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane118_Railing_0.geometry}
          material={materials.Railing}
          position={[495.177, 0, 1392.03]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane117_Railing_0.geometry}
          material={materials.Railing}
          position={[175.657, 0, -959.523]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane116_Railing_0.geometry}
          material={materials.Railing}
          position={[596.685, 0, -1373.107]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane115_Railing_0.geometry}
          material={materials.Railing}
          position={[180.255, 0, 239.282]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane114_Railing_0.geometry}
          material={materials.Railing}
          position={[1168.433, 4.705, 1175.33]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane113_Railing_0.geometry}
          material={materials.Railing}
          position={[1168.433, 4.705, 57.179]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane110_Railing_0.geometry}
          material={materials.Railing}
          position={[1002.963, 4.705, -1005.16]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane107_Railing_0.geometry}
          material={materials.Railing}
          position={[1168.433, 4.705, -1064.047]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane104_Railing_0.geometry}
          material={materials.Railing}
          position={[1191.203, 4.705, 32.324]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane103_Railing_0.geometry}
          material={materials.Railing}
          position={[1191.203, 4.705, 32.324]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane016_Railing_0.geometry}
          material={materials.Railing}
          position={[-620.926, 276.892, 368.7]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane102_Railing_0.geometry}
          material={materials.Railing}
          position={[-383.718, 696.55, 1137.2]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane101_Railing_0.geometry}
          material={materials.Railing}
          position={[77.985, 696.55, 688.482]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane100_Railing_0.geometry}
          material={materials.Railing}
          position={[77.985, 696.55, 1619.556]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane099_Railing_0.geometry}
          material={materials.Railing}
          position={[77.985, 696.55, 504.885]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane098_Railing_0.geometry}
          material={materials.Railing}
          position={[77.985, 696.55, -426.189]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane097_Railing_0.geometry}
          material={materials.Railing}
          position={[-383.718, 696.55, 22.529]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane096_Railing_0.geometry}
          material={materials.Railing}
          position={[-383.718, 696.55, -1068.706]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane095_Railing_0.geometry}
          material={materials.Railing}
          position={[77.985, 696.55, -1512.035]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane094_Railing_0.geometry}
          material={materials.Railing}
          position={[77.985, 696.55, -607.699]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane093_Railing_0.geometry}
          material={materials.Railing}
          position={[336.46, 4.705, -1641.831]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane090_Railing_0.geometry}
          material={materials.Railing}
          position={[336.46, 4.705, 1737.458]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane089_Railing_0.geometry}
          material={materials.Railing}
          position={[-131.986, 4.705, 1722.581]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane088_Railing_0.geometry}
          material={materials.Railing}
          position={[110.595, 2.433, 1720.291]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane087_Railing_0.geometry}
          material={materials.Railing}
          position={[-397.987, 2.433, 1720.291]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane086_Railing_0.geometry}
          material={materials.Railing}
          position={[-397.987, 2.433, 603.691]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane085_Railing_0.geometry}
          material={materials.Railing}
          position={[110.595, 2.433, 603.691]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane084_Railing_0.geometry}
          material={materials.Railing}
          position={[-131.986, 4.705, 605.982]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane083_Railing_0.geometry}
          material={materials.Railing}
          position={[-554.496, 4.705, 1156.905]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane082_Railing_0.geometry}
          material={materials.Railing}
          position={[336.46, 4.705, 620.858]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane080_Railing_0.geometry}
          material={materials.Railing}
          position={[458.611, 4.705, 1156.905]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane079_Railing_0.geometry}
          material={materials.Railing}
          position={[217.553, 4.705, 871.555]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane078_Railing_0.geometry}
          material={materials.Railing}
          position={[418.263, 4.705, 1162.489]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane077_Railing_0.geometry}
          material={materials.Railing}
          position={[422.871, 4.705, 1161.295]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane076_Railing_0.geometry}
          material={materials.Railing}
          position={[-22.495, 4.705, 1150.149]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane075_Railing_0.geometry}
          material={materials.Railing}
          position={[336.46, 4.705, 1686.04]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane074_Railing_0.geometry}
          material={materials.Railing}
          position={[531.294, 4.705, 1156.905]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane073_Railing_0.geometry}
          material={materials.Railing}
          position={[531.294, 4.705, 39.042]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane072_Railing_0.geometry}
          material={materials.Railing}
          position={[336.46, 4.705, 568.177]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane071_Railing_0.geometry}
          material={materials.Railing}
          position={[-22.495, 4.705, 32.286]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane070_Railing_0.geometry}
          material={materials.Railing}
          position={[422.871, 4.705, 43.431]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane069_Railing_0.geometry}
          material={materials.Railing}
          position={[418.263, 4.705, 44.626]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane068_Railing_0.geometry}
          material={materials.Railing}
          position={[217.553, 4.705, -246.308]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane067_Railing_0.geometry}
          material={materials.Railing}
          position={[458.611, 4.705, 39.042]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane066_Railing_0.geometry}
          material={materials.Railing}
          position={[535.714, 4.705, 601.279]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane065_Railing_0.geometry}
          material={materials.Railing}
          position={[336.46, 4.705, -497.005]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane064_Railing_0.geometry}
          material={materials.Railing}
          position={[-554.496, 4.705, 39.042]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane063_Railing_0.geometry}
          material={materials.Railing}
          position={[-131.986, 4.705, -514.275]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane062_Railing_0.geometry}
          material={materials.Railing}
          position={[110.595, 2.433, -516.566]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane061_Railing_0.geometry}
          material={materials.Railing}
          position={[-397.987, 2.433, -516.566]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane060_Railing_0.geometry}
          material={materials.Railing}
          position={[-397.987, 2.433, -1602.385]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane056_Railing_0.geometry}
          material={materials.Railing}
          position={[110.595, 2.433, -1602.385]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane059_Railing_0.geometry}
          material={materials.Railing}
          position={[-131.986, 4.705, -1600.094]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane058_Railing_0.geometry}
          material={materials.Railing}
          position={[-554.496, 4.705, -1064.047]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane057_Railing_0.geometry}
          material={materials.Railing}
          position={[336.46, 4.705, -1600.094]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane055_Railing_0.geometry}
          material={materials.Railing}
          position={[535.714, 4.705, -510.325]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane054_Railing_0.geometry}
          material={materials.Railing}
          position={[458.611, 4.705, -1064.047]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane040_Railing_0.geometry}
          material={materials.Railing}
          position={[217.553, 4.705, -1349.397]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube010_Railing_0.geometry}
          material={materials.Railing}
          position={[-565.197, 165.653, 1178.166]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube008_Railing_0.geometry}
          material={materials.Railing}
          position={[-565.197, 165.653, 54.33]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane053_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.194, 666.299, -1619.404]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane052_Railing_0.geometry}
          material={materials.Railing}
          position={[-532.548, 314.886, 1159.37]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane051_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.559, 496.369, 853.498]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane050_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.194, 666.299, 1716.081]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane049_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.559, 496.369, 1467.555]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane048_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.559, 496.369, 357.175]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane047_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.194, 666.299, 605.7]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane046_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.559, 496.369, -256.882]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane043_Railing_0.geometry}
          material={materials.Railing}
          position={[-532.548, 314.886, 48.989]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane045_Railing_0.geometry}
          material={materials.Railing}
          position={[-532.548, 314.886, -1064.605]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane044_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.559, 496.369, -1370.477]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane042_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.194, 666.299, -507.894]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube007_Railing_0.geometry}
          material={materials.Railing}
          position={[-565.197, 165.653, -1064.159]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane041_Railing_0.geometry}
          material={materials.Railing}
          position={[-533.559, 496.369, -756.42]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane039_Railing_0.geometry}
          material={materials.Railing}
          position={[418.263, 4.705, -1058.463]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane038_Railing_0.geometry}
          material={materials.Railing}
          position={[422.871, 4.705, -1059.657]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane037_Railing_0.geometry}
          material={materials.Railing}
          position={[-22.495, 4.705, -1070.803]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane036_Railing_0.geometry}
          material={materials.Railing}
          position={[336.46, 4.705, -534.912]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane035_Railing_0.geometry}
          material={materials.Railing}
          position={[531.294, 4.705, -1064.047]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane034_Railing_0.geometry}
          material={materials.Railing}
          position={[-106.112, 4.705, 1164.608]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane033_Railing_0.geometry}
          material={materials.Railing}
          position={[-106.112, 4.705, 48.268]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane_Railing_0.geometry}
          material={materials.Railing}
          position={[-24.632, 4.705, -1064.047]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane000_Railing_0.geometry}
          material={materials.Railing}
          position={[718.798, -22.134, -1071.986]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane032_Railing_0.geometry}
          material={materials.Railing}
          position={[-37.28, 2.433, -900.428]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane031_Railing_0.geometry}
          material={materials.Railing}
          position={[-37.28, 2.433, -1215.555]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane030_Railing_0.geometry}
          material={materials.Railing}
          position={[-444.744, 629.85, -1614.883]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane029_Railing_0.geometry}
          material={materials.Railing}
          position={[-444.744, 629.85, -993.915]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane028_Railing_0.geometry}
          material={materials.Railing}
          position={[-620.926, 276.892, -1494.549]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane027_Railing_0.geometry}
          material={materials.Railing}
          position={[-620.926, 276.892, -872.825]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube015_Railing_0.geometry}
          material={materials.Railing}
          position={[-387.71, 104.37, -1608.347]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane026_Railing_0.geometry}
          material={materials.Railing}
          position={[-149.407, 105.806, -1608.347]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube014_Railing_0.geometry}
          material={materials.Railing}
          position={[106.533, 104.37, -1608.347]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane025_Railing_0.geometry}
          material={materials.Railing}
          position={[-92.347, 629.85, -1610.758]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube009_Blue_0.geometry}
          material={materials.Blue}
          position={[30.892, 297.178, -1059.452]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane024_Railing_0.geometry}
          material={materials.Railing}
          position={[33.823, 2.433, 1039.708]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane023_Railing_0.geometry}
          material={materials.Railing}
          position={[35.389, 2.433, 1302.174]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane022_Railing_0.geometry}
          material={materials.Railing}
          position={[-79.125, 2.433, 1347.443]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane021_Railing_0.geometry}
          material={materials.Railing}
          position={[-48.92, 2.433, 1172.239]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane020_Railing_0.geometry}
          material={materials.Railing}
          position={[-75.967, 2.433, 995.13]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane019_Railing_0.geometry}
          material={materials.Railing}
          position={[-161.134, 2.433, 112.533]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane018_Railing_0.geometry}
          material={materials.Railing}
          position={[-13.103, 2.433, 112.533]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane017_Railing_0.geometry}
          material={materials.Railing}
          position={[105.381, 2.433, -65.579]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane015_Railing_0.geometry}
          material={materials.Railing}
          position={[-620.926, 276.892, 989.871]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane014_Railing_0.geometry}
          material={materials.Railing}
          position={[-620.926, 276.892, 1610.291]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane013_Railing_0.geometry}
          material={materials.Railing}
          position={[-620.926, 276.892, -251.733]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane012_Railing_0.geometry}
          material={materials.Railing}
          position={[-92.347, 629.85, 1718.429]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane011_Railing_0.geometry}
          material={materials.Railing}
          position={[-92.347, 629.85, -523.095]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane010_Railing_0.geometry}
          material={materials.Railing}
          position={[-444.744, 629.85, -372.54]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube005_Railing_0.geometry}
          material={materials.Railing}
          position={[106.533, 104.37, -523.098]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane009_Railing_0.geometry}
          material={materials.Railing}
          position={[-149.407, 105.806, -523.098]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube004_Railing_0.geometry}
          material={materials.Railing}
          position={[-387.71, 104.37, -509.642]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube003_Railing_0.geometry}
          material={materials.Railing}
          position={[-387.71, 104.37, 1714.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane008_Railing_0.geometry}
          material={materials.Railing}
          position={[-149.407, 105.806, 1714.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube002_Railing_0.geometry}
          material={materials.Railing}
          position={[106.533, 104.37, 1714.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane007_Railing_0.geometry}
          material={materials.Railing}
          position={[-444.744, 629.85, 1573.551]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube001_Railing_0.geometry}
          material={materials.Railing}
          position={[106.533, 104.37, 599.31]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane006_Railing_0.geometry}
          material={materials.Railing}
          position={[718.798, -22.134, 1156.847]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane005_Railing_0.geometry}
          material={materials.Railing}
          position={[718.798, -22.134, 46.04]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane004_Railing_0.geometry}
          material={materials.Railing}
          position={[-149.407, 105.806, 599.31]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane003_Railing_0.geometry}
          material={materials.Railing}
          position={[-444.744, 629.85, 953.131]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane002_Railing_0.geometry}
          material={materials.Railing}
          position={[-444.744, 629.85, 246.999]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Plane001_Railing_0.geometry}
          material={materials.Railing}
          position={[-92.347, 629.85, 599.31]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.Cube_Railing_0.geometry}
          material={materials.Railing}
          position={[-387.71, 104.37, 599.31]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.AlphaUWU_AlphaUWU_0.geometry}
          material={materials.AlphaUWU}
          position={[0, 0, 22.167]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          
          
          geometry={nodes.OmegaXD_OmegaXD_0.geometry}
          material={materials.OmegaXD}
          position={[-37.824, 437.39, 1165.542]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </a.group>
  )
}

export default mech_hangar;
