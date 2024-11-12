document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-btn');

  // Initialize the button based on saved state
  chrome.storage.sync.get('adSkipperEnabled', (data) => {
    toggleButton.textContent = data.adSkipperEnabled === false ? 'Turn On' : 'Turn Off';
  });

  // Handle button click
  toggleButton.addEventListener('click', () => {
    chrome.storage.sync.get('adSkipperEnabled', (data) => {
      const newState = !(data.adSkipperEnabled === false);
      
      // Save the new state
      chrome.storage.sync.set({ adSkipperEnabled: newState }, () => {
        toggleButton.textContent = newState ? 'Turn Off' : 'Turn On';
      });
    });
  });
});