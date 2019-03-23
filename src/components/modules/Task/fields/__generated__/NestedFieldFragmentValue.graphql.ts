/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type NestedFieldFragmentValue$ref = any;
export type NestedFieldFragmentValue = {
    readonly ownValue: ({
        readonly enabled?: boolean;
        readonly text?: string;
        readonly id?: string;
    }) | null;
    readonly childrenValue: ({
        readonly ownValue: ({
            readonly enabled?: boolean;
            readonly text?: string;
            readonly id?: string;
        }) | null;
        readonly childrenValue: ({
            readonly ownValue: ({
                readonly enabled?: boolean;
                readonly text?: string;
                readonly id?: string;
            }) | null;
        }) | null;
    }) | null;
    readonly " $refType": NestedFieldFragmentValue$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "ownValue",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
            {
                "kind": "InlineFragment",
                "type": "SwitchValueType",
                "selections": [
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "enabled",
                        "args": null,
                        "storageKey": null
                    }
                ]
            },
            {
                "kind": "InlineFragment",
                "type": "TextValueType",
                "selections": [
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "text",
                        "args": null,
                        "storageKey": null
                    }
                ]
            },
            {
                "kind": "InlineFragment",
                "type": "ChoiceValueType",
                "selections": [
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "id",
                        "args": null,
                        "storageKey": null
                    }
                ]
            }
        ]
    } as any);
    return {
        "kind": "Fragment",
        "name": "NestedFieldFragmentValue",
        "type": "NestedValueType",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            (v0 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "childrenValue",
                "storageKey": null,
                "args": null,
                "concreteType": "NestedValueType",
                "plural": false,
                "selections": [
                    (v0 /*: any*/),
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "childrenValue",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NestedValueType",
                        "plural": false,
                        "selections": [
                            (v0 /*: any*/)
                        ]
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = '673fdf3c1d674c895c7f6d2a97f5fc54';
export default node;
