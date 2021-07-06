/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type NestedFieldFragment$ref = any;
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type NestedFieldFragment_data$ref = any;
export type NestedFieldFragment_data = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly meta: {
        readonly ownMeta?: {
            readonly " $fragmentRefs": NestedFieldFragment$ref;
        } | null;
        readonly childrenMeta?: ReadonlyArray<{
            readonly " $fragmentRefs": NestedFieldFragment$ref;
        }> | null;
    };
    readonly value: {
        readonly ownValue?: {
            readonly __typename: string;
        } | null;
    };
    readonly " $refType": NestedFieldFragment_data$ref;
};



const node: ReaderFragment = (function () {
    var v0 = [
        ({
            "kind": "FragmentSpread",
            "name": "NestedFieldFragment",
            "args": null
        } as any)
    ];
    return {
        "kind": "Fragment",
        "name": "NestedFieldFragment_data",
        "type": "Field",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
            },
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "fieldId",
                "args": null,
                "storageKey": null
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "meta",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                    {
                        "kind": "InlineFragment",
                        "type": "NestedFieldMeta",
                        "selections": [
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "ownMeta",
                                "storageKey": null,
                                "args": null,
                                "concreteType": null,
                                "plural": false,
                                "selections": (v0 /*: any*/)
                            },
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "childrenMeta",
                                "storageKey": null,
                                "args": null,
                                "concreteType": null,
                                "plural": true,
                                "selections": (v0 /*: any*/)
                            }
                        ]
                    }
                ]
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "value",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                    {
                        "kind": "InlineFragment",
                        "type": "NestedFieldValue",
                        "selections": [
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "ownValue",
                                "storageKey": null,
                                "args": null,
                                "concreteType": null,
                                "plural": false,
                                "selections": [
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "__typename",
                                        "args": null,
                                        "storageKey": null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = '83993cb670dbbd6ef45f0ff0edf9c9d2';
export default node;
