/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type ChoiceFieldFragment$ref = any;
type NestedFieldFragment$ref = any;
type SliderFieldFragment$ref = any;
type SwitchFieldFragment$ref = any;
type TextFieldFragment$ref = any;
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT";
export type TaskFragment$ref = any;
export type TaskFragment = {
    readonly id: string;
    readonly fields: ReadonlyArray<{
        readonly __typename: string;
        readonly fieldType?: FieldTypeEnum;
        readonly order?: number;
        readonly " $fragmentRefs": SliderFieldFragment$ref & SwitchFieldFragment$ref & ChoiceFieldFragment$ref & TextFieldFragment$ref & NestedFieldFragment$ref;
    }>;
    readonly " $refType": TaskFragment$ref;
};



const node: ReaderFragment = (function () {
    var v0 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "fieldType",
            "args": null,
            "storageKey": null
        } as any),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "order",
            "args": null,
            "storageKey": null
        } as any)
    ];
    return {
        "kind": "Fragment",
        "name": "TaskFragment",
        "type": "TaskType",
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
                "kind": "LinkedField",
                "alias": null,
                "name": "fields",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": true,
                "selections": [
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "SliderFieldFragment",
                        "args": null
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "SwitchFieldFragment",
                        "args": null
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "ChoiceFieldFragment",
                        "args": null
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "TextFieldFragment",
                        "args": null
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "NestedFieldFragment",
                        "args": null
                    },
                    {
                        "kind": "InlineFragment",
                        "type": "ChoiceFieldType",
                        "selections": (v0 /*: any*/)
                    },
                    {
                        "kind": "InlineFragment",
                        "type": "SwitchFieldType",
                        "selections": (v0 /*: any*/)
                    },
                    {
                        "kind": "InlineFragment",
                        "type": "SliderFieldType",
                        "selections": (v0 /*: any*/)
                    },
                    {
                        "kind": "InlineFragment",
                        "type": "NestedFieldType",
                        "selections": (v0 /*: any*/)
                    },
                    {
                        "kind": "InlineFragment",
                        "type": "TextFieldType",
                        "selections": (v0 /*: any*/)
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = '121c128b1dc6d50c1b79c4d6d5d47f99';
export default node;
