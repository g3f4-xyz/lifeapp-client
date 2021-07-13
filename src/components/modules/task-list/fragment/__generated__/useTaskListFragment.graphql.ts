/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type TaskTypeId = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO";
export type useTaskListFragment = {
    readonly id: string;
    readonly typeId: TaskTypeId;
    readonly fields: ReadonlyArray<{
        readonly fieldId: FieldId;
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
                "storageKey": null
            }
        ],
        "type": "Task",
        "abstractKey": null
    } as any;
})();
(node as any).hash = 'dd06a8af0e466927e3a1c1912d88ead4';
export default node;
