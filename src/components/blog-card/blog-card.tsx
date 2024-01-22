import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Stack,
  Typography,
  SvgIcon,
  Button,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";

type Props = {
  postImage: string | StaticImageData;
  postTags: (string | undefined)[];
  postTitle: string;
  postMetaDescription: String;
};

const BlogCard = ({ blog }: { blog: Props }) => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <Box width="100%">
      <Card>
        <Box position="relative" display="block" width="100%" height="300px">
          <Image
            src={blog.postImage}
            alt={blog.postTitle}
            fill
            loading="lazy"
            quality={100}
          />

          <Box
            position="absolute"
            width="58px"
            height="24px"
            bgcolor="#E74040"
            top={20}
            left={20}
            paddingX="10px"
            borderRadius="3px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h6"
              color="#FFF"
              sx={{
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 700,
                letterSpacing: "0.2px",
              }}
            >
              NEW
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            paddingX: "7.2%",
            paddingTop: "25px",
            paddingBottom: "35px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              padding: 0,
            }}
          >
            <Stack direction="row" gap="15px">
              {blog.postTags?.map((tag, index) => (
                <Typography
                  variant="body1"
                  key={index}
                  color="#737373"
                  sx={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: 400,
                    letterSpacing: "0.2px",
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Stack>

            <Typography
              variant="h4"
              color="#252B42"
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "30px",
                letterSpacing: "0.2px",
              }}
            >
              {blog.postTitle}
            </Typography>

            <Typography
              variant="body1"
              color="#737373"
              sx={{
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                letterSpacing: "0.2px",
              }}
            >
              {blog.postMetaDescription}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              justifyContent="space-between"
            >
              <Stack direction="row" spacing="5px" alignItems="center">
                <SvgIcon height={16} width={16}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M8.49933 14.6667C5.20378 14.6232 2.54277 11.9622 2.49933 8.66668C2.54277 5.37113 5.20378 2.71011 8.49933 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49933 14.6667ZM8.49933 4.00001C5.93611 4.03376 3.86641 6.10346 3.83266 8.66668C3.86641 11.2299 5.93611 13.2996 8.49933 13.3333C11.0625 13.2996 13.1322 11.2299 13.166 8.66668C13.1322 6.10346 11.0625 4.03376 8.49933 4.00001ZM11.8327 9.33334H7.83266V5.33334H9.16599V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97066 4.47201L2.02733 3.52734L4.02133 1.52734L4.96466 2.47201L2.972 4.47201H2.97066Z"
                      fill="#23A6F0"
                    />
                  </svg>
                </SvgIcon>

                <Typography
                  variant="body2"
                  color="#737373"
                  sx={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: 400,
                    letterSpacing: "0.2px",
                  }}
                >
                  {formattedDate}
                </Typography>
              </Stack>

              <Stack direction="row" spacing="5px" alignItems="center">
                <SvgIcon height={15} width={16}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6002_46)">
                      <path
                        d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                        fill="#23856D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6002_46">
                        <rect
                          width="16"
                          height="14.6667"
                          fill="white"
                          transform="translate(0.5 0.666748)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </SvgIcon>

                <Typography
                  variant="body2"
                  color="#737373"
                  sx={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: 400,
                    letterSpacing: "0.2px",
                  }}
                >
                  10 comments
                </Typography>
              </Stack>
            </Box>
          </CardContent>

          <CardActions
            sx={{
              padding: 0,
            }}
          >
            <Button
              variant="text"
              sx={{
                paddingX: 0,
              }}
              endIcon={
                <SvgIcon height={16} width={9}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_6002_51)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                        fill="#23A6F0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6002_51">
                        <rect
                          width="9"
                          height="16"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </SvgIcon>
              }
            >
              <Typography
                variant="h6"
                color="#737373"
                sx={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  fontWeight: 700,
                  letterSpacing: "0.2px",
                  textTransform: "capitalize",
                }}
              >
                Learn More
              </Typography>
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default BlogCard;
