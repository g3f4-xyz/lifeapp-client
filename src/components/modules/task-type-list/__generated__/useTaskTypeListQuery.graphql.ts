/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type useTaskTypePagination$ref = any;
export type useTaskTypeListQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type useTaskTypeListQueryResponse = {
    readonly taskTypes: {
        readonly " $fragmentRefs": useTaskTypePagination$ref;
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

fragment useTaskTypeFragment on TaskType {
  id
  typeId
  label
  description
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "count",
            "type": "Int!",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "after",
            "type": "String",
            "defaultValue": null
        } as any)
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v2 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "after"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "count"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "useTaskTypeListQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "taskTypes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TaskTypes",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "FragmentSpread",
                            "name": "useTaskTypePagination",
                            "args": null
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "useTaskTypeListQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "taskTypes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TaskTypes",
                    "plural": false,
                    "selections": [
                        (v1 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "list",
                            "storageKey": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "TaskTypeConnection_list",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "TaskTypeConnection_listEdge",
                                    "plural": true,
                                    "selections": [
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "node",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "TaskType",
                                            "plural": false,
                                            "selections": [
                                                (v1 /*: any*/),
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "order",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "typeId",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "label",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "description",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "__typename",
                                                    "args": null,
                                                    "storageKey": null
                                                }
                                            ]
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "cursor",
                                            "args": null,
                                            "storageKey": null
                                        }
                                    ]
                                },
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "pageInfo",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "PageInfo",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "endCursor",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "hasNextPage",
                                            "args": null,
                                            "storageKey": null
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "kind": "LinkedHandle",
                            "alias": null,
                            "name": "list",
                            "args": (v2 /*: any*/),
                            "handle": "connection",
                            "key": "TaskTypeConnection_list",
                            "filters": null
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "useTaskTypeListQuery",
            "id": null,
            "text": "query useTaskTypeListQuery(\n  $count: Int!\n  $after: String\n) {\n  taskTypes {\n    ...useTaskTypePagination\n    id\n  }\n}\n\nfragment useTaskTypePagination on TaskTypes {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        order\n        ...useTaskTypeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment useTaskTypeFragment on TaskType {\n  id\n  typeId\n  label\n  description\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '9bf130f618a09d468fe43bed0d27c7de';
export default node;
