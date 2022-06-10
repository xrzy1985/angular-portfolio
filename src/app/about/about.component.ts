import { Component, OnInit } from '@angular/core';
import constants from '../state/constants.json';
import { DynamicObject } from '../state/DynamicObject';
import '../../styles.scss';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  topics: string[] = [];
  details: DynamicObject = constants.about;
  container: DynamicObject[] = [];

  constructor() {}

  ngOnInit(): void {
    this.topics = this.details['About_Topics'];
    this.cleanContainer();
    for (let i = 0, iLen = this.topics.length; i < iLen; i++) {
      this.container.push(this.details[this.topics[i]]);
    }
    console.log(this.container);
  }

  cleanContainer = () => {
    this.container = [];
  };
}
