var should = require('should');
var $ = require('jquery');
var getPath = require('..');

describe('getPath($el)', function() {
  it('returns a fully qualified CSS path to the element', function() {
    var div = document.createElement('div');
    div.className = "foo";
    var parentDiv = document.createElement('div');
    parentDiv.className = "foo-parent";
    parentDiv.id = 'bar'
    parentDiv.appendChild(div);
    document.body.appendChild(parentDiv);
    getPath($('.foo')).should.equal('html>body>div#bar>div.foo')
  });
});
