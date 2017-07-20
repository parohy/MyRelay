/**
 * @flow
 * @relayHash 9f75f84241ebbe57d502a6c302963af0
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {|
  +users: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query AppQuery {
  users {
    ...UserFragment_user
  }
}

fragment UserFragment_user on User {
  name
  surname
  age
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "users",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserFragment_user",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "users",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "User",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "surname",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "age",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppQuery {\n  users {\n    ...UserFragment_user\n  }\n}\n\nfragment UserFragment_user on User {\n  name\n  surname\n  age\n}\n"
};

module.exports = batch;
