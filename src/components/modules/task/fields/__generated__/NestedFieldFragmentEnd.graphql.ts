/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type NestedFieldFragmentSimpleMetasFragment$ref = any;
export type NestedFieldFragmentEnd$ref = any;
export type NestedFieldFragmentEnd = {
    readonly ownMeta: {
        readonly " $fragmentRefs": NestedFieldFragmentSimpleMetasFragment$ref;
    } | null;
    readonly childrenMeta: ReadonlyArray<{
        readonly " $fragmentRefs": NestedFieldFragmentSimpleMetasFragment$ref;
    }> | null;
    readonly " $refType": NestedFieldFragmentEnd$ref;
};



const node: ReaderFragment = (function () {
    var v0 = [
        ({
            "kind": "FragmentSpread",
            "name": "NestedFieldFragmentSimpleMetasFragment",
            "args": null
        } as any)
    ];
    return {
        "kind": "Fragment",
        "name": "NestedFieldFragmentEnd",
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
(node as any).hash = 'f55a658e342254e25a237ab452d914d3';
export default node;
