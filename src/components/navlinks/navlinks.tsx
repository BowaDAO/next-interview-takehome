const Navlinks = () => {
  const liClass =
    "text-sm leading-6 font-bold tracking-[0.2px] text-secondarytextcolor";

  return (
    <ul className="flex items-center gap-[15px]">
      <li className={`${liClass}`}>Home</li>

      <span className="flex items-center gap-[10px]">
        <li className="text-sm font-[500] leading-[28px] tracking-[0.2px] text-black">
          Shop
        </li>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
        >
          <path
            d="M1.42857 0.5L5 4.07143L8.57143 0.5L10 1.21429L5 6.21429L-3.12224e-08 1.21429L1.42857 0.5Z"
            fill="#252B42"
          />
        </svg>
      </span>

      <li className={`${liClass}`}>About</li>

      <li className={`${liClass}`}>Blog</li>

      <li className={`${liClass}`}>Contact</li>

      <li className={`${liClass}`}>Pages</li>
    </ul>
  );
};

export default Navlinks;
