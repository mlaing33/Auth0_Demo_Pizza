import { Component } from '@angular/core';
import { AuthClientConfig } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api.service';
import { NewOrdersModel } from 'src/app/models/new-oders-model';

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styleUrls: ['./external-api.component.css'],
})
export class ExternalApiComponent {
  responseJson: string;
  audience = this.configFactory.get()?.audience;
  hasApiError = false;
  model = new NewOrdersModel();
  orders: Array<any>;
  get_error: string;
  add_error: string;

  constructor(
    private api: ApiService,
    private configFactory: AuthClientConfig
  ) { }

  pingApi() {
    this.api.ping$().subscribe({
      next: (res) => {
        this.hasApiError = false;
        this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => this.hasApiError = true,
    });
  }

  getOrders() {
    this.api.getAllOrders$().subscribe(
      data => this.orders = data,
      error => this.get_error = error.statusText
    );
  }

  addOrders() {
    this.api.addOrders$(this.model).subscribe(
      data => this.orders = data,
      error => this.add_error = error.statusText
    );
  }
}
