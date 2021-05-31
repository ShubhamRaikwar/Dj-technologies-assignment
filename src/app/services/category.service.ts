import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private token: string =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2MGE0ZmVmZGI0NWUwOWZhZGUxZjA1NjMiLCJ1c2VyVHlwZSI6ImFkbWluIiwibXVsdGlMb2dpbiI6InRydWUiLCJBbGxvd2VkTWF4IjoiNSIsImltbWVkaWF0ZVJldm9rZSI6ImZhbHNlIiwibWV0YURhdGEiOnt9LCJhY2Nlc3NUVEwiOiI0OGgiLCJyZWZyZXNoVFRMIjoiMTgwaCJ9.geoAtnWIjJ_A-MqIkXtfYDlnWA7JtIwZAvlBYR2qKhQ';

  constructor(private http: HttpClient) {}

  getMainCategoryListAPI() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token,
    });
    return this.http.get(
      'https://admin.mjgold.in/customer/MainCategoryListAPI',
      {
        headers: headers,
      }
    );
  }
  getCategoryById(id: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token,
    });
    return this.http.post(
      'https://admin.mjgold.in/customer/ProductByCategoryAPI',
      {
        id: id,
      },
      {
        headers: headers,
      }
    );
  }
}
