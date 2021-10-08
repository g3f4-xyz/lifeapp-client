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
  }
}

fragment useTaskTypeFragment on TaskType {
  typeId
  label
  description
}

fragment useTaskTypeListFragment on TaskTypes {
  list {
    typeId
    ...useTaskTypeFragment
  }
}
*/

const node: ConcreteRequest = {
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
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "TaskType",
                        "kind": "LinkedField",
                        "name": "list",
                        "plural": true,
                        "selections": [
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
        "cacheID": "d641a36dee2b509c5720d1864abf7bb0",
        "id": null,
        "metadata": {},
        "name": "useTaskTypesQuery",
        "operationKind": "query",
        "text": "query useTaskTypesQuery {\n  taskTypes {\n    ...useTaskTypeListFragment\n  }\n}\n\nfragment useTaskTypeFragment on TaskType {\n  typeId\n  label\n  description\n}\n\nfragment useTaskTypeListFragment on TaskTypes {\n  list {\n    typeId\n    ...useTaskTypeFragment\n  }\n}\n"
    }
} as any;
(node as any).hash = 'b3383999cd90d22fd3d46d5f0f5dcb75';
export default node;
