/**
 * Base Styles - WindFlow Framework
 * Container and fundamental layout classes
 */

module.exports = function generateBase(config) {
  return `/* Base Styles */
.wf-container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
}

@media (min-width: 640px) {
  .wf-container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .wf-container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .wf-container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .wf-container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .wf-container {
    max-width: 1536px;
  }
}`;
};