export const injectCSS = ({rootNode}: {rootNode: Node}) => {
  let style: HTMLStyleElement | null = (
    rootNode === document ? document.head : <ShadowRoot>rootNode
  ).querySelector('style[stylo-editor]');

  if (style !== null) {
    return;
  }

  style = document.createElement('style');
  style.setAttribute('stylo-editor', '');
  style.innerHTML = `
    .stylo-container > * {
      white-space: pre-wrap;
      position: relative;
    }

    .stylo-container > *:after {
      content: attr(placeholder);
      color: var(--stylo-placeholder-color, rgba(55, 53, 47, 0.5));
      position: absolute;
      top: 0;
    }
  `;

  if (rootNode === document) {
    document.head.append(style);
    return;
  }

  (<ShadowRoot>rootNode).prepend(style);
};
