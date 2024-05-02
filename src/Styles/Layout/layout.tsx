import { Theme } from "@mui/system";

export const layoutStyles = (theme: Theme) => ({
  topBar: {
    background: theme.palette.mode === "dark" ? "#000" : "#F8F8F8",
    width: "100vw",
    height: 48.8,
  },
});
