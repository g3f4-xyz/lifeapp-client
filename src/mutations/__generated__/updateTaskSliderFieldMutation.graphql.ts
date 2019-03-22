/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type FieldIdEnum = "ACTION" | "ACTIVE" | "CYCLE" | "DATE" | "DATE_TIME" | "DURATION" | "LOCATION" | "NOTE" | "NOTIFICATIONS" | "PERSON" | "PRIORITY" | "PROGRESS" | "STATUS" | "TITLE";
export type updateTaskSliderFieldMutationInput = {
    readonly taskId: string;
    readonly fieldId: FieldIdEnum;
    readonly fieldValue: SliderValueInputType;
    readonly clientMutationId?: string | null;
};
export type SliderValueInputType = {
    readonly progress: number;
};
export type updateTaskSliderFieldMutationVariables = {
    readonly input: updateTaskSliderFieldMutationInput;
};
export type updateTaskSliderFieldMutationResponse = {
    readonly updateTaskSliderField: ({
        readonly fieldId: FieldIdEnum;
        readonly taskId: string;
        readonly updatedFieldValue: {
            readonly progress: number;
        };
    }) | null;
};
export type updateTaskSliderFieldMutation = {
    readonly response: updateTaskSliderFieldMutationResponse;
    readonly variables: updateTaskSliderFieldMutationVariables;
};



/*
mutation updateTaskSliderFieldMutation(
  $input: updateTaskSliderFieldMutationInput!
) {
  updateTaskSliderField(input: $input) {
    fieldId
    taskId
    updatedFieldValue {
      progress
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "updateTaskSliderFieldMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "updateTaskSliderField",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "updateTaskSliderFieldMutationInput!"
                }
            ],
            "concreteType": "updateTaskSliderFieldMutationPayload",
            "plural": false,
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
                    "name": "taskId",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "updatedFieldValue",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SliderValueType",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "progress",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "updateTaskSliderFieldMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "updateTaskSliderFieldMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "updateTaskSliderFieldMutation",
            "id": null,
            "text": "mutation updateTaskSliderFieldMutation(\n  $input: updateTaskSliderFieldMutationInput!\n) {\n  updateTaskSliderField(input: $input) {\n    fieldId\n    taskId\n    updatedFieldValue {\n      progress\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'd1bca8c78ca9c33c205c663ab0ab9ac6';
export default node;
