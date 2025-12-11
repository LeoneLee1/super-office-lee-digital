import Image from "next/image";
import Link from "next/link";
import { OfficeSpace } from "../types/officeSpaces.types";
import { formatRupiah } from "@/app/lib/utils/formatRupiah";

export default function OfficeSpaceCard({ officeSpace }: { officeSpace: OfficeSpace }) {
  return (
    <>
      <Link href={`/office/${officeSpace.slug}`} className="card">
        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
          <div className="thumbnail-container relative w-full h-[200px]">
            <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">{officeSpace.tags}</p>
            <Image src={officeSpace.image} width={500} height={500} className="w-full h-full object-cover" alt="thumbnails" />
          </div>
          <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
            <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">{officeSpace.title}</h3>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl leading-[30px]">{formatRupiah(officeSpace.price)}</p>
              <div className="flex items-center justify-end gap-[6px]">
                <p className="font-semibold">{officeSpace.duration}</p>
                <Image src="/assets/images/icons/clock.svg" width={24} height={24} className="w-6 h-6" alt="icon" />
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-end gap-[6px]">
                <Image src="/assets/images/icons/location.svg" width={24} height={24} className="w-6 h-6" alt="icon" />
                <p className="font-semibold">{officeSpace.location}</p>
              </div>
              <div className="flex items-center justify-end gap-[6px]">
                <p className="font-semibold">{officeSpace.rating}/5</p>
                <Image src="/assets/images/icons/Star 1.svg" width={24} height={24} className="w-6 h-6" alt="icon" />
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-end gap-[6px]">
                <Image src="/assets/images/icons/wifi.svg" width={24} height={24} className="w-6 h-6" alt="icon" />
                <p className="font-semibold">{officeSpace.features[0]}</p>
              </div>
              <div className="flex items-center justify-end gap-[6px]">
                <Image src="/assets/images/icons/security-user.svg" width={24} height={24} className="w-6 h-6" alt="icon" />
                <p className="font-semibold">{officeSpace.features[1]}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
