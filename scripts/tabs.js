// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // 1. Select all tab buttons and all tab panels
  const buttons = document.querySelectorAll('.c-tabs__label');
  const panels = document.querySelectorAll('.c-tabs__panel');

  // 2. Loop through each button
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab; // get the panel id this button controls
        console.log(target);
      // 3. Remove 'active' from all buttons + panels
      buttons.forEach(b => b.classList.remove('c-tabs__label--active'));
      panels.forEach(p => p.classList.remove('c-tabs__panel--active'));

      // 4. Add 'active' to the clicked button
      btn.classList.add('c-tabs__label--active');

      // 5. Add 'active' to the matching panel
      document.getElementById(target).classList.add('c-tabs__panel--active');
    });
  });
});
