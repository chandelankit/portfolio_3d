import { useRef,useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame,useThree } from "@react-three/fiber";
import {a} from '@react-spring/three'

import motherless_smp_townScene from '../assets/3d/motherless_smp_town.glb'

const motherless_smp_town = ({isRotating, setIsRotating,isScrolling,setIsScrolling, setCurrentStage , ...props}) => {
  const motherless_smp_townRef = useRef();
  const {gl,viewport} = useThree();
  const { nodes, materials } = useGLTF(motherless_smp_townScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);

    

  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating){
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const delta = (clientX -lastX.current) /viewport.width;

    motherless_smp_townRef.current.rotation.y+=delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.009 * Math.PI;
    // lastX.current = clientX;
    // rotationSpeed.current = delta * 0.009 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
      if(!isRotating) setIsRotating(true);
      motherless_smp_townRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = .0125;

    }
    else if (e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating(true);
      motherless_smp_townRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -.0125;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight')
      setIsRotating(false);
    
  }
  const handleWheel = (e) => {
    const rotationSpeed = 0.75; // Adjust the rotation speed as needed
    const targetDelta = e.deltaY > 0 ? 1 : -1; // Adjust the direction and angle as needed

    smoothRotate(targetDelta * rotationSpeed);
  };

  const smoothRotate = (targetDelta) => {
    if (!isScrolling) {
      setIsScrolling(true);

      const startTime = performance.now();
      const startRotation = motherless_smp_townRef.current.rotation.y;

      const updateRotation = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / 500, 1); // Adjust duration as needed
        const delta = targetDelta * progress;

        motherless_smp_townRef.current.rotation.y = startRotation + delta;

        if (progress < 1) {
          requestAnimationFrame(updateRotation);
        } else {
          setIsScrolling(false);
        }
      };

      requestAnimationFrame(updateRotation);
    }
  };


  useFrame(() => {
    if(!isRotating && !isScrolling){
      rotationSpeed.current  *= dampingFactor;

      if(Math.abs(rotationSpeed.current) < 0.001){
        rotationSpeed.current = 0;
      }
      motherless_smp_townRef.current.rotation.y +=rotationSpeed.current;
    }
    else{
      const rotation = motherless_smp_townRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('wheel', handleWheel);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () =>{
      canvas.removeEventListener('pointerdown',handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }

  },[gl, handlePointerDown,handlePointerUp,handlePointerMove])
  return (
    <a.group ref={motherless_smp_townRef} {...props} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          
          
          geometry={nodes.Object_2.geometry}
          material={materials.Beacon}
        />
        <mesh
          
          
          geometry={nodes.Object_3.geometry}
          material={materials.Block_of_Diamond}
        />
        <mesh
          
          
          geometry={nodes.Object_4.geometry}
          material={materials.Purpur_Pillar}
        />
        <mesh
          
          
          geometry={nodes.Object_5.geometry}
          material={materials.Clay}
        />
        <mesh
          
          
          geometry={nodes.Object_6.geometry}
          material={materials.Crying_Obsidian}
        />
        <mesh
          
          
          geometry={nodes.Object_7.geometry}
          material={materials.Torch}
        />
        <mesh
          
          
          geometry={nodes.Object_8.geometry}
          material={materials.Ender_Chest}
        />
        <mesh
          
          
          geometry={nodes.Object_9.geometry}
          material={materials.Glass_Pane}
        />
        <mesh
          
          
          geometry={nodes.Object_10.geometry}
          material={materials.Hopper}
        />
        <mesh
          
          
          geometry={nodes.Object_11.geometry}
          material={materials.Hopper}
        />
        <mesh
          
          
          geometry={nodes.Object_12.geometry}
          material={materials.Hopper}
        />
        <mesh
          
          
          geometry={nodes.Object_13.geometry}
          material={materials.Hopper}
        />
        <mesh
          
          
          geometry={nodes.Object_14.geometry}
          material={materials.material}
        />
        <mesh
          
          
          geometry={nodes.Object_15.geometry}
          material={materials.Lantern}
        />
        <mesh
          
          
          geometry={nodes.Object_16.geometry}
          material={materials.Light_Blue_Glazed_Terracotta}
        />
        <mesh
          
          
          geometry={nodes.Object_17.geometry}
          material={materials.Lit_White_Candle}
        />
        <mesh
          
          
          geometry={nodes.Object_18.geometry}
          material={materials.Magma_Block}
        />
        <mesh
          
          
          geometry={nodes.Object_19.geometry}
          material={materials.Nether_Portal}
        />
        <mesh
          
          
          geometry={nodes.Object_20.geometry}
          material={materials.Lantern_0}
        />
        <mesh
          
          
          geometry={nodes.Object_21.geometry}
          material={materials.Crying_Obsidian_0}
        />
        <mesh
          
          
          geometry={nodes.Object_22.geometry}
          material={materials.Torch_0}
        />
        <mesh
          
          
          geometry={nodes.Object_23.geometry}
          material={materials.Torch_0}
        />
        <mesh
          
          
          geometry={nodes.Object_24.geometry}
          material={materials.Light_Blue_Glazed_Terracotta_0}
        />
        <mesh
          
          
          geometry={nodes.Object_25.geometry}
          material={materials.Brown_Mushroom}
        />
        <mesh
          
          
          geometry={nodes.Object_26.geometry}
          material={materials.Block_of_Gold}
        />
        <mesh
          
          
          geometry={nodes.Object_27.geometry}
          material={materials.Stationary_Lava}
        />
        <mesh
          
          
          geometry={nodes.Object_28.geometry}
          material={materials.Polished_Blackstone_Stairs}
        />
        <mesh
          
          
          geometry={nodes.Object_29.geometry}
          material={materials.Polished_Blackstone_Stairs}
        />
        <mesh
          
          
          geometry={nodes.Object_30.geometry}
          material={materials.Polished_Blackstone_Stairs}
        />
        <mesh
          
          
          geometry={nodes.Object_31.geometry}
          material={materials.Polished_Blackstone_Stairs}
        />
        <mesh
          
          
          geometry={nodes.Object_32.geometry}
          material={materials.Oak_Planks}
        />
        <mesh
          
          
          geometry={nodes.Object_33.geometry}
          material={materials.Oak_Planks}
        />
        <mesh
          
          
          geometry={nodes.Object_34.geometry}
          material={materials.Oak_Planks}
        />
        <mesh
          
          
          geometry={nodes.Object_35.geometry}
          material={materials.Oak_Planks}
        />
        <mesh
          
          
          geometry={nodes.Object_36.geometry}
          material={materials.Ender_Chest_0}
        />
        <mesh
          
          
          geometry={nodes.Object_37.geometry}
          material={materials.Ender_Chest_0}
        />
        <mesh
          
          
          geometry={nodes.Object_38.geometry}
          material={materials.Stationary_Lava_0}
        />
        <mesh
          
          
          geometry={nodes.Object_39.geometry}
          material={materials.Stationary_Lava_0}
        />
        <mesh
          
          
          geometry={nodes.Object_40.geometry}
          material={materials.Stationary_Lava_0}
        />
        <mesh
          
          
          geometry={nodes.Object_41.geometry}
          material={materials.Polished_Blackstone_Stairs_0}
        />
        <mesh
          
          
          geometry={nodes.Object_42.geometry}
          material={materials.Polished_Blackstone_Stairs_0}
        />
        <mesh
          
          
          geometry={nodes.Object_43.geometry}
          material={materials.Polished_Blackstone_Stairs_0}
        />
        <mesh
          
          
          geometry={nodes.Object_44.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_45.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_46.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_47.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_48.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_49.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_50.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_51.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_52.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_53.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_54.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_55.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_56.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_57.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_58.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_59.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_60.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_61.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_62.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_63.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_64.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_65.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_66.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_67.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_68.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_69.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_70.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_71.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_72.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_73.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_74.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_75.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_76.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_77.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_78.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_79.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_80.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_81.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_82.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_83.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_84.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_85.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_86.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_87.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_88.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_89.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_90.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_91.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_92.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_93.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_94.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_95.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_96.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_97.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_98.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_99.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_100.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_101.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_102.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_103.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_104.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_105.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_106.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_107.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_108.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_109.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_110.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_111.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_112.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_113.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_114.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_115.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_116.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_117.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_118.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_119.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_120.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_121.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_122.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_123.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_124.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_125.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_126.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_127.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_128.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_129.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_130.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_131.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_132.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_133.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_134.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_135.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_136.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_137.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_138.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_139.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_140.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_141.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_142.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_143.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_144.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_145.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_146.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_147.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_148.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_149.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_150.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_151.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_152.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_153.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_154.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_155.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_156.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_157.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_158.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_159.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_160.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_161.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_162.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_163.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_164.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_165.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_166.geometry}
          material={materials.Concrete}
        />
        <mesh
          
          
          geometry={nodes.Object_167.geometry}
          material={materials.Purpur_Pillar_0}
        />
        <mesh
          
          
          geometry={nodes.Object_168.geometry}
          material={materials.Purpur_Pillar_0}
        />
        <mesh
          
          
          geometry={nodes.Object_169.geometry}
          material={materials.Purpur_Pillar_0}
        />
        <mesh
          
          
          geometry={nodes.Object_170.geometry}
          material={materials.Smooth_Quartz_Stairs}
        />
        <mesh
          
          
          geometry={nodes.Object_171.geometry}
          material={materials.Smooth_Quartz_Stairs}
        />
        <mesh
          
          
          geometry={nodes.Object_172.geometry}
          material={materials.Smooth_Quartz_Stairs}
        />
        <mesh
          
          
          geometry={nodes.Object_173.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_174.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_175.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_176.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_177.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_178.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_179.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_180.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_181.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_182.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_183.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_184.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_185.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_186.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_187.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_188.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_189.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_190.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_191.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_192.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_193.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_194.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_195.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_196.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_197.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_198.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_199.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_200.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_201.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_202.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_203.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_204.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_205.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_206.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_207.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_208.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_209.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_210.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_211.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_212.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_213.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_214.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_215.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_216.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_217.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_218.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_219.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_220.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_221.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_222.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_223.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_224.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_225.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_226.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_227.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_228.geometry}
          material={materials.Concrete_0}
        />
        <mesh
          
          
          geometry={nodes.Object_229.geometry}
          material={materials.Colored_Terracotta}
        />
        <mesh
          
          
          geometry={nodes.Object_230.geometry}
          material={materials.Colored_Terracotta}
        />
        <mesh
          
          
          geometry={nodes.Object_231.geometry}
          material={materials.Colored_Terracotta}
        />
        <mesh
          
          
          geometry={nodes.Object_232.geometry}
          material={materials.Colored_Terracotta}
        />
      </group>
    </a.group>
  );
}


export default motherless_smp_town;
