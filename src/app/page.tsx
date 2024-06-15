
import Header from "@app/Header/page"
import Hero from "@app/Hero/page";
import Popular from "@app/Popular/page";
import About from "@app/About/page";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Popular />
      <About/>
      <div className="text-center my-10 text-[gray] font-semibold">That&apos;s all for now ~</div>
    </>
  );
}
