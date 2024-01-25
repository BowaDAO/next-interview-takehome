import { BlogCard } from "@/components";
import { blogData } from "@/constants";
import { Box, Stack, Typography } from "@mui/material";

const FeaturedPosts = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingY: "40px",
        paddingX: "11%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",

        "@media (min-width: 1024px)": {
          paddingY: "80px",
        },
      }}
    >
      <Stack alignItems="center" spacing="10px">
        <Typography variant="h6" color="secondary.dark">
          Practice Advice
        </Typography>

        <Typography variant="h1" color="text.primary">
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
