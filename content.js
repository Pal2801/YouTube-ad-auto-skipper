function skipAd() {
  chrome.storage.sync.get('adSkipperEnabled', (data) => {
    if (data.adSkipperEnabled !== false) {
      const skipButton = document.querySelector('.ytp-ad-skip-button');
      if (skipButton) {
        skipButton.click();
        console.log('Skipped YouTube ad!');
      }
    }
  });
}

// Run the function every second to check for the Skip Ad button
setInterval(skipAd, 1000);