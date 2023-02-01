const last = -1;

const response = {
  code: 302,
};

export default (strings, ...keys) => async () => {
  const awaitedKeys = await Promise.all(keys);
  const Location = strings
    .slice(0, last)
    .map((string, i) => string + awaitedKeys[i])
    .join("") + strings[strings.length + last];
  // no body
  const body = null;
  return {...response, headers: {Location}, body};
};
