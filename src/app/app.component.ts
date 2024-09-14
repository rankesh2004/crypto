import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  httpClient = inject(HttpClient)
  cryptoData:any

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData():void{
    this.httpClient.get("https://apis.ccbp.in/crypto-currency-converter").subscribe((data)=>{
      console.log(data)
      this.cryptoData = data
    })
  }
}   
