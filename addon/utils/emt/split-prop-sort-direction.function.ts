export const splitPropSortDirection = (
  propSortDirection = '',
): [string, string] => {
  const chunks = propSortDirection.split(':');
  const sortDirection = chunks.pop() || '';
  const propName = chunks.join(':');
  return [propName, sortDirection];
};
