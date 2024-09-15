/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type useTaskListItemFragment = {
    readonly id: string;
    readonly typeId: string;
    readonly fields: ReadonlyArray<{
        readonly fieldId: FieldId;
        readonly value: {
            readonly progress?: number;
            readonly enabled?: boolean;
            readonly id?: string;
            readonly text?: string;
        };
    }>;
    readonly " $refType": "useTaskListItemFragment";
};
export type useTaskListItemFragment$data = useTaskListItemFragment;
export type useTaskListItemFragment$key = {
    readonly " $data"?: useTaskListItemFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useTaskListItemFragment">;
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
        "name": "useTaskListItemFragment",
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
(node as any).hash = '3f593f4f9a9e5efe7e2f9b58ebfadbba';
export default node;
