/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type FieldType = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT";
export type useTaskFragment = {
    readonly id: string;
    readonly fields: ReadonlyArray<{
        readonly __typename: string;
        readonly fieldId: FieldId;
        readonly fieldType: FieldType;
        readonly order: number;
        readonly " $fragmentRefs": FragmentRefs<"useSliderFieldFragment" | "useSwitchFieldFragment" | "useChoiceFieldFragment" | "useTextFieldFragment" | "useNestedFieldFragment">;
    }>;
    readonly " $refType": "useTaskFragment";
};
export type useTaskFragment$data = useTaskFragment;
export type useTaskFragment$key = {
    readonly " $data"?: useTaskFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useTaskFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useTaskFragment",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "concreteType": "Field",
            "kind": "LinkedField",
            "name": "fields",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fieldId",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fieldType",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "order",
                    "storageKey": null
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useSliderFieldFragment"
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useSwitchFieldFragment"
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useChoiceFieldFragment"
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useTextFieldFragment"
                },
                {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "useNestedFieldFragment"
                }
            ],
            "storageKey": null
        }
    ],
    "type": "Task",
    "abstractKey": null
} as any;
(node as any).hash = 'bacca25c4bce07cec934d0111ca02799';
export default node;
