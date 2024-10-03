import Hero from "../components/Hero";
import Equipents from "../components/Equipents";
import Pricing from "@/components/Pricing";
import Stat from "@/components/Stat";
import WhatsAppButton from "@/components/Whatsapp";
import Service from "@/components/Service";
import Accordion from "@/components/Accordion";
export default function Home() {
  const bgStyle = {
    backgroundImage: "url('/image/bg.png')",  // URL doğrudan string olarak verildi
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  };

  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        
        <Hero />
      </div>
      <WhatsAppButton/>
      <Equipents />
      <Pricing/>
      <Service/>
      <Accordion/>
      <Stat/>
    </div>
  );
}
