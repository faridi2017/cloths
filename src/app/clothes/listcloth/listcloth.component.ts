import { Component, OnInit } from '@angular/core';
import { Cloth } from 'src/app/cloth';
import { ClothServiceService } from 'src/app/cloth-service.service';

@Component({
  selector: 'app-listcloth',
  templateUrl: './listcloth.component.html',
  styleUrls: ['./listcloth.component.css']
})
export class ListclothComponent implements OnInit {
clothList: Cloth[];
  constructor(private apiService: ClothServiceService) { }

  ngOnInit(): void {
    this.getCloths();
  }
  getCloths() {
    this.apiService.getClothes()
      .subscribe((data:any) => {
        this.clothList = data;
      });
 
  }
}
