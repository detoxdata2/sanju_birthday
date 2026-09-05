import { ToggleSection } from "@/components/ToggleSection";
import { HeroSection } from "../components/sections/HeroSection";
import { DraggableCardBody, DraggableCardContainer } from "@/components/DraggableCards";
import LoveGallery from "@/components/LoveGallery";
import StellarCardGallerySingle from "@/components/NewWorld";
import Book from "@/components/Book";
import { Section } from "lucide-react";
import DoodleBackgroundDemo from "@/components/DoodleBg";
import FloatingNotes from "@/components/Butterfly";
import ShowtimeCountdown from "@/components/Curtain";
import BirthdayScrollBridge from "@/components/BirthdayScrollBridge";


export default function Home() {
  return (

       <ShowtimeCountdown
      
      // change this date to the desired countdown target date
      showPreviewButton={true}
      
      targetDate={new Date('2026-09-05T00:00:00+05:30')}
     
     
    >
<BirthdayScrollBridge />
<div className="birthday-scroll h-full w-full overflow-x-hidden overflow-y-auto md:snap-y md:snap-mandatory bg-zinc-50 dark:bg-black select-none scroll-smooth">
      {/* <section className="h-screen w-full snap-start snap-always shrink-0">
     

      </section> */}
    
        {/* <ToggleSection /> */}
        {/* <BirthdayMagic /> */}
         
           {/* <StellarCardGallerySingle/> */}
           {/* <StellarCardGallerySingle/> */}
             {/* <HeroSection /> */}
             

              <section className="birthday-embed h-dvh w-full snap-start shrink-0 relative z-10">
                   <iframe
      src="/birthday.html"
      title="Birthday Reveal"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
      }}
      allow="autoplay"
    />
                <a href="#birthday-hero" className="embed-next md:hidden">Continue to photos</a>
              </section>

         

         
           
        
     
 
    <section id="birthday-hero" className="h-dvh w-full snap-start shrink-0 relative z-10">
<HeroSection />
    </section>


      <section className="h-dvh w-full snap-start shrink-0 relative z-10">
        <FloatingNotes/>
 <LoveGallery/>
    </section>

    <section className="h-dvh w-full snap-start shrink-0 relative z-10">
      
      <DoodleBackgroundDemo/>


      {/* Actual book */}
 {/* <div className="flex  h-screen overflow-hidden flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
                           <Book/>  
              </div> */}
    </section>



    <section className="h-dvh w-full snap-start shrink-0 relative">
        <StellarCardGallerySingle />
      </section>

         <section className="birthday-embed h-dvh w-full snap-start shrink-0 relative z-10">
                   <iframe
      src="/last.html"
      title="Birthday Reveal"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
      }}
      allow="autoplay"
    />  
              </section>

              



 


  


    
   


    


    

     

      
    </div>

    </ShowtimeCountdown>

    
  );
}
