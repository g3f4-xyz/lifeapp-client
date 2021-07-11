/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type useTextFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly meta: {
        readonly fieldType?: string | null;
        readonly helperText?: string | null;
        readonly label?: string | null;
        readonly inputType?: string | null;
        readonly min?: number | null;
        readonly max?: number | null;
        readonly maxLength?: number | null;
        readonly minLength?: number | null;
        readonly required?: boolean | null;
    };
    readonly value: {
        readonly text?: string | null;
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
(node as any).hash = 'afb38a205f0fec101b540039bb08a0e7';
export default node;
