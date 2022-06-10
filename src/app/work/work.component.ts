import { Component, OnInit } from '@angular/core';
import { DynamicObject } from '../interfaces/DynamicObject';
import '../../styles.scss';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  container: DynamicObject[] = [];
  constructor() {}

  ngOnInit(): void {}
}
