function removeSpecificDivs() {
    const columnsDiv = document.getElementById('columns');
    
    if (columnsDiv) {
      const playerDiv = columnsDiv.querySelector('#player');
  
      // If the 'player' div exists within 'columns', target 'secondary' and 'below'
      if (playerDiv) {
        const secondaryDiv = document.getElementById('secondary');
        const belowDiv = document.getElementById('below');
  
        if (secondaryDiv) {
          secondaryDiv.remove();
          console.log('Secondary div removed.');
        }
  
        if (belowDiv) {
          belowDiv.remove();
          console.log('Below div removed.');
        }
      } else {
        // If 'player' div does not exist, remove 'columns' div
        columnsDiv.remove();
        console.log('Columns div removed.');
      }
    } else {
      console.log('Columns div not found, retrying...');
      setTimeout(removeSpecificDivs, 1000); // Retry after 1 second
    }
  }
  
  // Initial call
  removeSpecificDivs();
  