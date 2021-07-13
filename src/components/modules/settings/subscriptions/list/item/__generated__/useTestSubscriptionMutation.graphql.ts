/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TestSubscriptionInput = {
    clientMutationId?: string | null;
    subscriptionId: string;
};
export type useTestSubscriptionMutationVariables = {
    input: TestSubscriptionInput;
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
            "concreteType": "TestSubscriptionOutput",
            "kind": "LinkedField",
            "name": "testSubscription",
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
                    "name": "statusCode",
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
            "name": "useTestSubscriptionMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "useTestSubscriptionMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "0745e7b9a47e5b2a029d5bc7fad8f295",
            "id": null,
            "metadata": {},
            "name": "useTestSubscriptionMutation",
            "operationKind": "mutation",
            "text": "mutation useTestSubscriptionMutation(\n  $input: TestSubscriptionInput!\n) {\n  testSubscription(input: $input) {\n    clientMutationId\n    statusCode\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '71dd2c8dc2037e1bd5539ddf59237101';
export default node;
