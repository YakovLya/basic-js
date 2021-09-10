import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined)
    return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.keys(date).length > 0)
    throw new Error('Invalid date!');
  let season;
  let month = date.getMonth();
  if (month == 0 || month == 1 || month == 11)
    season = 'winter';
  if (month == 2 || month == 3 || month == 4)
    season = 'spring';
  if (month == 5 || month == 6 || month == 7)
    season = 'summer';
  if (month == 8 || month == 9 || month == 10)
    season = 'autumn';
  return season;
}