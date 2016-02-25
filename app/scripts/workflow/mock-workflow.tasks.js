System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WORKFLOWS;
    return {
        setters:[],
        execute: function() {
            exports_1("WORKFLOWS", WORKFLOWS = [
                { "task": "Initiate", "failed": "1", "inprogress": "0", "warning": "3" },
                { "task": "Filter", "failed": "3", "inprogress": "0", "warning": "3" },
                { "task": "Validate", "failed": "0", "inprogress": "0", "warning": "3" },
                { "task": "Normalize", "failed": "0", "inprogress": "0", "warning": "3" },
                { "task": "Localize", "failed": "0", "inprogress": "2", "warning": "3" },
                { "task": "Distribute", "failed": "0", "inprogress": "0", "warning": "3" },
                { "task": "Delete Asset", "failed": "6", "inprogress": "0", "warning": "3" },
                { "task": "Delete Asset On Site", "failed": "0", "inprogress": "0", "warning": "3" },
                { "task": "Ingest Contest", "failed": "0", "inprogress": "0", "warning": "3" }
            ]);
        }
    }
});
//# sourceMappingURL=mock-workflow.tasks.js.map