export const formatTimer = time => {
  const padTwoDigits = number => String(number).padStart(2,'0');
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
  return `${padTwoDigits(minutes)}:${padTwoDigits(seconds)}`;
};