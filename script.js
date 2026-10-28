const themeToggle = document.getElementById('themeToggle');
const iconSearch = document.getElementById('iconSearch');
const iconCards = Array.from(document.querySelectorAll('.icon-card'));
const emptyState = document.getElementById('emptyState');

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.setAttribute('aria-pressed', String(isDark));
});

iconSearch.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  let visibleCount = 0;

  iconCards.forEach((card) => {
    const searchableText = `${card.dataset.name} ${card.textContent}`.toLowerCase();
    const matches = searchableText.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
});
