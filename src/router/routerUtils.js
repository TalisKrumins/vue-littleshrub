export function createMenuObject(routes) {
  const menuObject = {};
  routes.forEach((route) => {
    const parent = route.parent[0];
    if (!menuObject[parent]) {
      menuObject[parent] = [];
    }
    menuObject[parent].push(route.name);
  });
  return menuObject;
}
