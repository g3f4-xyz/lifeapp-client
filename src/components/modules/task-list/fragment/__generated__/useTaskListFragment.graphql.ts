/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type useTaskListFragment$ref = any;
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
    readonly " $refType": useTaskListFragment$ref;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "fieldType",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "label",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "disabled",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "required",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "max",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "min",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "helperText",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "useTaskListFragment",
        "type": "Task",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            (v0 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "typeId",
                "args": null,
                "storageKey": null
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "fields",
                "storageKey": null,
                "args": null,
                "concreteType": "Field",
                "plural": true,
                "selections": [
                    (v0 /*: any*/),
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
                                "type": "SliderFieldMeta",
                                "selections": [
                                    (v1 /*: any*/),
                                    (v2 /*: any*/),
                                    (v3 /*: any*/),
                                    (v4 /*: any*/),
                                    (v5 /*: any*/),
                                    (v6 /*: any*/),
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "step",
                                        "args": null,
                                        "storageKey": null
                                    }
                                ]
                            },
                            {
                                "kind": "InlineFragment",
                                "type": "SwitchFieldMeta",
                                "selections": [
                                    (v1 /*: any*/),
                                    (v2 /*: any*/),
                                    (v3 /*: any*/),
                                    (v4 /*: any*/)
                                ]
                            },
                            {
                                "kind": "InlineFragment",
                                "type": "ChoiceFieldMeta",
                                "selections": [
                                    (v1 /*: any*/),
                                    (v7 /*: any*/),
                                    (v2 /*: any*/),
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "defaultValue",
                                        "args": null,
                                        "storageKey": null
                                    },
                                    {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "options",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "FieldMetaOptions",
                                        "plural": true,
                                        "selections": [
                                            (v8 /*: any*/),
                                            {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "name": "value",
                                                "args": null,
                                                "storageKey": null
                                            }
                                        ]
                                    },
                                    (v4 /*: any*/)
                                ]
                            },
                            {
                                "kind": "InlineFragment",
                                "type": "TextFieldMeta",
                                "selections": [
                                    (v1 /*: any*/),
                                    (v7 /*: any*/),
                                    (v2 /*: any*/),
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "inputType",
                                        "args": null,
                                        "storageKey": null
                                    },
                                    (v6 /*: any*/),
                                    (v5 /*: any*/),
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
                                    (v4 /*: any*/)
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
                                "type": "SliderFieldValue",
                                "selections": [
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "progress",
                                        "args": null,
                                        "storageKey": null
                                    }
                                ]
                            },
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
                            },
                            {
                                "kind": "InlineFragment",
                                "type": "ChoiceFieldValue",
                                "selections": [
                                    (v0 /*: any*/)
                                ]
                            },
                            {
                                "kind": "InlineFragment",
                                "type": "TextFieldValue",
                                "selections": [
                                    (v8 /*: any*/)
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = '5ba2847125c3fd50da8ee11949652de1';
export default node;
