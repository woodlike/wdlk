export function findString(strings: string[], search: string) {
  return !!strings.find(string => {
    const formattedString = string.toLowerCase().trim();
    const hyphen = /-/g;

    return !!search.search(hyphen) && formattedString.search(hyphen) === -1
      ? formattedString.replace(/\s/g, '') === search.replace(hyphen, '')
      : formattedString === search;
  });
}
