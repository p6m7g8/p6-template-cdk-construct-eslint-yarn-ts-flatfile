import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'

import { P6Stack } from '../src'

it('p6cdkstack components', () => {
  // GIVEN
  const app = new cdk.App()
  const stack = new cdk.Stack(app, 'MyStack')

  // WHEN
  new P6Stack(stack, 'p6-stack', {
  })

  // THEN
  const template = Template.fromStack(stack)
  template.resourceCountIs('AWS::Lambda::Function', 0)
})
