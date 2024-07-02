module.exports = {
  extends: 'lighthouse:default',
  artifacts: [{ id: 'Clickable', gatherer: './gathers/clickable.mjs' }],
  audits: ['./audits/tabbable.mjs'],
  categories: {
    triple: {
      title: 'TRIPLE',
      description: 'TRIPLE ACCESSIBILITY',
      auditRefs: [
        {
          id: 'tabbable-audit',
          weight: 10,
        },
      ],
    },
  },
}
