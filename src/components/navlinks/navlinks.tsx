import { ListItemButton, List, ListItemText } from "@mui/material";
import { BlackArrowDown } from "../icons/icons";

type Props = {
  flexDirection: string;
};

const Navlinks = (props: Props) => {
  return (
    <List
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: props.flexDirection,
      }}
    >
      <ListItemButton>
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton sx={{ display: "flex", alignItems: "center" }}>
        <ListItemText primary="Shop" />

        <BlackArrowDown />
      </ListItemButton>

      <ListItemButton>
        <ListItemText primary="About" />
      </ListItemButton>

      <ListItemButton>
        <ListItemText primary="Blog" />
      </ListItemButton>

      <ListItemButton>
        <ListItemText primary="Contact" />
      </ListItemButton>

      <ListItemButton>
        <ListItemText primary="Pages" />
      </ListItemButton>
    </List>
  );
};

export default Navlinks;
