export default async function (input) {
  try {
    const clipboardText = await navigator.clipboard.readText();
    return clipboardText;
  } catch (error) {
    return "Clipboard lezen mislukt";
  }
}
