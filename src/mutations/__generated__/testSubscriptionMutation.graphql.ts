/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type TestSubscriptionInput = {
    readonly clientMutationId?: string | null;
    readonly subscriptionId: string;
};
export type testSubscriptionMutationVariables = {
    readonly input: TestSubscriptionInput;
};
export type testSubscriptionMutationResponse = {
    readonly testSubscription: {
        readonly clientMutationId: string | null;
        readonly statusCode: string;
    };
};
export type testSubscriptionMutation = {
    readonly response: testSubscriptionMutationResponse;
    readonly variables: testSubscriptionMutationVariables;
};



/*
mutation testSubscriptionMutation(
  $input: TestSubscriptionInput!
) {
  testSubscription(input: $input) {
    clientMutationId
    statusCode
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "TestSubscriptionInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "testSubscription",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "TestSubscriptionOutput",
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
                    "name": "statusCode",
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
            "name": "testSubscriptionMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "testSubscriptionMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "testSubscriptionMutation",
            "id": null,
            "text": "mutation testSubscriptionMutation(\n  $input: TestSubscriptionInput!\n) {\n  testSubscription(input: $input) {\n    clientMutationId\n    statusCode\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '95a52a8f85b003d0d4ee9347f3228758';
export default node;
