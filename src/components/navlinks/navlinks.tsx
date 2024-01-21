import {
  ListItem,
  ListItemButton,
  List,
  ListItemText,
  Box,
  SvgIcon,
} from "@mui/material";

const Navlinks = () => {
  return (
    <List
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemButton component="a">
        <ListItemText
          primary="Home"
          primaryTypographyProps={{
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 700,
            letterSpacing: "0.2px",
            color: "#737373",
          }}
        />
      </ListItemButton>

      <ListItemButton
        component="a"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <ListItemText
          primary="Shop"
          primaryTypographyProps={{
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 700,
            letterSpacing: "0.2px",
            color: "#737373",
          }}
        />

        <SvgIcon style={{ width: "10px", height: "7px" }}>
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
        </SvgIcon>
      </ListItemButton>

      <ListItemButton component="a">
        <ListItemText
          primary="About"
          primaryTypographyProps={{
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 700,
            letterSpacing: "0.2px",
            color: "#737373",
          }}
        />
      </ListItemButton>

      <ListItemButton component="a">
        <ListItemText
          primary="Blog"
          primaryTypographyProps={{
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 700,
            letterSpacing: "0.2px",
            color: "#737373",
          }}
        />
      </ListItemButton>

      <ListItemButton component="a">
        <ListItemText
          primary="Contact"
          primaryTypographyProps={{
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 700,
            letterSpacing: "0.2px",
            color: "#737373",
          }}
        />
      </ListItemButton>

      <ListItemButton component="a">
        <ListItemText
          primary="Pages"
          primaryTypographyProps={{
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 700,
            letterSpacing: "0.2px",
            color: "#737373",
          }}
        />
      </ListItemButton>
    </List>
  );
};

export default Navlinks;
