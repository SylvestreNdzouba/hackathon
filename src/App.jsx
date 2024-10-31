import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Bague from "../public/bague_hackathon";
import AuraEffect from "./components/AuraEffect";
import TextComponent from "./components/TextComponent";
import "./App.css";
import { Environment } from "@react-three/drei";
import Title from "./components/Title";
import RevealOverlay from "./components/RevealOverlay";
import FirstText from "./components/FirstText";
import SecondText from "./components/SecondText";
import VideoSection from "./components/VideoSection";
import BlackSection from "./components/BlackSection";
import ArticlesSection from "./components/ArticlesSection";
import Estelle from "./components/Estelle";
import BagueFooter from "../public/bague_footer";
import LottieBouton from "./components/LottieBouton";
import Footer from "./components/Footer";
import MoltenFooter from "./components/MoltenFooter";
import Lottie from "lottie-react";
import LottieTitle from "./components/Title";
import VideoFooter from "./components/VideoFooter";
function App() {
  return (
    <>
      <RevealOverlay />
      <AuraEffect />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Title />
      </div>

      {/* Container pour l'effet sticky */}
      <div style={{ height: "425vh", position: "relative" }}>
        {/* Wrapper qui sera épinglé */}
        <div
          style={{
            height: "80vh",
            position: "sticky",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "150vh",
              height: "150vh",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <Canvas
            camera={{
              fov: 45,
              position: [0, 0, 12],
              near: 0.1,
              far: 1000,
            }}
          >
            <ambientLight />
            <OrbitControls enableZoom={false} />
            <Environment preset="sunset" environmentIntensity={0.8} />
            <Suspense fallback={null}>
              <Bague
                position={[0, -1.6, 0]}
                scale={[2, 2, 2]}
                rotation={[Math.PI / 6, Math.PI / 3, 0]}
                zIndex={2}
              />
            </Suspense>
          </Canvas>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <FirstText />
          <SecondText />
        </div>
        <VideoSection zIndex={3} />
        <BlackSection />
        <ArticlesSection />
        <Estelle />
        <Canvas style={{ backgroundColor: "black", height: "200vh" }}>
          {/* Ajustez la taille ici */}
          <ambientLight />
          <OrbitControls enableZoom={false} />
          <Environment preset="sunset" environmentIntensity={0.8} />
          <Suspense fallback={null}>
            <BagueFooter scale={[0.2, 0.2, 0.2]} position={[0, -3, 0]} />
          </Suspense>
        </Canvas>
        <VideoFooter />

        <Footer />
        <MoltenFooter />
      </div>
    </>
  );
}

export default App;
