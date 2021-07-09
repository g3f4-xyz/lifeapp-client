/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CleanApplicationInput = {
    readonly clientMutationId?: string | null;
    readonly ownerId?: string | null;
};
export type useCleanApplicationMutationVariables = {
    readonly input: CleanApplicationInput;
};
export type useCleanApplicationMutationResponse = {
    readonly cleanApplication: {
        readonly clientMutationId: string | null;
        readonly navigationUrl: string | null;
    };
};
export type useCleanApplicationMutation = {
    readonly response: useCleanApplicationMutationResponse;
    readonly variables: useCleanApplicationMutationVariables;
};



/*
mutation useCleanApplicationMutation(
  $input: CleanApplicationInput!
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
            "type": "CleanApplicationInput!",
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
                    "variableName": "input"
                }
            ],
            "concreteType": "CleanApplicationOutput",
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
            "name": "useCleanApplicationMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "useCleanApplicationMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "useCleanApplicationMutation",
            "id": null,
            "text": "mutation useCleanApplicationMutation(\n  $input: CleanApplicationInput!\n) {\n  cleanApplication(input: $input) {\n    clientMutationId\n    navigationUrl\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'b43543e3b946f4b01322643fc7a6367d';
export default node;
