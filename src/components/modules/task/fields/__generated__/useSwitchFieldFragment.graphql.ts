/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type useSwitchFieldFragment$ref = any;
export type useSwitchFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly meta: {
        readonly fieldType?: string | null;
        readonly label?: string | null;
        readonly disabled?: boolean | null;
        readonly required?: boolean | null;
    };
    readonly value: {
        readonly enabled?: boolean | null;
    };
    readonly " $refType": useSwitchFieldFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useSwitchFieldFragment",
    "type": "Field",
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
                    "type": "SwitchFieldMeta",
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
                    "type": "SwitchFieldValue",
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
        }
    ]
} as any);
(node as any).hash = 'e4b03c78cf7a04a65bc14d9965be891e';
export default node;
