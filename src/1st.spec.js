System.register(['./../app/scripts/pipes/status'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var status_1;
    return {
        setters:[
            function (status_1_1) {
                status_1 = status_1_1;
            }],
        execute: function() {
            /*describe('1st tests', () => {
             it('true is true', () => expect(true).toEqual(true));
             it('null is not the same thing as undefined',() => expect(null).not.toEqual(undefined));*/
            describe('StatusPipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new status_1.statusPipe();
                });
                it('transforms "4" to "Completed"', function () {
                    expect(pipe.transform('4')).toEqual('Completed');
                });
                it('transforms "0" to "Failed"', function () {
                    expect(pipe.transform('0')).toEqual('Failed');
                });
                it('transforms "2" to "In Progress"', function () {
                    expect(pipe.transform('2')).toEqual('In Progress');
                });
                //});
            });
        }
    }
});
//});
//# sourceMappingURL=1st.spec.js.map