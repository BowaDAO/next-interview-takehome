import { BlogCard } from "@/components";
import { blogData } from "@/constants";
import { Box, Stack, Typography } from "@mui/material";

const FeaturedPosts = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingY: "80px",
        paddingX: "11%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <Stack alignItems="center" spacing="10px">
        <Typography
          variant="h6"
          color="#23A6F0"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0.2px",
          }}
        >
          Practice Advice
        </Typography>

        <Typography
          variant="h3"
          color="#252B42"
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "50px",
            letterSpacing: "0.2px",
          }}
        >
          Featured Posts
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "10px",

          "@media (min-width:940px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },

          "@media (min-width:1024px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
        }}
      >
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedPosts;
