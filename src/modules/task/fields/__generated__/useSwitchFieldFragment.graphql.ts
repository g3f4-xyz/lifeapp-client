/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
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
    readonly " $refType": "useSwitchFieldFragment";
};
export type useSwitchFieldFragment$data = useSwitchFieldFragment;
export type useSwitchFieldFragment$key = {
    readonly " $data"?: useSwitchFieldFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useSwitchFieldFragment">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSwitchFieldFragment",
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
                            "name": "label",
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "disabled",
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
                    "type": "SwitchFieldMeta",
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
                            "name": "enabled",
                            "storageKey": null
                        }
                    ],
                    "type": "SwitchFieldValue",
                    "abstractKey": null
                }
            ],
            "storageKey": null
        }
    ],
    "type": "Field",
    "abstractKey": null
} as any;
(node as any).hash = '00ed36e3efd73c6109e786c58621f0d7';
export default node;
