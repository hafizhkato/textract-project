import { defineStorage } from '@aws-amplify/backend';
import { textract } from '../functions/textract/resource';

export const storage = defineStorage({
  name: 'UserStorages',
  triggers: {
    onUpload: textract, // Use the textract function as the trigger
  },
  access: (allow) => ({
    'private-images/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete']),
      allow.resource(textract).to(['read', 'write', 'delete'])
    ],
    'image-documents/*': [
      allow.authenticated.to(['read','write', 'delete']),
      allow.guest.to(['read'])
    ],

}),
});