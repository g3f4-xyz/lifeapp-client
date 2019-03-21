/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT";
export type TextFieldFragment$ref = any;
export type TextFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldIdEnum;
    readonly meta: {
        readonly fieldType?: FieldTypeEnum;
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
    readonly " $refType": TextFieldFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TextFieldFragment",
    "type": "FieldType",
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
                    "type": "TextMetaType",
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
                }
            ]
        }
    ]
} as any);
(node as any).hash = '638b93a9c0710f18010cde7a4f2f204d';
export default node;
