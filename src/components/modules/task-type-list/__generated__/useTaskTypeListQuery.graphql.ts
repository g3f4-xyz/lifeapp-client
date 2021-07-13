/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useTaskTypeListQueryVariables = {};
export type useTaskTypeListQueryResponse = {
    readonly taskTypes: {
        readonly " $fragmentRefs": FragmentRefs<"useTaskTypeListFragment">;
    };
};
export type useTaskTypeListQuery = {
    readonly response: useTaskTypeListQueryResponse;
    readonly variables: useTaskTypeListQueryVariables;
};



/*
query useTaskTypeListQuery {
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
            "cacheID": "b325bfb1ce6df56bad14af6e253ad15e",
            "id": null,
            "metadata": {},
            "name": "useTaskTypeListQuery",
            "operationKind": "query",
            "text": "query useTaskTypeListQuery {\n  taskTypes {\n    ...useTaskTypeListFragment\n    id\n  }\n}\n\nfragment useTaskTypeFragment on TaskType {\n  id\n  typeId\n  label\n  description\n}\n\nfragment useTaskTypeListFragment on TaskTypes {\n  id\n  list {\n    id\n    order\n    ...useTaskTypeFragment\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'cf01fd1f0a1fb6d63779871b83bc3686';
export default node;
