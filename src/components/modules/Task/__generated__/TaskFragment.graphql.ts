/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type FieldFragment$ref = any;
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "STATUS" | "TITLE";
export type TaskFragment$ref = any;
export type TaskFragment = {
    readonly id: string;
    readonly fields: ReadonlyArray<{
        readonly fieldId: FieldIdEnum;
        readonly order: number;
        readonly " $fragmentRefs": FieldFragment$ref;
    }>;
    readonly " $refType": TaskFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TaskFragment",
    "type": "TaskType",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "fields",
            "storageKey": null,
            "args": null,
            "concreteType": "FieldType",
            "plural": true,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fieldId",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "order",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "FragmentSpread",
                    "name": "FieldFragment",
                    "args": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'a9d11a314e9a54394d56cd51f8a3c400';
export default node;
