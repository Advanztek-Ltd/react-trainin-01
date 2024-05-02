import React from "react";
import {
  Container,
  Stack,
  Typography,
  IconButton,
  Switch,
} from "@mui/material";
import { Twitter, Facebook, YouTube } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { layoutStyles } from "../../Styles/Layout/layout";

interface FrontHeaderProps {
  changeTheme: () => void;
  isDarkTheme: boolean;
}

const FrontHeader: React.FC<FrontHeaderProps> = ({
  changeTheme,
  isDarkTheme,
}) => {
  const theme = useTheme();
  const styles = layoutStyles(theme);

  return (
    <div style={styles.topBar}>
      <Container>
        <Stack
          direction={"row"}
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="fontOne">Online Store</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton aria-label="Twitter" style={{ color: "#9B9B9B" }}>
              <Twitter />
            </IconButton>
            <IconButton aria-label="Facebook" style={{ color: "#9B9B9B" }}>
              <Facebook />
            </IconButton>
            <IconButton aria-label="YouTube" style={{ color: "#9B9B9B" }}>
              <YouTube />
            </IconButton>
            <Switch
              checked={isDarkTheme}
              onChange={changeTheme}
              inputProps={{ "aria-label": "Toggle dark theme" }}
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default FrontHeader;
