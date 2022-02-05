 // Day of week that is K days later
 
 const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

function dayOfWeek(day, k) {
  const index = days.findIndex(x => x === day);
  return days[(index + k) % 7];
}

console.log(dayOfWeek('Monday', 3));
