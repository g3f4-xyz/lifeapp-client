/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type NestedFieldFragment$ref = any;
export type NestedFieldFragmentMeta$ref = any;
export type NestedFieldFragmentMeta = {
    readonly ownMeta: {
        readonly " $fragmentRefs": NestedFieldFragment$ref;
    } | null;
    readonly childrenMeta: ReadonlyArray<{
        readonly " $fragmentRefs": NestedFieldFragment$ref;
    }> | null;
    readonly " $refType": NestedFieldFragmentMeta$ref;
};



const node: ReaderFragment = (function () {
    var v0 = [
        ({
            "kind": "FragmentSpread",
            "name": "NestedFieldFragment",
            "args": null
        } as any)
    ];
    return {
        "kind": "Fragment",
        "name": "NestedFieldFragmentMeta",
        "type": "NestedFieldMeta",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "ownMeta",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": (v0 /*: any*/)
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "childrenMeta",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": true,
                "selections": (v0 /*: any*/)
            }
        ]
    } as any;
})();
(node as any).hash = '4002006acf12f624410d56f763547dab';
export default node;
