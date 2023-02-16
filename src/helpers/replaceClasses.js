export default function (node, removeClasses = [], addClasses = []) {
  node.classList.remove(...removeClasses);
  node.classList.add(...addClasses);
}
