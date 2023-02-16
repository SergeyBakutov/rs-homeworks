export default function (
  node: Element, 
  removeClasses: string[] = [], 
  addClasses: string[] = [],
): void {
  node.classList.remove(...removeClasses)
  node.classList.add(...addClasses)
}
