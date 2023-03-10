export function createMenuObject(routes) {
  const menu = {};
  routes.forEach((route) => {
    if (route.parent.length === 0) {
      menu[route.name] = [];
    } else {
      const parent = route.parent[0];
      const child = { name: route.name, path: route.path };
      if (!menu[parent]) {
        menu[parent] = [child];
      } else {
        menu[parent].push(child);
      }
    }
  });
  return menu;
}
