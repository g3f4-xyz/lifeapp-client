/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type TaskTypeEnum = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO" | "%future added value";
export type TaskTypeFragment_data$ref = any;
export type TaskTypeFragment_data = {
    readonly id: string;
    readonly typeId: TaskTypeEnum;
    readonly label: string;
    readonly description: string;
    readonly " $refType": TaskTypeFragment_data$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TaskTypeFragment_data",
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
(node as any).hash = 'c73dbe0e486e28a0e496993b0509501b';
export default node;
