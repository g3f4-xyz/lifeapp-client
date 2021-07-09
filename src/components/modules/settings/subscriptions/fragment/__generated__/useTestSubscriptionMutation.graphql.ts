/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type TestSubscriptionInput = {
    readonly clientMutationId?: string | null;
    readonly subscriptionId: string;
};
export type useTestSubscriptionMutationVariables = {
    readonly input: TestSubscriptionInput;
};
export type useTestSubscriptionMutationResponse = {
    readonly testSubscription: {
        readonly clientMutationId: string | null;
        readonly statusCode: string;
    };
};
export type useTestSubscriptionMutation = {
    readonly response: useTestSubscriptionMutationResponse;
    readonly variables: useTestSubscriptionMutationVariables;
};



/*
mutation useTestSubscriptionMutation(
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
            "name": "useTestSubscriptionMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "useTestSubscriptionMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "useTestSubscriptionMutation",
            "id": null,
            "text": "mutation useTestSubscriptionMutation(\n  $input: TestSubscriptionInput!\n) {\n  testSubscription(input: $input) {\n    clientMutationId\n    statusCode\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '71dd2c8dc2037e1bd5539ddf59237101';
export default node;
