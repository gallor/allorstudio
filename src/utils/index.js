export const isCurrentPage = (path, pathToCheck) => {
  if (!path) return '';
  return path.includes(pathToCheck) ? 'bold' : '';
}
