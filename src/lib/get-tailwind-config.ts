import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

function getTailwindConfig() {
  return resolveConfig(tailwindConfig);
}

export { getTailwindConfig };
