/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type deleteSubscriptionMutationInput = {
    readonly subscriptionId: string;
    readonly clientMutationId?: string | null;
};
export type deleteSubscriptionMutationVariables = {
    readonly input: deleteSubscriptionMutationInput;
};
export type deleteSubscriptionMutationResponse = {
    readonly deleteSubscription: ({
        readonly clientMutationId: string | null;
        readonly subscriptionId: string;
    }) | null;
};
export type deleteSubscriptionMutation = {
    readonly response: deleteSubscriptionMutationResponse;
    readonly variables: deleteSubscriptionMutationVariables;
};



/*
mutation deleteSubscriptionMutation(
  $input: deleteSubscriptionMutationInput!
) {
  deleteSubscription(input: $input) {
    clientMutationId
    subscriptionId
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "deleteSubscriptionMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "deleteSubscription",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "deleteSubscriptionMutationInput!"
                }
            ],
            "concreteType": "deleteSubscriptionMutationPayload",
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
                    "name": "subscriptionId",
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
            "name": "deleteSubscriptionMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "deleteSubscriptionMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "deleteSubscriptionMutation",
            "id": null,
            "text": "mutation deleteSubscriptionMutation(\n  $input: deleteSubscriptionMutationInput!\n) {\n  deleteSubscription(input: $input) {\n    clientMutationId\n    subscriptionId\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'ca443516a1f27f5b4f31e01f78920675';
export default node;
