/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type useTaskListFragment = {
    readonly id: string;
    readonly typeId: TaskTypeId;
    readonly fields: ReadonlyArray<{
        readonly id: string;
        readonly fieldId: FieldId;
        readonly meta: {
            readonly fieldType?: string | null;
            readonly label?: string | null;
            readonly disabled?: boolean | null;
            readonly required?: boolean | null;
            readonly max?: number | null;
            readonly min?: number | null;
            readonly step?: number | null;
            readonly helperText?: string | null;
            readonly defaultValue?: string | null;
            readonly options?: ReadonlyArray<{
                readonly text: string;
                readonly value: string;
            }>;
            readonly inputType?: string | null;
            readonly maxLength?: number | null;
            readonly minLength?: number | null;
        };
        readonly value: {
            readonly progress?: number | null;
            readonly enabled?: boolean | null;
            readonly id?: string | null;
            readonly text?: string | null;
        };
    }>;
    readonly " $refType": "useTaskListFragment";
};
export type useTaskListFragment$data = useTaskListFragment;
export type useTaskListFragment$key = {
    readonly " $data"?: useTaskListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useTaskListFragment">;
};



const node: ReaderFragment = (function () {
    var v0 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fieldType",
        "storageKey": null
    } as any, v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
    } as any, v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "disabled",
        "storageKey": null
    } as any, v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "required",
        "storageKey": null
    } as any, v5 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "max",
        "storageKey": null
    } as any, v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "min",
        "storageKey": null
    } as any, v7 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "helperText",
        "storageKey": null
    } as any, v8 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
    } as any;
    return {
        "argumentDefinitions": [],
        "kind": "Fragment",
        "metadata": null,
        "name": "useTaskListFragment",
        "selections": [
            (v0 /*: any*/),
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "typeId",
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
                                    (v1 /*: any*/),
                                    (v2 /*: any*/),
                                    (v3 /*: any*/),
                                    (v4 /*: any*/),
                                    (v5 /*: any*/),
                                    (v6 /*: any*/),
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "step",
                                        "storageKey": null
                                    }
                                ],
                                "type": "SliderFieldMeta",
                                "abstractKey": null
                            },
                            {
                                "kind": "InlineFragment",
                                "selections": [
                                    (v1 /*: any*/),
                                    (v2 /*: any*/),
                                    (v3 /*: any*/),
                                    (v4 /*: any*/)
                                ],
                                "type": "SwitchFieldMeta",
                                "abstractKey": null
                            },
                            {
                                "kind": "InlineFragment",
                                "selections": [
                                    (v1 /*: any*/),
                                    (v7 /*: any*/),
                                    (v2 /*: any*/),
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
                                            (v8 /*: any*/),
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
                                    (v4 /*: any*/)
                                ],
                                "type": "ChoiceFieldMeta",
                                "abstractKey": null
                            },
                            {
                                "kind": "InlineFragment",
                                "selections": [
                                    (v1 /*: any*/),
                                    (v7 /*: any*/),
                                    (v2 /*: any*/),
                                    {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "inputType",
                                        "storageKey": null
                                    },
                                    (v6 /*: any*/),
                                    (v5 /*: any*/),
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
                                    (v4 /*: any*/)
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
                                        "name": "progress",
                                        "storageKey": null
                                    }
                                ],
                                "type": "SliderFieldValue",
                                "abstractKey": null
                            },
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
                            },
                            {
                                "kind": "InlineFragment",
                                "selections": [
                                    (v0 /*: any*/)
                                ],
                                "type": "ChoiceFieldValue",
                                "abstractKey": null
                            },
                            {
                                "kind": "InlineFragment",
                                "selections": [
                                    (v8 /*: any*/)
                                ],
                                "type": "TextFieldValue",
                                "abstractKey": null
                            }
                        ],
                        "storageKey": null
                    }
                ],
                "storageKey": null
            }
        ],
        "type": "Task",
        "abstractKey": null
    } as any;
})();
(node as any).hash = '5ba2847125c3fd50da8ee11949652de1';
export default node;
