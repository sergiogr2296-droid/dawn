// Keeps the product page "Cotizar por WhatsApp" link in sync with the selected variant.
if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
  subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
    const { sectionId, html } = event.data || {};
    if (!sectionId || !html) return;

    const id = `QuoteButton-${sectionId}`;
    const source = html.getElementById(id);
    const destination = document.getElementById(id);
    if (source && destination) destination.href = source.href;
  });
}
