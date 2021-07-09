/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FieldId = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATION" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE" | "%future added value";
export type useNestedFieldFragment$ref = any;
export type useNestedFieldFragment = {
    readonly id: string;
    readonly fieldId: FieldId;
    readonly " $refType": useNestedFieldFragment$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useNestedFieldFragment",
    "type": "Field",
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
            "name": "fieldId",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '425111a7dc7b972455ee3913306d5a49';
export default node;
