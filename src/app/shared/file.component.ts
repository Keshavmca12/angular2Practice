export class FileComponent {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public toDate:string,
    public fromDate:string,
    public roles?: string  /*? symbol used for optional parameter*/
  ) {  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
