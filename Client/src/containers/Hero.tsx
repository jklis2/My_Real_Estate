import HeroForm from 'components/hero/HeroForm.tsx';

export default function Hero() {
  return (
    <section className="bg-[url('../assets/HeroImg.webp')] relative h-auto bg-cover bg-center sm:rounded-2xl text-center lg:p-16 p-8">
      <div className="h-full w-full inset-0 bg-black opacity-10 absolute sm:rounded-2xl" />
      <h1 className="text-white text-4xl sm:text-5xl md:text-7xl leading-snug py-10 relative lg:p-16 p-8 z-999">Sell, buy, rent and manage Your properties easily</h1>
      <HeroForm />
    </section>
  );
}
