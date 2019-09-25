/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type useTaskTypeFragment$ref = any;
export type useTaskTypePagination$ref = any;
export type useTaskTypePagination = {
    readonly id: string;
    readonly list: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly order: number;
                readonly " $fragmentRefs": useTaskTypeFragment$ref;
            } | null;
        } | null> | null;
    };
    readonly " $refType": useTaskTypePagination$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "useTaskTypePagination",
        "type": "TaskTypeListType",
        "metadata": {
            "connection": [
                {
                    "count": "count",
                    "cursor": "after",
                    "direction": "forward",
                    "path": [
                        "list"
                    ]
                }
            ]
        },
        "argumentDefinitions": [
            {
                "kind": "RootArgument",
                "name": "count",
                "type": "Int"
            },
            {
                "kind": "RootArgument",
                "name": "after",
                "type": "String"
            }
        ],
        "selections": [
            (v0 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": "list",
                "name": "__TaskTypeList_list_connection",
                "storageKey": null,
                "args": null,
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
                                    (v0 /*: any*/),
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
                                        "name": "__typename",
                                        "args": null,
                                        "storageKey": null
                                    },
                                    {
                                        "kind": "FragmentSpread",
                                        "name": "useTaskTypeFragment",
                                        "args": null
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
            }
        ]
    } as any;
})();
(node as any).hash = '7977ccbcaf8d2efc13fd6eb6f6d90ce5';
export default node;
