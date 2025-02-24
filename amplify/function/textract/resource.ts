import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as iam from "aws-cdk-lib/aws-iam";

export class TextractFunction extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const textractFunction = new lambda.Function(this, "TextractHandler", {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: "handler.main",
      code: lambda.Code.fromAsset("amplify/function/textract"),
      timeout: cdk.Duration.seconds(1500),
      memorySize: 512,
    });

    // Grant Textract permissions
    textractFunction.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ["textract:AnalyzeDocument", "textract:DetectDocumentText"],
        resources: ["*"], // Change to specific resources if needed
      })
    );
  }
}
