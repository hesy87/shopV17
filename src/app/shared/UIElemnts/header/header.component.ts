import { Component, OnInit } from '@angular/core';
import { useHttp } from '../../../core/services/http.service';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [useHttp],
})

//todo : dump component
export class HeaderComponent implements OnInit {
  category = [];
  url = 'products/categories';

  constructor(private http: useHttp, private router: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  //todo : service seprate
  fetchData() {
    this.http.getData(this.url).subscribe((res: any) => (this.category = res));
  }

  navigate(category: string) {
    this.router.navigate([`/${category}`]);
  }
}
