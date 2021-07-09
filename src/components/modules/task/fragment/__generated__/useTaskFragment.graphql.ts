/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type useChoiceFieldFragment$ref = any;
type useNestedFieldFragment$ref = any;
type useSliderFieldFragment$ref = any;
type useSwitchFieldFragment$ref = any;
type useTextFieldFragment$ref = any;
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type FieldType = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT" | "%future added value";
export type useTaskFragment$ref = any;
export type useTaskFragment = {
    readonly id: string;
    readonly fields: ReadonlyArray<{
        readonly __typename: string;
        readonly fieldId: FieldId;
        readonly fieldType: FieldType;
        readonly order: number;
        readonly " $fragmentRefs": useSliderFieldFragment$ref & useSwitchFieldFragment$ref & useChoiceFieldFragment$ref & useTextFieldFragment$ref & useNestedFieldFragment$ref;
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
                    "name": "useSliderFieldFragment",
                    "args": null
                },
                {
                    "kind": "FragmentSpread",
                    "name": "useSwitchFieldFragment",
                    "args": null
                },
                {
                    "kind": "FragmentSpread",
                    "name": "useChoiceFieldFragment",
                    "args": null
                },
                {
                    "kind": "FragmentSpread",
                    "name": "useTextFieldFragment",
                    "args": null
                },
                {
                    "kind": "FragmentSpread",
                    "name": "useNestedFieldFragment",
                    "args": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'bacca25c4bce07cec934d0111ca02799';
export default node;
