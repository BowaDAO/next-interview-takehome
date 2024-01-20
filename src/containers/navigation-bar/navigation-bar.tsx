import {
  Logo,
  Navlinks,
  Login,
  SearchIcon,
  CartIcon,
  WishlistIcon,
} from "@/components";

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between px-[38px] h-[58px] mt-[15px] w-full">
      <div className="flex items-center gap-10">
        <span className="py-[13px] pr-[79px]">
          <Logo />
        </span>

        <Navlinks />
      </div>

      <div className="flex items-center gap-[30px]">
        <Login />

        <span className="flex items-center gap-[15px]">
          <SearchIcon />

          <CartIcon />

          <WishlistIcon />
        </span>
      </div>
    </nav>
  );
};

export default NavigationBar;
