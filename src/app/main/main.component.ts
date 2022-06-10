import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private HeaderService: HeaderService) {}

  ngOnInit(): void {}

  getTab = () => this.HeaderService.getTab().value;
}
