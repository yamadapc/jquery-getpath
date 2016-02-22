function getPath($el) {
  var node = $el;
  var path;

  while (node.length) {
    var realNode = node.get(0);
    var name = realNode.localName;

    // Qualify as much as possible
    if(realNode.id) {
      name += '#' + realNode.id;
    } else if(realNode.className) {
      name += '.' + realNode.className;
    }

    if(!name) break;
    name = name.toLowerCase();

    // Make the selector unique at all costs
    siblings = node.siblings(name)
    if(siblings.length > 1) {
      var index = node.index() + 1;
      if(index > 1) {
        name += ':nth-child(' + index + ')';
      }
    }

    path = name + (path ? '>' + path : '');
    node = node.parent();
  }

  return path;
}

exports = module.exports = getPath;
