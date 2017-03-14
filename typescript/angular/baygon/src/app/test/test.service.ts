import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  getCursos(){

    return ['Python','GO','Angularjs2'];
  }

}
