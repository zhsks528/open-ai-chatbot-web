import { Gatherer } from 'lighthouse'
import { pageFunctions } from 'lighthouse/core/lib/page-functions.js'

class Clickable extends Gatherer {
  meta = {
    supportedModes: ['navigation', 'snapshot'],
  }

  async getArtifact(options) {
    const driver = options.driver

    const collectFailingElements = () => {
      /**
       * Returns a boolean indicating if the element has an event listener for type
       * @param {HTMLElement} element
       * @param {string} type Event type e.g. 'click'
       * @returns {boolean}
       */
      function hasEventListener(element, type) {
        const eventListeners = getEventListeners(element)
        return !!eventListeners[type]
      }

      const elements = Array.from(document.querySelectorAll('*'))

      const clickableElements = elements.filter((element) => {
        const hasClickEvent = hasEventListener(element, 'click')
        const hasNextItem =
          element.id === '__next' ||
          element.tagName.toUpperCase().includes('NEXT')
        const hasTabbableTag =
          element.tagName === 'A' || element.tagName === 'BUTTON'

        return hasClickEvent && !hasNextItem && !hasTabbableTag
      })

      const linkWithoutHrefElements = elements.filter((element) => {
        const hasHref = Object.values(element.attributes)?.some(
          ({ name, value }) => name === 'href' && value,
        )
        return element.tagName === 'A' && !hasHref
      })

      const failingElements = [...clickableElements, ...linkWithoutHrefElements]

      const elementSummaries = failingElements.map((element) => ({
        tagName: element.tagName,
        node: getNodeDetails(element),
      }))

      /**
       * @return {LH.Gatherer.PhaseResult}
       */
      return elementSummaries
    }

    return driver.executionContext.evaluate(collectFailingElements, {
      args: [],
      deps: [pageFunctions.getElementsInDocument, pageFunctions.getNodeDetails],
    })
  }
}

export default Clickable
