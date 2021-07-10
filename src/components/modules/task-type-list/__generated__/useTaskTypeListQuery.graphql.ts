/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTaskTypeListQueryVariables = {
    count: number;
    after?: string | null;
};
export type useTaskTypeListQueryResponse = {
    readonly taskTypes: {
        readonly " $fragmentRefs": FragmentRefs<"useTaskTypePagination">;
    } | null;
};
export type useTaskTypeListQuery = {
    readonly response: useTaskTypeListQueryResponse;
    readonly variables: useTaskTypeListQueryVariables;
};



/*
query useTaskTypeListQuery(
  $count: Int!
  $after: String
) {
  taskTypes {
    ...useTaskTypePagination
    id
  }
}

fragment useTaskTypeFragment on TaskType {
  id
  typeId
  label
  description
}

fragment useTaskTypePagination on TaskTypes {
  id
  list(first: $count, after: $after) {
    edges {
      node {
        id
        order
        ...useTaskTypeFragment
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "after"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "count"
    } as any, v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v3 = [
        {
            "kind": "Variable",
            "name": "after",
            "variableName": "after"
        } as any,
        {
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "useTaskTypeListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "TaskTypes",
                    "kind": "LinkedField",
                    "name": "taskTypes",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "useTaskTypePagination"
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "useTaskTypeListQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "TaskTypes",
                    "kind": "LinkedField",
                    "name": "taskTypes",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        {
                            "alias": null,
                            "args": (v3 /*: any*/),
                            "concreteType": "TaskTypeConnection_list",
                            "kind": "LinkedField",
                            "name": "list",
                            "plural": false,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "TaskTypeConnection_listEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TaskType",
                                            "kind": "LinkedField",
                                            "name": "node",
                                            "plural": false,
                                            "selections": [
                                                (v2 /*: any*/),
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "order",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "typeId",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "label",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "description",
                                                    "storageKey": null
                                                },
                                                {
                                                    "alias": null,
                                                    "args": null,
                                                    "kind": "ScalarField",
                                                    "name": "__typename",
                                                    "storageKey": null
                                                }
                                            ],
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "cursor",
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                },
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "PageInfo",
                                    "kind": "LinkedField",
                                    "name": "pageInfo",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "endCursor",
                                            "storageKey": null
                                        },
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "hasNextPage",
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": (v3 /*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "TaskTypeConnection_list",
                            "kind": "LinkedHandle",
                            "name": "list"
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "13fc54cffc8db8ca9907160f9c95c438",
            "id": null,
            "metadata": {},
            "name": "useTaskTypeListQuery",
            "operationKind": "query",
            "text": "query useTaskTypeListQuery(\n  $count: Int!\n  $after: String\n) {\n  taskTypes {\n    ...useTaskTypePagination\n    id\n  }\n}\n\nfragment useTaskTypeFragment on TaskType {\n  id\n  typeId\n  label\n  description\n}\n\nfragment useTaskTypePagination on TaskTypes {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        order\n        ...useTaskTypeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '9bf130f618a09d468fe43bed0d27c7de';
export default node;
