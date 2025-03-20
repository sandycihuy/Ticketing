import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './pages/home/home.page.html',
  styleUrls: ['./pages/home/home.page.scss'],
})
export class HomePage implements OnInit {
  tickets: any[] = [];
  constructor(private http: HttpClient, private navCtrl: NavController) { }
  ngOnInit() {
    this.http.get<any[]>('http://localhost:8100/tickets').subscribe(data => {
      this.tickets = data;
    })
  }

  handleSubmitDetail(ticket:any){
   this.navCtrl.navigateForward(`/detail/${ticket.id}`);
  }
}
