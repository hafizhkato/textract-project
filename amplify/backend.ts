import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { storage } from './storage/resource';
import { textract } from './functions/textract/resource';





defineBackend({
  auth,
  storage,
  textract,
  });
