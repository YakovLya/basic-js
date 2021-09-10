import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let pos;
  while(email.indexOf('@') >= 0){
    pos = email.indexOf('@');
    email = email.slice(0, pos) + '.' + email.slice(pos + 1);
  }
  return email.slice(pos + 1);
}
