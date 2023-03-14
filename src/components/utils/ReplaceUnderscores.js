export default function ReplaceUnderscores(message, text) {
  const replacedMessage = message.replace(/___/g, `<span>${text}</span>`);
  return <h5 dangerouslySetInnerHTML={{ __html: replacedMessage }}></h5>;
}
