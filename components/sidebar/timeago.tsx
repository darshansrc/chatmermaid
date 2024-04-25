/**
 * Converts a timestamp to a human-readable format (today, yesterday, last 7 days, last 28 days).
 * @param {string | number | Date} time - The timestamp to convert
 * @param {Object} [options={}] - Additional options for customization.
 * @param {string | number | Date} [options.now=Date.now()] - The current timestamp.
 * @returns {string} - The formatted time string.
 *
 * @example
 * const result = timesago('December 11, 2021');
 * console.log(result); // yesterday
 */
function timesago(time, options = {}) {
  const defaultOptions = {
    now: Date.now(),
  };
  const config = { ...defaultOptions, ...options };

  try {
    const timestamp = new Date(time).getTime();
    const difference = Math.abs(config.now - timestamp);
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    if (difference < oneDay) {
      return "Today";
    } else if (difference < 2 * oneDay) {
      return "Yesterday";
    } else if (difference < 7 * oneDay) {
      return "Last 7 days";
    } else if (difference < 28 * oneDay) {
      return "Last 28 days";
    } else {
      return "Older";
    }
  } catch (error) {
    return "diagrams";
  }
}

export default timesago;
