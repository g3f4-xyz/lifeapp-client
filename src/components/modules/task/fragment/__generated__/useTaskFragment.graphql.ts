/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type ChoiceFieldFragment_data$ref = any;
type NestedFieldFragment_data$ref = any;
type SliderFieldFragment_data$ref = any;
type SwitchFieldFragment_data$ref = any;
type TextFieldFragment_data$ref = any;
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type FieldType = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT";
export type useTaskFragment$ref = any;
export type useTaskFragment = {
    readonly id: string;
    readonly fields: ReadonlyArray<{
        readonly __typename: string;
        readonly fieldId: FieldId;
        readonly fieldType: FieldType;
        readonly order: number;
        readonly " $fragmentRefs": SliderFieldFragment_data$ref & SwitchFieldFragment_data$ref & ChoiceFieldFragment_data$ref & TextFieldFragment_data$ref & NestedFieldFragment_data$ref;
    }>;
    readonly " $refType": useTaskFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useTaskFragment",
    "type": "Task",
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
            "concreteType": "Field",
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fieldId",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fieldType",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "order",
                    "args": null,
                    "storageKey": null
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
} as any);
(node as any).hash = 'b5ef322fa39fa71a7c1aad40d141b45d';
export default node;
