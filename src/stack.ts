import type { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'

export interface IP6Props {
}

export class P6Stack extends cdk.Resource {
  constructor(scope: Construct, id: string, _props: IP6Props) {
    super(scope, id)
  }
}
