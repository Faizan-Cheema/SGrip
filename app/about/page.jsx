import WeWorkWith from "../components/about/WeWorkWith";
import HeroSection from "../components/about/HeroSection";
import Introduction from "../components/about/Introduction";
import OurMission from "../components/about/OurMission";
import ReadyToBuild from "../components/about/ReadyToBuild";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
          
            <HeroSection />

           
            <Introduction />

           
            <OurMission />

            
            <WeWorkWith />

           
            <ReadyToBuild />
        </div>
    );
}
