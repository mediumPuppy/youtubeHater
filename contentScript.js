// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    removeColumnsDivWhenAvailable();
});

console.log('Content script has been injected.');

function removeColumnsDivWhenAvailable() {
  const columnsDiv = document.getElementById('columns');
  if (columnsDiv) {
    columnsDiv.remove();
    console.log('Columns div removed.');
  } else {
    console.log('Columns div not found, retrying...');
    setTimeout(removeColumnsDivWhenAvailable, 1000); // Try again in 1 second
  }
}

removeColumnsDivWhenAvailable();
