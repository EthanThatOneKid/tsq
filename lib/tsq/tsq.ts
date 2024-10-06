// TODO: Implement tsq.

import type { Capture, Parser, Tree } from "#/lib/tree-sitter/mod.ts";

export function tsq(tree: Tree, query: TreeSitterQuery): TreeSitterQueryResult {
  console.log(JSON.stringify(tree, null, 2));
  return tree?.rootNode.query(compileTreeSitterQuery(query));
}

export function compileTreeSitterQuery(_query: TreeSitterQuery): string {
  return "";
}

export interface TreeSitterQuery {
  nodes: TreeSitterQueryNode[];
}

export interface TreeSitterQueryNode {
  fields?: TreeSitterQueryField[];
  nodes?: TreeSitterQueryNode[];
}

export interface TreeSitterQueryField {
  // TODO: Implement.
}

export interface TreeSitterQueryResult {
  captures: Capture[];
}
