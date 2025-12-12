import Image from "next/image";
import { OfficeSpace } from "../types/officeSpaces.types";

export default function OfficeSales({ contact }: { contact: OfficeSpace }) {
  return (
    <>
      {contact.salesContacts.map((sales, index) => (
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
    </>
  );
}
