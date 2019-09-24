/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type ChoiceFieldFragment_data$ref = any;
type NestedFieldFragment_data$ref = any;
type SliderFieldFragment_data$ref = any;
type SwitchFieldFragment_data$ref = any;
type TextFieldFragment_data$ref = any;
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT" | "%future added value";
export type TaskFragment_data$ref = any;
export type TaskFragment_data = {
    readonly id: string;
    readonly fields: ReadonlyArray<{
        readonly __typename: string;
        readonly fieldId?: FieldIdEnum;
        readonly fieldType?: FieldTypeEnum;
        readonly order?: number;
        readonly " $fragmentRefs": SliderFieldFragment_data$ref & SwitchFieldFragment_data$ref & ChoiceFieldFragment_data$ref & TextFieldFragment_data$ref & NestedFieldFragment_data$ref;
    }>;
    readonly " $refType": TaskFragment_data$ref;
};



const node: ReaderFragment = (function () {
    var v0 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "fieldId",
            "args": null,
            "storageKey": null
        } as any),
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
        "name": "TaskFragment_data",
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
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "SliderFieldFragment_data",
                        "args": null
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "SwitchFieldFragment_data",
                        "args": null
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "ChoiceFieldFragment_data",
                        "args": null
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "TextFieldFragment_data",
                        "args": null
                    },
                    {
                        "kind": "FragmentSpread",
                        "name": "NestedFieldFragment_data",
                        "args": null
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = 'a641b606dec5605581add165c91f0da7';
export default node;
