import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services';

@Component({
  selector: 'my-app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  host: {
    class: 'my-app-category'
  }
})
export class CategoryComponent implements OnInit {
  public products: any;

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) { }

  public ngOnInit(): void {
    let categoryId = this.route.snapshot.params['id'];

    this.products = this.categoriesService.getCategory(parseInt(categoryId));
  }
};