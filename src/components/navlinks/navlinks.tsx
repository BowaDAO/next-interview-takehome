import { ListItemButton, List, ListItemText } from "@mui/material";
import { BlackArrowDown } from "../icons/icons";

const Navlinks = () => {
  return (
    <List
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemButton>
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

        <BlackArrowDown />
      </ListItemButton>

      <ListItemButton>
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

      <ListItemButton>
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

      <ListItemButton>
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

      <ListItemButton>
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
