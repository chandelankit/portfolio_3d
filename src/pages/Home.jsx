import { useState,Suspense,lazy} from 'react';
const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));

const Motherless_smp_town = lazy(()=>import('../Models/Motherless_smp_town'))
const Spacecraft = lazy(()=>import('../Models/Spacecraft'))
const Sky_pano = lazy(()=>import('../Models/Sky_pano'))
const Loader = lazy(()=>import('../components/Loader'))
const HomeInfo = lazy(()=>import('../components/HomeInfo'))
const Mech_hangar = lazy(()=>import('../Models/Mech_hangar'))


const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isRotating,setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustMinecraft = () =>{

    let screenScale = null;
    let screenPosition = null;
    let screenRotation =[0,90,0];

    if(window.innerWidth < 950){
      screenScale = [-2, -2, -2];
      screenPosition=[0, -10, -70];
    }
    else{
      screenScale = [1,1,1];
      screenPosition=[-0.2, -0.45, 4];
    }

    return [screenScale, screenPosition, screenRotation];
  }

  const adjustSpacecraft = () =>{

    let screenScale ,screenPosition ;
    let screenRotation =[0.3,3.2,-.1];

    if(window.innerWidth < 900){
      screenScale = [0.001, 0.001, 0.001];
      screenPosition = [];
    }
    else{
      screenScale = [0.007,0.007,0.007];
      screenPosition=[-.07,.03,4.7];
    }

    return [screenScale, screenPosition, screenRotation];
  }

  const [MinecraftScale, MinecraftPosition, MinecraftRotation] = adjustMinecraft();
  const [SpacecraftScale,SpacecraftPosition,SpacecraftRotation] = adjustSpacecraft();

  return (
    <section className="w-full h-screen relative">
      
<div className=" absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-white ">
  {currentStage && <HomeInfo currentStage={currentStage} />}

</div>
      <Canvas className= {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near: 0.1, far:1000}}>

      <Suspense fallback={<Loader />}>

        <directionalLight position={[1,2,0]} intensity={.8}/>
        <ambientLight intensity={.51} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={.7} />

        <Spacecraft 

          position={SpacecraftPosition}
          scale={SpacecraftScale}
          rotation={SpacecraftRotation}
          isRotating={isRotating}
          isScrolling={isScrolling}
        />

        <Sky_pano 
          
          position={[1,1,-10]}
          scale={[-50,-50,-50]}
          isRotating={isRotating}
        
        
        />

        {/* < Motherless_smp_town 

          position={MinecraftPosition}
          scale={MinecraftScale}
          rotation={MinecraftRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          currentStage={currentStage}
          setCurrentStage={setCurrentStage}
          isScrolling={isScrolling}
          setIsScrolling={setIsScrolling}
        
        /> */}

        <Mech_hangar/>
      </Suspense>
     </Canvas>

    </section>
  )
}

export default Home