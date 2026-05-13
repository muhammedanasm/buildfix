import Hero from "@/components/home/Hero";
import ComingSoon from "@/components/layout/ComingSoon";

export default function Home() {
  return (
    <>
      <ComingSoon />
      {/* <Hero /> */}
      {/* സ്ക്രോളിംഗ് ഇനിയും വേണമെങ്കിൽ താഴെ ഒരു ഹൈറ്റ് ഉള്ള ഡിവി കൂടി ഇടാം */}
      {/* <div className="h-[100vh] bg-black flex items-center justify-center">
        <h2 className="text-white/10 text-[10vw] font-bold uppercase select-none">Services</h2>
      </div> */}
      {/* മറ്റു സെക്ഷനുകൾ (About, Services) താഴെ വരും */}
    </>
  );
}