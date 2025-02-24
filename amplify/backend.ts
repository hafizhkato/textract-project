import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { textract } from './function/textract/resource';


defineBackend({
  auth,
  data,
  storage,
  textract
  });
