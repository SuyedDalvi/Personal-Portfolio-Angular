import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  public primary_role = `Software Developer`
  public secondary_role = `Business Analyst`

  ngOnInit(): void {
  }

}
