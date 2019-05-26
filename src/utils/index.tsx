/**
 * It allows custom hooks to return the correct inferred types for 2 and only 2
 * returned values in an array.
 *
 * @export
 * @template T
 * @param {...T} elements
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function tuplify<T extends any[]>(...elements: T): T {
  return elements;
}
