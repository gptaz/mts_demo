"use client";
import ResponsiveAppBar from "@/components/AppBar";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Product from "@/components/product";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{
        paddingLeft: "15%",
        // background: "linear-gradient(to bottom, black, white)",
        background: "black",
      }}
    >
      <ResponsiveAppBar />
      <Hero />
      <Product />
    </main>
  );
}
