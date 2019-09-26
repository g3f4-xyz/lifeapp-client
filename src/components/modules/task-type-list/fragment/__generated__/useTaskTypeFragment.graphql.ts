/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type TaskTypeEnum = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type useTaskTypeFragment$ref = any;
export type useTaskTypeFragment = {
    readonly id: string;
    readonly typeId: TaskTypeEnum;
    readonly label: string;
    readonly description: string;
    readonly " $refType": useTaskTypeFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useTaskTypeFragment",
    "type": "TaskTypeType",
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
            "name": "typeId",
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
            "name": "description",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '406265357a2eb26cbdac9e1009cfbcb9';
export default node;
