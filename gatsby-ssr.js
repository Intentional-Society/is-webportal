// Sets `<html lang="en">`, which only onRenderBody can reach. Nothing else
// belongs here: every page owns its own title and meta tags via Head2026.
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
};
