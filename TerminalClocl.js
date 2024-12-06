function terminalClock() {
    setInterval(() => {
      const now = new Date(); // Get the current date and time
      const hours = String(now.getHours()).padStart(2, '0'); // Format hours
      const minutes = String(now.getMinutes()).padStart(2, '0'); // Format minutes
      const seconds = String(now.getSeconds()).padStart(2, '0'); // Format seconds
  
      console.clear(); // Clear the terminal for a clean update
      console.log(`${hours}:${minutes}:${seconds}`); // Print the time in HH:MM:SS format
    }, 1000); // Run every 1 second
  }
  
  terminalClock(); // Start the clock
  