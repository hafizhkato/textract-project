import { defineStorage,defineFunction } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'UserStorage',
  access: (allow) => ({
    'private-images/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'image-documents/*': [
      allow.authenticated.to(['read','write', 'delete']),
      allow.guest.to(['read'])
    ],
}),
triggers: {
  onUpload: defineFunction({
    entry: './handler.ts',
  }),
},
});