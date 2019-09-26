/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type useTaskTypePagination$ref = any;
export type useTaskTypeListQueryVariables = {
    readonly count: number;
    readonly after?: string | null;
};
export type useTaskTypeListQueryResponse = {
    readonly app: {
        readonly taskTypeList: {
            readonly " $fragmentRefs": useTaskTypePagination$ref;
        };
    };
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
  app {
    taskTypeList {
      ...useTaskTypePagination
      id
    }
    id
  }
}

fragment useTaskTypePagination on TaskTypeListType {
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

fragment useTaskTypeFragment on TaskTypeType {
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
            "type": "QueryType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "app",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "taskTypeList",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TaskTypeListType",
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
                    "name": "app",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AppType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "taskTypeList",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TaskTypeListType",
                            "plural": false,
                            "selections": [
                                (v1 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "list",
                                    "storageKey": null,
                                    "args": (v2 /*: any*/),
                                    "concreteType": "TaskTypeTypeConnection",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "edges",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "TaskTypeTypeEdge",
                                            "plural": true,
                                            "selections": [
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "node",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "TaskTypeType",
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
                                    "key": "TaskTypeList_list",
                                    "filters": null
                                }
                            ]
                        },
                        (v1 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "useTaskTypeListQuery",
            "id": null,
            "text": "query useTaskTypeListQuery(\n  $count: Int!\n  $after: String\n) {\n  app {\n    taskTypeList {\n      ...useTaskTypePagination\n      id\n    }\n    id\n  }\n}\n\nfragment useTaskTypePagination on TaskTypeListType {\n  id\n  list(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        order\n        ...useTaskTypeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment useTaskTypeFragment on TaskTypeType {\n  id\n  typeId\n  label\n  description\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '0d29f34540f758214c365d80a8ec90e2';
export default node;
