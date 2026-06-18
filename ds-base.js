// ds-base.js — load the Orange design system (styles + compiled bundle).
(() => {
  const base = './_ds/orange-zapier-style-design-system-64b6bec3-fe57-4588-b3dc-7aaa2ba1a9cd';
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = base + '/styles.css';
  document.head.appendChild(l);
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src);
  document.head.appendChild(s);
})();
