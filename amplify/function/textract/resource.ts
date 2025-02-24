import { defineFunction } from '@aws-amplify/backend';

export const textract = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'textract',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts'
});