import type { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import { P6Stack } from '../src/index'

class VisualizeStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    new P6Stack(this, 'MyP6Stack', {
    })
  }
}

const app = new cdk.App()
new VisualizeStack(app, 'VisualizeStack')
app.synth()
