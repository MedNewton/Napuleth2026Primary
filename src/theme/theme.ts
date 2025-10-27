import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import type { BrandPalette, BrandPaletteOptions } from "@/theme/brandColors";
import { brandColors } from "@/theme/brandColors";
import type { PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette { brand: BrandPalette }
    interface PaletteOptions { brand?: BrandPaletteOptions }
  }

const brand: BrandPaletteOptions = brandColors;

const palette: PaletteOptions = {
  primary: { main: "#000000" },
  secondary: { main: "#8F8E8E" },
  background: { default: "#FFFFFF" },
  text: { primary: "#000000", secondary: "#8F8E8E" },
  info: { main: "#000000" },
  error: { main: "#DC2626" },
  success: { main: "#389685" },
  brand, // typed, not any
};

let theme = createTheme({
  palette,
  typography: {
    fontFamily: "Urbanist",
  },
})

theme = responsiveFontSizes(theme)

export default theme
