/**
 * Format a date string into a human-readable format
 * @param {string|Date} date - The date to format
 * @returns {string} The formatted date string
 */
function formatDate(date) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return new Date(date).toLocaleDateString('en-US', options);
}

module.exports = formatDate; 