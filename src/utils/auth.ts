export const checkPermissions = (
  authority: string[],
  currentAuthority: string,
  target: Function,
) => {
  if (!authority) {
    return target;
  }
  if (authority.includes(currentAuthority)) {
    return target;
  }
};
