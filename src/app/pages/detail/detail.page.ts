import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-detail',
  templateUrl: './pages/detail/detail.page.html',
  styleUrls: ['./pages/detail/detail.page.scss'],
})

export class DetailPage implements OnInit {
  ticket: any[] = [];
  constructor(private http: HttpClient,private route:ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http:localhost:8100/tickets/${id}`).subscribe(data =>
      {
        this.ticket=Array.isArray(data)? data: [data];
      })
  }

}

