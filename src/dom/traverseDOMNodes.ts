/**
 * @desc To traverse node of HTML with generator
 *
 * @export
 * @param {Element[]} nodes
 * @return {any}  {any}
 */
export function* traverseDOMNodes(nodes: Element[]): any {
  for (const node of nodes) {
    yield node;

    const children = Array.from(node.children);

    if (children.length) {
      yield* traverseDOMNodes(children);
    }
  }
}
