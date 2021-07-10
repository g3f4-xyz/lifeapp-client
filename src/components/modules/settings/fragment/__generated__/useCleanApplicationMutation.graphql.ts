/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CleanApplicationInput = {
    clientMutationId?: string | null;
    ownerId?: string | null;
};
export type useCleanApplicationMutationVariables = {
    input: CleanApplicationInput;
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
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "input"
        } as any
    ], v1 = [
        {
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "CleanApplicationOutput",
            "kind": "LinkedField",
            "name": "cleanApplication",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "clientMutationId",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "navigationUrl",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "useCleanApplicationMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useCleanApplicationMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "579e0a86ffd5da35b286769ebb4e51df",
            "id": null,
            "metadata": {},
            "name": "useCleanApplicationMutation",
            "operationKind": "mutation",
            "text": "mutation useCleanApplicationMutation(\n  $input: CleanApplicationInput!\n) {\n  cleanApplication(input: $input) {\n    clientMutationId\n    navigationUrl\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'b43543e3b946f4b01322643fc7a6367d';
export default node;
