/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type useChoiceFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly meta: {
        readonly fieldType?: string | null;
        readonly helperText?: string | null;
        readonly label?: string | null;
        readonly defaultValue?: string | null;
        readonly options?: ReadonlyArray<{
            readonly text: string;
            readonly value: string;
        }>;
        readonly required?: boolean | null;
    };
    readonly value: {
        readonly id?: string | null;
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
                                "concreteType": "FieldMetaOptions",
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
(node as any).hash = '0f1017159be3b9f38d8739a69baa76f9';
export default node;
