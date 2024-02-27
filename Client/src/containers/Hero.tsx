import HeroForm from "../components/HeroForm";

export default function Hero() {
  return (
    <section className="bg-[url('../assets/HeroImg.png')] relative h-auto bg-cover bg-center rounded-2xl text-center lg:p-16 p-8">
      <div className="h-full w-full inset-0 bg-black opacity-10 absolute rounded-2xl" />
      <h1 className="text-white text-7xl leading-snug py-10 relative lg:p-16 p-8 z-999">
        Sell, buy, rent and manage Your properties easily
      </h1>
      <HeroForm />
    </section>
  );
}
