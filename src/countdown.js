/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */
function countdownTimer(startTime, interval) {
  // Initialize the remaining time
  let time = (startTime + 1) * interval;

  // Set up a timer using setInterval
  // Log the remaining time and decrement it
  // Stop the timer when time reaches 0
  let countdown;

  function timer() {
    if (countdown === 0) {
      clearInterval(timerIntervalID);
    } else {
      time = time - 1000;
      countdown = time / 1000;
      console.log(countdown);
    }
  }
  // Return the timer ID for validation
  const timerIntervalID = setInterval(timer, 1000);
  return timer;
}

module.exports = { countdownTimer };
