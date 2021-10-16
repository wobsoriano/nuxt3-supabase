const dynamicChunks = {
 ['647.mjs']: () => import('./app/647.mjs')
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
