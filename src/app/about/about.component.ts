import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users = ['bob', 'susan'];

  currentUserID = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCycleAbout() {
    if (this.currentUserID < this.users.length -1) {
      this.currentUserID++;
    }
    else if (this.currentUserID >= this.users.length -1) {
      this.currentUserID = 0;
    }

    this.router.navigate([this.users[this.currentUserID]], { relativeTo: this.route })
  }
}
