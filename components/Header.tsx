import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="flex flex-col w-full">
        <section id="Hero-Banner" className="relative flex h-[720px] -mb-[93px]">
          <div id="Hero-Text" className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10">
            <div className="flex items-center w-fit rounded-full py-2 px-4 gap-[10px] bg-[#000929]">
              <Image src="/assets/images/icons/crown-white.svg" width={24} height={24} className="w-5 h-5" alt="icon" />
              <span className="font-semibold text-white">We’ve won top productivity 500 fortunes</span>
            </div>
            <h1 className="font-extrabold text-[50px] leading-[60px]">
              All Great Offices.
              <br />
              Grow Your Business.
            </h1>
            <p className="text-lg leading-8 text-[#000929]">The right office can have a better and healthier impact on work and career growth.</p>
            <div className="flex items-center gap-5">
              <a href="#Cities" className="flex items-center rounded-full p-[20px_26px] gap-3 bg-[#0D903A]">
                <Image src="/assets/images/icons/slider-horizontal-white.svg" width={24} height={24} className="w-[30px] h-[30px]" alt="icon" />
                <span className="font-bold text-xl leading-[30px] text-[#F7F7FD]">Explore Now</span>
              </a>
            </div>
          </div>
          <div id="Hero-Image" className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[720px] rounded-bl-[40px] overflow-hidden">
            <Image src="/assets/images/backgrounds/banner.webp" width={500} height={500} className="w-full h-full object-cover" alt="hero background" />
          </div>
        </section>
        <div className="flex flex-col pt-[150px] pb-10 px-[120px] gap-10 bg-[#0D903A]">
          <div className="logo-contianer flex items-center justify-center flex-wrap max-w-[1130px] h-[38px] mx-auto gap-[60px]">
            <Image src="/assets/images/logos/TESLA.svg" width={120} height={120} alt="clients logo" />
            <Image src="/assets/images/logos/Libra 2.svg" width={120} height={120} alt="clients logo" />
            <Image src="/assets/images/logos/Binance logo.svg" width={120} height={120} alt="clients logo" />
            <Image src="/assets/images/logos/Facebook 7.svg" width={120} height={120} alt="clients logo" />
            <Image src="/assets/images/logos/Microsoft 6.svg" width={120} height={120} alt="clients logo" />
          </div>
          <div className="flex justify-center gap-[50px]">
            <div className="flex flex-col gap-[2px] text-center">
              <p className="text-xl leading-[30px] text-[#F7F7FD]">Comfortable Space</p>
              <p className="font-bold text-[38px] leading-[57px] text-white">580M+</p>
            </div>
            <div className="flex flex-col gap-[2px] text-center">
              <p className="text-xl leading-[30px] text-[#F7F7FD]">Startups Succeed</p>
              <p className="font-bold text-[38px] leading-[57px] text-white">98%</p>
            </div>
            <div className="flex flex-col gap-[2px] text-center">
              <p className="text-xl leading-[30px] text-[#F7F7FD]">Countries</p>
              <p className="font-bold text-[38px] leading-[57px] text-white">90+</p>
            </div>
            <div className="flex flex-col gap-[2px] text-center">
              <p className="text-xl leading-[30px] text-[#F7F7FD]">Supportive Events</p>
              <p className="font-bold text-[38px] leading-[57px] text-white">139M+</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
