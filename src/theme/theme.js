const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";
const boxShadowLight="#00000029";
const boxShadowDark="#ffffff70";
const anchorLight = '#65656587';
const anchorDark = '#b6b6b6d6';

const themeLight = {
  background: gray,
  color: black,
  boxShadow: boxShadowLight,
  anchor: anchorLight
};

const themeDark = {
  background: black,
  color: white,
  boxShadow: boxShadowDark,
  anchor: anchorDark
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;