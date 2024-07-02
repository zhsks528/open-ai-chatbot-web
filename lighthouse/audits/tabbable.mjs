import { Audit } from 'lighthouse'

class Tabbable extends Audit {
  static get meta() {
    return {
      id: 'tabbable-audit',
      title: 'Are elements that have click events tabbable?',
      failureTitle: 'Can not move on clickable elements by Tab key.',
      description: 'Clickable elements should be tabbable.',
      requiredArtifacts: ['Clickable'],
      columnFailingLink: 'Uncrawlable Link',
    }
  }

  static audit(artifacts) {
    const headings = [
      { key: 'tagName', itemType: 'text', text: 'Tag name' },
      { key: 'node', itemType: 'node', text: 'Failing element' },
    ]

    const { Clickable: clickableElements } = artifacts

    const itemsToDisplay = clickableElements.map((item) => {
      return {
        node: Audit.makeNodeItem(item.node),
        tagName: item.tagName,
      }
    })
    return {
      score: clickableElements?.length ? 0 : 1,
      details: Audit.makeTableDetails(headings, itemsToDisplay),
    }
  }
}

export default Tabbable
