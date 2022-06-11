import { Component, OnInit } from '@angular/core';
import { DynamicObject } from '../interfaces/DynamicObject';
import constants from '../state/constants.json';
import '../../styles.scss';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  jobs: string[] = [];
  jobsDetails: string[] = constants['work-details'];
  details: DynamicObject = constants['work-experience'];
  container: DynamicObject[] = [];

  constructor() {}

  ngOnInit(): void {
    this.jobs = this.details['jobs'];
    this.cleanContainer();
    for (let i = 0, iLen = this.jobs.length; i < iLen; i++) {
      this.container.push(this.details[this.jobs[i]]);
    }
  }

  cleanContainer = () => {
    this.container = [];
  };
}
