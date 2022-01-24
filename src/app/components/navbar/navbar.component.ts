import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  langs: string[] = [];

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
    translate.stream('HELLO')
      .subscribe((res: string) => {
        console.log(res);
        //=> 'hello world'
      });
    this.translate.stream('GREETING', {name: 'nicolas'}) .subscribe((res: string) => { console.log(res); });


  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

  

}
