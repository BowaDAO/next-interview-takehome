const WishlistIcon = () => {
  return (
    <span className="flex items-center gap-[5px]">
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_540_815)">
            <path
              d="M8.0002 2.74805L7.2832 2.01105C5.6002 0.281049 2.5142 0.878049 1.4002 3.05305C0.8772 4.07605 0.7592 5.55305 1.7142 7.43805C2.6342 9.25305 4.5482 11.427 8.0002 13.795C11.4522 11.427 13.3652 9.25305 14.2862 7.43805C15.2412 5.55205 15.1242 4.07605 14.6002 3.05305C13.4862 0.878049 10.4002 0.280049 8.7172 2.01005L8.0002 2.74805ZM8.0002 15C-7.3328 4.86805 3.2792 -3.03995 7.8242 1.14305C7.8842 1.19805 7.9432 1.25505 8.0002 1.31405C8.05662 1.2551 8.11533 1.19839 8.1762 1.14405C12.7202 -3.04195 23.3332 4.86705 8.0002 15Z"
              fill="#23A6F0"
            />
          </g>
          <defs>
            <clipPath id="clip0_540_815">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.000305176)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      <p className="text-[12px] font-normal leading-4 tracking-[0.2px] text-skyblue ">
        1
      </p>
    </span>
  );
};

export default WishlistIcon;
