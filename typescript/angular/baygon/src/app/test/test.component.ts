import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  nomePortal:string;
  cursos: string[];
  constructor(private testService:TestService) {
  this.nomePortal="http://google.com";
//  var servico = new TestService();
  this.cursos = this.testService.getCursos();
}

  ngOnInit() {
  }

}
