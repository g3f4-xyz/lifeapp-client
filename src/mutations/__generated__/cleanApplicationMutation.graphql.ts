/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type cleanApplicationMutationInput = {
    readonly ownerId?: string | null;
    readonly clientMutationId?: string | null;
};
export type cleanApplicationMutationVariables = {
    readonly input: cleanApplicationMutationInput;
};
export type cleanApplicationMutationResponse = {
    readonly cleanApplication: ({
        readonly clientMutationId: string | null;
        readonly navigationUrl: string;
    }) | null;
};
export type cleanApplicationMutation = {
    readonly response: cleanApplicationMutationResponse;
    readonly variables: cleanApplicationMutationVariables;
};



/*
mutation cleanApplicationMutation(
  $input: cleanApplicationMutationInput!
) {
  cleanApplication(input: $input) {
    clientMutationId
    navigationUrl
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "cleanApplicationMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "cleanApplication",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "cleanApplicationMutationInput!"
                }
            ],
            "concreteType": "cleanApplicationMutationPayload",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "clientMutationId",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "navigationUrl",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "cleanApplicationMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "cleanApplicationMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "cleanApplicationMutation",
            "id": null,
            "text": "mutation cleanApplicationMutation(\n  $input: cleanApplicationMutationInput!\n) {\n  cleanApplication(input: $input) {\n    clientMutationId\n    navigationUrl\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'e33a08718a266e818be1fb489e644a48';
export default node;
