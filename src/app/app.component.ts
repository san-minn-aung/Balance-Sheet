import { Component, OnInit } from '@angular/core';
import { TranslateService } from './locale/translate.service';
import { accountCategory, ACCOUNT_CATEGORY_NAMES } from './model/shared';
import { isAsset, sumCost, isCapital, isLiabilities } from './model/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  FixedAssetShowTextbox: boolean;
  accountName: string = "";
  accountCost: number = 0;
  finalAssetBalance: number = 0.0;
  finalCapitalBalance: number = 0.0;
  finalLiabiliteisBalance: number = 0.0;


  ACCOUNT_LIST = <any>[];
  categoryNames: string[];
  showTextBoxes: boolean[];

  constructor(private translate: TranslateService) {
    translate.use('en').then(() => {
      console.log(translate.data);
    });
  }
  ngOnInit() {
    this.FixedAssetShowTextbox = false;

    this.categoryNames = ACCOUNT_CATEGORY_NAMES;

    this.showTextBoxes = Array(ACCOUNT_CATEGORY_NAMES.length).fill(false);
    // temporary
    this.ACCOUNT_LIST = [
      { type: accountCategory.FIXED_ASSET, name: 'Bank', cost: 2000 },
      { type: accountCategory.FIXED_ASSET, name: 'SanMin', cost: 2000 },
      { type: accountCategory.FIXED_ASSET, name: 'Bank', cost: 2000 },
      { type: accountCategory.FIXED_ASSET, name: 'Bank', cost: 2000 },
      { type: accountCategory.CURRENT_ASSET, name: 'Cash', cost: 4000 },
      { type: accountCategory.CAPITAL, name: 'Profit', cost: 3000 },
      { type: accountCategory.LIABILITIES, name: 'Creditor', cost: 5000 },
    ]
    this.updateTotalAsset();
    this.updateTotalCapital();
    this.updateTotalLiabilities();
  }


  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": false,
    "dots": false,
    "infinite": false,
    "centerMode": true,
    "variableWidth": true
  };


  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  // fixedassets =[
  //   {
  //     name: 'Premises',
  //     value : 20000
  //   },
  //   {
  //     name:'Capital',
  //     value: 2000
  //   },
  //   {
  //     name: 'Labilities',
  //     value:3000
  //   },
  // ];
  addAccount(index: number) {
    this.showTextBoxes[index] = true;
  }

  deleteBtn(fixedasset) {
    this.ACCOUNT_LIST = this.ACCOUNT_LIST.filter(t => t.name !== fixedasset.name);
    this.updateTotalAsset();
    this.updateTotalCapital();
    this.updateTotalLiabilities();
    }

  addNewItem(index: number) {
    const item = {
      type: this.categoryNames[index],
      name: this.accountName,
      cost: this.accountCost,
      
    };

    this.ACCOUNT_LIST.push(item);
    this.accountName = "";
    this.accountCost = 0;
    this.showTextBoxes[index]= false;
    this.updateTotalAsset();
    this.updateTotalCapital();
    this.updateTotalLiabilities();

  }
  
  updateTotalAsset(): void {
    this.finalAssetBalance = this.ACCOUNT_LIST.filter(isAsset).reduce(sumCost, 0);
  } 

  updateTotalCapital(){
    this.finalCapitalBalance = this.ACCOUNT_LIST.filter(isCapital).reduce(sumCost, 0);
  }

  updateTotalLiabilities(){
    this.finalLiabiliteisBalance = this.ACCOUNT_LIST.filter(isLiabilities).reduce(sumCost, 0);
  }

  
}
