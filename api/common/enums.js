/**
 * @typedef {Object} CacheKeys
 * @property {'config'} CONFIG - Key for the config cache.
 * @property {'modelsConfig'} MODELS_CONFIG - Key for the model config cache.
 * @property {'defaultConfig'} DEFAULT_CONFIG - Key for the default config cache.
 * @property {'overrideConfig'} OVERRIDE_CONFIG - Key for the override config cache.
 */
const CacheKeys = {
  CONFIG: 'config',
  MODELS_CONFIG: 'modelsConfig',
  DEFAULT_CONFIG: 'defaultConfig',
  OVERRIDE_CONFIG: 'overrideConfig',
};

module.exports = { CacheKeys };
