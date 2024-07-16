const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // Hide all tabs pannels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // Mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute(`aria-selected`, false);
  });
  // Mark the clicked tab as selected
  event.currentTarget.setAttribute(`aria-selected`, true);
  // find the associated tabPanel and show it
  /* //!Method 1
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
  */

  //! Method 2 - find in the array of tabPanels
  console.log(tabPanels);
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id,
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((Button) =>
  Button.addEventListener(`click`, handleTabClick),
);
