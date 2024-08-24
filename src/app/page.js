import ResponsiveAppBar from "@/components/AppBar";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{paddingLeft:"15%"}}>
      <ResponsiveAppBar/>
      
    </main>
  );
}
