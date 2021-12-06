/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type FieldType = "CHOICE" | "NESTED" | "SLIDER" | "SWITCH" | "TEXT";
export type useChoiceFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly meta: {
        readonly fieldType?: FieldType;
        readonly helperText?: string;
        readonly label?: string;
        readonly defaultValue?: string | null;
        readonly options?: ReadonlyArray<{
            readonly text: string;
            readonly value: string;
        }>;
        readonly required?: boolean;
    };
    readonly value: {
        readonly id?: string;
    };
    readonly " $refType": "useChoiceFieldFragment";
};
export type useChoiceFieldFragment$data = useChoiceFieldFragment;
export type useChoiceFieldFragment$key = {
    readonly " $data"?: useChoiceFieldFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useChoiceFieldFragment">;
};



const node: ReaderFragment = (function () {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "argumentDefinitions": [],
        "kind": "Fragment",
        "metadata": null,
        "name": "useChoiceFieldFragment",
        "selections": [
            (v0 /*: any*/),
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
                                "name": "defaultValue",
                                "storageKey": null
                            },
                            {
                                "alias": null,
                                "args": null,
                                "concreteType": "ChoiceFieldOptionsMeta",
                                "kind": "LinkedField",
                                "name": "options",
                                "plural": true,
                                "selections": [
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "text",
                                        "storageKey": null
                                    },
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "value",
                                        "storageKey": null
                                    }
                                ],
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
                        "type": "ChoiceFieldMeta",
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
                            (v0 /*: any*/)
                        ],
                        "type": "ChoiceFieldValue",
                        "abstractKey": null
                    }
                ],
                "storageKey": null
            }
        ],
        "type": "Field",
        "abstractKey": null
    } as any;
})();
(node as any).hash = '88901a50f29b7f7d8b6ae89ddca4fb20';
export default node;
