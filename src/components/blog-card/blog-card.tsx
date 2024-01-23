import {
  Box,
  Card,
  CardContent,
  CardActions,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { BlueArrowRightIcon, DateIcon, MetricIcon } from "../icons/icons";

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
    <Card sx={{ width: "100%" }}>
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
              <DateIcon />

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
              <MetricIcon />

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
            endIcon={<BlueArrowRightIcon />}
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
  );
};

export default BlogCard;
