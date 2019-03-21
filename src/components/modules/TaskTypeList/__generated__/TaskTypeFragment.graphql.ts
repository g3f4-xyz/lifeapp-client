/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type TaskTypeEnum = "EVENT" | "GOAL" | "MEETING" | "ROUTINE" | "TODO";
export type TaskTypeFragment$ref = any;
export type TaskTypeFragment = {
    readonly id: string;
    readonly typeId: TaskTypeEnum;
    readonly label: string;
    readonly description: string;
    readonly " $refType": TaskTypeFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TaskTypeFragment",
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
(node as any).hash = 'da8505ee3d65b8fb59e6e51f61ee2a68';
export default node;
