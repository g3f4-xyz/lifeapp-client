/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type FieldTypeEnum = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT" | "%future added value";
export type SwitchFieldFragment_data$ref = any;
export type SwitchFieldFragment_data = {
    readonly id: string;
    readonly fieldId: FieldIdEnum;
    readonly meta: {
        readonly fieldType: FieldTypeEnum;
        readonly label: string;
        readonly disabled: boolean | null;
        readonly required: boolean;
    };
    readonly value: {
        readonly enabled: boolean;
    };
    readonly " $refType": SwitchFieldFragment_data$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "SwitchFieldFragment_data",
    "type": "SwitchFieldType",
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
            "concreteType": "SwitchMetaType",
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
                    "name": "label",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "disabled",
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
            "concreteType": "SwitchValueType",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "enabled",
                    "args": null,
                    "storageKey": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'ece959f676ef97be1b514ae8aa9625f6';
export default node;
