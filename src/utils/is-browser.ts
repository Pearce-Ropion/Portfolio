import { isObjectLike } from 'lodash-es';

/**
 * ObjectLike: A value is object-like if it's not null and has a typeof result of "object".
 * @see https://lodash.com/docs/4.17.15#isObjectLike
 *
 * document.nodeType: @see https://www.w3schools.com/jsref/prop_node_nodetype.asp
 */
export const isBrowser: boolean =
  typeof window !== 'undefined' &&
  isObjectLike(window) &&
  isObjectLike(document) &&
  document.nodeType === 9;
