"use strict";
var FileComponent = (function () {
    function FileComponent(id, name, type, toDate, fromDate, roles /*? symbol used for optional parameter*/) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.toDate = toDate;
        this.fromDate = fromDate;
        this.roles = roles; /*? symbol used for optional parameter*/
    }
    return FileComponent;
}());
exports.FileComponent = FileComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=file.component.js.map