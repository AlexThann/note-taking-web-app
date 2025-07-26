import { v4 as uuidv4 } from "uuid";

export default function addTheme(
  info,
  title,
  description,
  colorPicked,
  dateCreated
) {
  return [
    ...info,
    {
      themeID: uuidv4(),
      themeTitle: title,
      themeDescription: description,
      themeColor: colorPicked,
      themeDateCreated: dateCreated,
      themeFlashCards: [],
    },
  ];
}
