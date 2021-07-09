/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type useChoiceFieldFragmentValue$ref = any;
export type useChoiceFieldFragmentValue = {
    readonly id: string | null;
    readonly " $refType": useChoiceFieldFragmentValue$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "useChoiceFieldFragmentValue",
    "type": "ChoiceFieldValue",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '71dcbb150284e3c57fd2c94bd4db8e99';
export default node;
