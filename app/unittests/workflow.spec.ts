import {Workflow} from './scripts/workflow/workflow';

describe('Workflow', () => {
  it('has task given in the constructor', () => {
    let workflow = new Workflow('Asset Flow');
    expect(workflow.task).toEqual('Asset Flow');
  });
  it('has falied given in the constructor', () => {
    let workflow = new Workflow('', '1');
    expect(workflow.failed).toEqual('1');
  });
})