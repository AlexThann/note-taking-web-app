export default function editTheme(
  info,
  title,
  description,
  colorPicked,
  dateCreated,
  prevTheme
) {
  return info.map((theme) => {
    // update the previous state by destructoring ...theme
    if (theme.themeID === prevTheme.themeID) {
      return {
        ...theme,
        themeTitle: title,
        themeDescription: description,
        themeColor: colorPicked,
      };
    }
    return theme;
  });
}
