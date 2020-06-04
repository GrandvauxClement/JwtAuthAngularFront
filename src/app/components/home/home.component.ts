import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Articles} from '../../models/articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Articles[];
  isLoading: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoading = true;
    this.userService.getArticles().subscribe(
      data => {
        this.articles = data['hydra:member'];
        this.isLoading = false;
      },
      err => {
        this.articles = JSON.parse(err.error).message;
      }
    );
  }
}
