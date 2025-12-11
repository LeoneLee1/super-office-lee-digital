import { formatRupiah } from "@/app/lib/utils/formatRupiah";
import Navbar from "@/components/Navbar";
import { officeSpaces } from "@/features/offices/data/officeSpaces.mock";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function OfficeSpaceDetailPage({ params }: Props) {
  const { slug } = await params;

  const office = officeSpaces.find((o) => o.slug === slug);

  if (!office) return notFound();

  return (
    <>
      <Navbar />
      <section id="Gallery" className="-mb-[50px]">
        <div className="swiper w-full">
          <div className="swiper-wrapper">
            <div className="swiper-slide !w-fit">
              <div className="w-[700px] h-[550px] overflow-hidden">
                <Image src={office.images[0]} width={500} height={500} className="w-full h-full object-cover" alt="thumbnail" />
              </div>
            </div>
            <div className="swiper-slide !w-fit">
              <div className="w-[700px] h-[550px] overflow-hidden">
                <Image src={office.images[1]} width={500} height={500} className="w-full h-full object-cover" alt="thumbnail" />
              </div>
            </div>
            <div className="swiper-slide !w-fit">
              <div className="w-[700px] h-[550px] overflow-hidden">
                <Image src={office.images[2]} width={500} height={500} className="w-full h-full object-cover" alt="thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Details" className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10">
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          <p className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">{office.tags}</p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-extrabold text-[32px] leading-[44px]">{office.title}</h1>
              <div className="flex items-center gap-[6px] mt-[10px]">
                <Image src="/assets/images/icons/location.svg" width={24} height={24} className="w-6 h-6" alt="icon" />
                <p className="font-semibold">{office.location}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-1">
                <Image src="/assets/images/icons/Star 1.svg" width={24} height={24} className="w-5 h-5" alt="star" />
                <Image src="/assets/images/icons/Star 1.svg" width={24} height={24} className="w-5 h-5" alt="star" />
                <Image src="/assets/images/icons/Star 1.svg" width={24} height={24} className="w-5 h-5" alt="star" />
                <Image src="/assets/images/icons/Star 1.svg" width={24} height={24} className="w-5 h-5" alt="star" />
                <Image src="/assets/images/icons/Star 5.svg" width={24} height={24} className="w-5 h-5" alt="star" />
              </div>
              <p className="font-semibold text-right">{office.rating}/5 </p>
              {/* <p className="font-semibold text-right">4.5/5 (19,384)</p> */}
            </div>
          </div>
          <p className="leading-[30px]">{office.about}</p>
          <hr className="border-[#F6F5FD]" />
          <h2 className="font-bold">You Get What You Need Most</h2>
          <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
            <div className="flex items-center gap-4">
              <Image src="/assets/images/icons/security-user.svg" width={24} height={24} className="w-[34px] h-[34px]" alt="icon" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Privacy</p>
                <p className="text-sm leading-[21px]">For Yourself</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/assets/images/icons/cup.svg" width={24} height={24} className="w-[34px] h-[34px]" alt="icon" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Global Event</p>
                <p className="text-sm leading-[21px]">Startup Contest</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/assets/images/icons/home-trend-up.svg" width={24} height={24} className="w-[34px] h-[34px]" alt="icon" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Sustainbility</p>
                <p className="text-sm leading-[21px]">Long-term Goals</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/assets/images/icons/coffee.svg" width={24} height={24} className="w-[34px] h-[34px]" alt="icon" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Extra Snacks</p>
                <p className="text-sm leading-[21px]">Work-Life Balance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/assets/images/icons/3dcube.svg" width={24} height={24} className="w-[34px] h-[34px]" alt="icon" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Compact</p>
                <p className="text-sm leading-[21px]">Good for Focus</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/assets/images/icons/group.svg" width={24} height={24} className="w-[34px] h-[34px]" alt="icon" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Free Move</p>
                <p className="text-sm leading-[21px]">Anytime 24/7</p>
              </div>
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold">Office Address</h2>
            <p>{office.address}</p>
          </div>
          <div className="overflow-hidden w-full h-[280px]">
            <div id="my-map-display" className="h-full w-full max-w-[none] bg-none">
              <iframe className="h-full w-full border-0" frameBorder={0} src="https://www.google.com/maps/embed/v1/place?q=Xicheng+District,+Beijing,&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
            </div>
            <a className="from-embedmap-code" href="https://www.bootstrapskins.com/themes" id="enable-map-data">
              premium bootstrap themes
            </a>
          </div>
        </div>
        <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
            <div>
              <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">{formatRupiah(office.price)}</p>
              <p className="font-semibold mt-1">For {office.duration} working</p>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Image src="/assets/images/icons/verify.svg" width={24} height={24} className="w-[30px] h-[30px]" alt="icon" />
                <p className="font-semibold leading-[28px]">Mendapatkan akses pembelajaran terbaru terkait dunia startup</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/assets/images/icons/verify.svg" width={24} height={24} className="w-[30px] h-[30px]" alt="icon" />
                <p className="font-semibold leading-[28px]">Mendapatkan akses pembelajaran terbaru terkait dunia startup</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/assets/images/icons/verify.svg" width={24} height={24} className="w-[30px] h-[30px]" alt="icon" />
                <p className="font-semibold leading-[28px]">Mendapatkan akses pembelajaran terbaru terkait dunia startup</p>
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-[14px]">
              <a href="booking.html" className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]">
                <Image src="/assets/images/icons/slider-horizontal-white.svg" width={24} height={24} className="w-6 h-6" alt="icon" />
                <span>Book This Office</span>
              </a>
              <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
                <Image src="/assets/images/icons/save-add.svg" width={24} height={24} className="w-6 h-6" alt="icon" />
                <span>Save for Later</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
            <h2 className="font-bold">Contact Our Sales</h2>
            <div className="flex flex-col gap-[30px]">
              {office.salesContacts.map((sales, index) => (
                <div key={index} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                      <Image src={sales.photo} width={50} height={50} className="w-full h-full object-cover" alt="photo" />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <p className="font-bold">{sales.name}</p>
                      <p className="text-sm leading-[21px]">{sales.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="#">
                      <Image src="/assets/images/icons/call-green.svg" width={50} height={50} className="w-10 h-10" alt="icon" />
                    </a>
                    <a href="#">
                      <Image src="/assets/images/icons/chat-green.svg" width={50} height={50} className="w-10 h-10" alt="icon" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
