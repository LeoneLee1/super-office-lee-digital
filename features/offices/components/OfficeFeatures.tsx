import Image from "next/image";

const FEATURES_MAP = [
  {
    label: "Fast Connection",
    description: "Stable & high-speed internet",
    icon: "/assets/images/icons/wifi.svg",
  },
  {
    label: "Privacy",
    description: "For yourself",
    icon: "/assets/images/icons/security-user.svg",
  },
  {
    label: "Global Event",
    description: "Starup Contest",
    icon: "/assets/images/icons/cup.svg",
  },
  {
    label: "Sustainbility",
    description: "Long-term Goals",
    icon: "/assets/images/icons/home-trend-up.svg",
  },
  {
    label: "Extra Snacks",
    description: "Work-Life Balance",
    icon: "/assets/images/icons/coffee.svg",
  },
  {
    label: "Compact",
    description: "Good for Focus",
    icon: "/assets/images/icons/3dcube.svg",
  },
  {
    label: "Free Move",
    description: "Anytime 24/7",
    icon: "/assets/images/icons/group.svg",
  },
];

export default function OfficeFeatures({ features }: { features: string[] }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
        {features.map((feature) => {
          const matched = FEATURES_MAP.find((f) => f.label === feature);

          if (!matched) return null;

          return (
            <div key={feature} className="flex items-center gap-4">
              <Image src={matched.icon} width={24} height={24} className="w-[34px] h-[34px]" alt="icon" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">{matched.label}</p>
                <p className="text-sm leading-[21px]">{matched.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
