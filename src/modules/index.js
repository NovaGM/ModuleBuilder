import nova from './nova.js';

import pcPlugins from './ports/plugins/pcPlugins.js';


export default [
  {
    meta: {
      name: 'Nova - Modules',
      description: 'Repository containing the Nova GooseMod Modules.',
    },
    filename: 'nova',
    modules: nova,
  },
  {
    meta: {
      name: 'Store Core - PC Plugins',
      description: 'Auto-ported Powercord plugins.'
    },
    filename: 'pcplugins',
    modules: pcPlugins
  }
];
