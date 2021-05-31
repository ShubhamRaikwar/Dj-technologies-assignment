import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  categoryData: any = [];
  categoryId: string = '';
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
    });

    this.getCategoryById(this.categoryId);
  }

  private getCategoryById(id: any) {
    this.categoryService.getCategoryById(id).subscribe(
      (res) => {
        this.categoryData = res;
      },
      (error) => {}
    );
  }
}
