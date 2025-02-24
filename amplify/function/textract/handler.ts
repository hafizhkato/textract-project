import { TextractClient, AnalyzeDocumentCommand } from "@aws-sdk/client-textract";

const textractClient = new TextractClient({ region: "us-east-1" });

export const main = async (event: any) => {
  try {
    console.log("Event received:", JSON.stringify(event, null, 2));

    if (!event.body) {
      return { statusCode: 400, body: "No input provided" };
    }

    const body = JSON.parse(event.body);
    const { document } = body;

    if (!document) {
      return { statusCode: 400, body: "Document is required" };
    }

    const command = new AnalyzeDocumentCommand({
      Document: { Bytes: Buffer.from(document, "base64") },
      FeatureTypes: ["TABLES", "FORMS"],
    });

    const response = await textractClient.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error("Error processing document:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};
