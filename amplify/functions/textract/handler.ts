import type { S3Event } from 'aws-lambda';
import { Textract } from '@aws-sdk/client-textract';

const textract = new Textract();

export const handler = async (event: S3Event) => {
  // Extract bucket name and object key from the S3 event
  const bucketName = event.Records[0].s3.bucket.name;
  const objectKey = event.Records[0].s3.object.key;

  // Call Textract to process the document
  const params = {
    Document: {
      S3Object: {
        Bucket: bucketName,
        Name: objectKey,
      },
    },
  };

  try {
    const response = await textract.detectDocumentText(params);
    console.log('Textract Response:', response);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error('Error calling Textract:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process document' }),
    };
  }
};