System.register(['./scripts/workflow/workflow'], function(exports_1) {
    var workflow_1;
    return {
        setters:[
            function (workflow_1_1) {
                workflow_1 = workflow_1_1;
            }],
        execute: function() {
            describe('Workflow', function () {
                it('has task given in the constructor', function () {
                    var workflow = new workflow_1.Workflow('Asset Flow');
                    expect(workflow.task).toEqual('Asset Flow');
                });
                it('has falied given in the constructor', function () {
                    var workflow = new workflow_1.Workflow('', '1');
                    expect(workflow.failed).toEqual('1');
                });
            });
        }
    }
});
//# sourceMappingURL=workflow.spec.js.map