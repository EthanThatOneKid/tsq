// TODO: Implement tsq.

import type { Capture, Tree } from "#/lib/tree-sitter/mod.ts";

export function tsq(tree: Tree, query: string): TreeSitterQueryResult {
  // TODO: Test out tsq.
  return tree?.rootNode.query(query);
}

export interface TreeSitterQueryResult {
  captures: Capture[];
}
