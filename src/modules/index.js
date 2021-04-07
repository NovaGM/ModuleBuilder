import nova from './nova.js';

import pcPlugins from './ports/plugins/pcPlugins.js';
import pcThemes from './ports/pcThemes.js';

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
      name: 'Nova - PC Plugins',
      description: 'Powercord plugins ported by NovaGM.',
    },
    filename: 'pcplugins',
    modules: pcPlugins,
  },

  {
    meta: {
      name: 'Nova - PC Themes',
      description: 'Powercord themes ported by NovaGM.'
    },
    filename: 'pcthemes',
    modules: pcThemes
  }
];
