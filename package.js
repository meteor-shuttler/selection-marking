Package.describe({
  name: 'shuttler:selection-marking',
  version: '0.0.0',
  summary: 'Marking documents if has selected link in the graph.',
  git: 'https://github.com/meteor-shuttler/selection-marking.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('mongo');
  api.use('ecmascript');
  
  api.use('matb33:collection-hooks@0.8.1');
  api.use('aldeed:collection2@2.9.0');
  api.use('shuttler:graphs@0.0.15');
  api.use('shuttler:graph-marking@0.0.0');
  
  api.addFiles('selection-marking.js');
  
  api.export('Shuttler');
});