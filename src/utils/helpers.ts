import { API_URL, API_TS, API_KEY, API_HASH } from '../../environment';

export const getApiUrl = (currentPage: number, name?: string): string =>
  `${API_URL}/characters?${
    name ? `name=${name.replace(' ', '+')}&` : ''
  }limit=4&offset=${4 *
    (currentPage - 1)}&ts=${API_TS}&apikey=${API_KEY}&hash=${API_HASH}`;

let timeoutId: number = null;
export const debounce = (func: Function, timeout = 300): void => {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => func(), timeout);
};

export const getVisiblePages = (
  currentPage: number,
  numPages: number
): Array<number> => {
  if (numPages < 3) return [...Array(numPages + 1).keys()].slice(1);
  if (currentPage === 1) return [1, 2, 3];
  else if (currentPage === numPages)
    return [numPages - 2, numPages - 1, numPages];
  else return [currentPage - 1, currentPage, currentPage + 1];
};
