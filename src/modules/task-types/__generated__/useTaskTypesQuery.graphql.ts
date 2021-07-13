/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTaskTypesQueryVariables = {};
export type useTaskTypesQueryResponse = {
    readonly taskTypes: {
        readonly " $fragmentRefs": FragmentRefs<"useTaskTypeListFragment">;
    };
};
export type useTaskTypesQuery = {
    readonly response: useTaskTypesQueryResponse;
    readonly variables: useTaskTypesQueryVariables;
};



/*
query useTaskTypesQuery {
  taskTypes {
    ...useTaskTypeListFragment
    id
  }
}

fragment useTaskTypeFragment on TaskType {
  id
  typeId
  label
  description
}

fragment useTaskTypeListFragment on TaskTypes {
  id
  list {
    id
    order
    ...useTaskTypeFragment
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [],
            "kind": "Fragment",
            "metadata": null,
            "name": "useTaskTypesQuery",
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
                            "name": "useTaskTypeListFragment"
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
            "argumentDefinitions": [],
            "kind": "Operation",
            "name": "useTaskTypesQuery",
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "TaskTypes",
                    "kind": "LinkedField",
                    "name": "taskTypes",
                    "plural": false,
                    "selections": [
                        (v0 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "TaskType",
                            "kind": "LinkedField",
                            "name": "list",
                            "plural": true,
                            "selections": [
                                (v0 /*: any*/),
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
                                }
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "078c70ffc2c8d3fa0e016d9627b700f3",
            "id": null,
            "metadata": {},
            "name": "useTaskTypesQuery",
            "operationKind": "query",
            "text": "query useTaskTypesQuery {\n  taskTypes {\n    ...useTaskTypeListFragment\n    id\n  }\n}\n\nfragment useTaskTypeFragment on TaskType {\n  id\n  typeId\n  label\n  description\n}\n\nfragment useTaskTypeListFragment on TaskTypes {\n  id\n  list {\n    id\n    order\n    ...useTaskTypeFragment\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b3383999cd90d22fd3d46d5f0f5dcb75';
export default node;
