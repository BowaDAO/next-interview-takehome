import Image from "next/image";
import { Box } from "@mui/material";
import { images } from "@/constants";

const Header = () => {
  return (
    <Box paddingX="10.2%" paddingY="4px">
      {/*Overall Box container */}

      <Box
        sx={{
          paddingY: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          minWidth: "100%",

          "@media (min-width: 1024px)": {
            flexDirection: "row",
          },
        }}
      >
        {/* Column 1 */}

        <Box
          sx={{
            position: "relative",
            display: "block",
            width: "80vw",
            height: "300px",

            "@media (min-width: 1024px)": {
              width: "40%",
              height: "616px",
            },
          }}
        >
          <Image
            src={images.heroimage1}
            alt="hero-image-1"
            quality={100}
            loading="eager"
            blurDataURL=""
            fill
            priority
            sizes="any"
          />
        </Box>

        {/* Column 2 */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "60%",
          }}
        >
          {/* Column 2 container 1 */}

          <Box
            sx={{
              position: "relative",
              display: "block",
              width: "80vw",
              height: "300px",

              "@media (min-width: 1024px)": {
                width: "100%",
                minWidth: "",
              },
            }}
          >
            <Image
              src={images.heroimage2}
              alt="hero-image-2"
              quality={100}
              loading="eager"
              blurDataURL=""
              fill
              priority
              sizes="any"
            />
          </Box>

          {/* Column 2 container 2 */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",

              "@media (min-width: 1024px)": {
                flexDirection: "row",
              },
            }}
          >
            {/* Column 2 container 2 box 1 */}

            <Box
              sx={{
                position: "relative",
                display: "block",
                width: "80vw",
                height: "300px",

                "@media (min-width: 1024px)": {
                  width: "50%",
                  minWidth: "",
                },
              }}
            >
              <Image
                src={images.heroimage3}
                alt="hero-image-3"
                quality={100}
                loading="eager"
                blurDataURL=""
                fill
                priority
                sizes="any"
              />
            </Box>

            {/* Column 2 container 2 box 2 */}

            <Box
              sx={{
                position: "relative",
                display: "block",
                width: "80vw",
                height: "300px",

                "@media (min-width: 1024px)": {
                  width: "50%",
                  minWidth: "",
                },
              }}
            >
              <Image
                src={images.heroimage4}
                alt="hero-image-4"
                quality={100}
                loading="eager"
                blurDataURL=""
                fill
                priority
                sizes="any"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
