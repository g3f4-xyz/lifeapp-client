/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type testSubscriptionMutationInput = {
    readonly subscriptionId?: string | null;
    readonly clientMutationId?: string | null;
};
export type testSubscriptionMutationVariables = {
    readonly input: testSubscriptionMutationInput;
};
export type testSubscriptionMutationResponse = {
    readonly testSubscription: {
        readonly clientMutationId: string | null;
        readonly statusCode: string;
    } | null;
};
export type testSubscriptionMutation = {
    readonly response: testSubscriptionMutationResponse;
    readonly variables: testSubscriptionMutationVariables;
};



/*
mutation testSubscriptionMutation(
  $input: testSubscriptionMutationInput!
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
            "type": "testSubscriptionMutationInput!",
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
            "concreteType": "testSubscriptionMutationPayload",
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
            "type": "MutationType",
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
            "text": "mutation testSubscriptionMutation(\n  $input: testSubscriptionMutationInput!\n) {\n  testSubscription(input: $input) {\n    clientMutationId\n    statusCode\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '2441060bcf9cb7295eebd9ec4edc0e9f';
export default node;
