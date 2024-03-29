/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type FieldType = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT";
export type useTextFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly meta: {
        readonly fieldType?: FieldType;
        readonly helperText?: string;
        readonly label?: string;
        readonly inputType?: string | null;
        readonly min?: number | null;
        readonly max?: number | null;
        readonly maxLength?: number | null;
        readonly minLength?: number | null;
        readonly required?: boolean;
    };
    readonly value: {
        readonly text?: string;
    };
    readonly " $refType": "useTextFieldFragment";
};
export type useTextFieldFragment$data = useTextFieldFragment;
export type useTextFieldFragment$key = {
    readonly " $data"?: useTextFieldFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useTextFieldFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useTextFieldFragment",
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
            "kind": "ScalarField",
            "name": "fieldId",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "meta",
            "plural": false,
            "selections": [
                {
                    "kind": "InlineFragment",
                    "selections": [
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
                            "name": "helperText",
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
                            "name": "inputType",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "min",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "max",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "maxLength",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "minLength",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "required",
                            "storageKey": null
                        }
                    ],
                    "type": "TextFieldMeta",
                    "abstractKey": null
                }
            ],
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "value",
            "plural": false,
            "selections": [
                {
                    "kind": "InlineFragment",
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "text",
                            "storageKey": null
                        }
                    ],
                    "type": "TextFieldValue",
                    "abstractKey": null
                }
            ],
            "storageKey": null
        }
    ],
    "type": "Field",
    "abstractKey": null
} as any;
(node as any).hash = '26d7d18e7375fe3c0ff0e3a293a8ad3a';
export default node;
