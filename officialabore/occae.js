function sceneToJSON(scene, indent = '') {
  const json = {};
  json.id = scene.id;
  json.name = scene.name;
  json.type = scene.type;
  json.properties = scene.properties;
  json.children = scene.children.map(child => sceneToJSON(child, indent + '  '));

  return JSON.stringify(json, null, indent);
}
