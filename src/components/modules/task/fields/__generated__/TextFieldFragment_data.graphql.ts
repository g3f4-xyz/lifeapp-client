/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT" | "%future added value";
export type TextFieldFragment_data$ref = any;
export type TextFieldFragment_data = {
    readonly id: string;
    readonly fieldId: FieldIdEnum;
    readonly meta: {
        readonly fieldType: FieldTypeEnum;
        readonly helperText: string;
        readonly label: string;
        readonly inputType: string | null;
        readonly min: number | null;
        readonly max: number | null;
        readonly maxLength: number | null;
        readonly minLength: number | null;
        readonly required: boolean;
    };
    readonly value: {
        readonly text: string;
    };
    readonly " $refType": TextFieldFragment_data$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TextFieldFragment_data",
    "type": "TextFieldType",
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
            "concreteType": "TextMetaType",
            "plural": false,
            "selections": [
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
                    "name": "helperText",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "label",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "inputType",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "min",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "max",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "maxLength",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "minLength",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "required",
                    "args": null,
                    "storageKey": null
                }
            ]
        },
        {
            "kind": "LinkedField",
            "alias": null,
            "name": "value",
            "storageKey": null,
            "args": null,
            "concreteType": "TextValueType",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "text",
                    "args": null,
                    "storageKey": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'e8e3451dc4f68b6c18bbb58baf3ea0ec';
export default node;
