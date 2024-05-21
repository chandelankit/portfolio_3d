import { useState,Suspense,lazy} from 'react';
const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));
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

  const adjustMech_hangar = () =>{

    let screenScale = null;
    let screenPosition = null;
    let screenRotation =[0,4.7,3.1];

    if(window.innerWidth < 950){
      screenScale = [-2.5, -2.5, -2.5];
      screenPosition=[1, -15, -70];
    }
    else{
      screenScale = [-5.2,-5.2,-4.2];
      screenPosition=[1.2,-29, -95];
    }

    return [screenScale, screenPosition, screenRotation];
  }

  const adjustSpacecraft = () =>{

    let screenScale ,screenPosition ;
    let screenRotation =[0.,3.2,-.1];

    if(window.innerWidth < 900){
      screenScale = [0.007, 0.007, 0.007];
      screenPosition = [-.0,.01,4.8];
    }
    else{
      screenScale = [0.004,0.004,0.004];
      screenPosition=[-.02,-.03,4.8];
    }

    return [screenScale, screenPosition, screenRotation];
  }

  const [MinecraftScale, MinecraftPosition, MinecraftRotation] = adjustMinecraft();
  const [Mech_hangarScale, Mech_hangarPosition, Mech_hangarRotation] = adjustMech_hangar();
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

        {/* <Spacecraft 

          position={SpacecraftPosition}
          scale={SpacecraftScale}
          rotation={SpacecraftRotation}
          isRotating={isRotating}
          isScrolling={isScrolling}
        /> */}

        <Sky_pano 
          
          position={[1,1,-10]}
          scale={[-50,-50,-50]}
          isRotating={isRotating}
        
        
        />

        <Mech_hangar

         position={Mech_hangarPosition}
         scale={Mech_hangarScale}
         rotation={Mech_hangarRotation}
         isRotating={isRotating}
         setIsRotating={setIsRotating}
         currentStage={currentStage}
         setCurrentStage={setCurrentStage}
         isScrolling={isScrolling}
         setIsScrolling={setIsScrolling}
        />
      </Suspense>
     </Canvas>

    </section>
  )
}

export default Home