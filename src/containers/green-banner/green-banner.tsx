import { Phone, Email, BannerSocials } from "@/components";

const GreenBanner = () => {
  return (
    <div className="h-[58px] px-6 w-full bg-green pt-[9px] pb-[3px] flex items-center justify-between">
      <span className="flex items-center">
        <Phone />

        <Email />
      </span>

      <span className="p-[10px]">
        <h6 className="text-lighttextcolor text-sm leading-6 font-bold tracking-[0.2px]">
          Follow Us and get a chance to win 80% off
        </h6>
      </span>

      <BannerSocials />
    </div>
  );
};

export default GreenBanner;
