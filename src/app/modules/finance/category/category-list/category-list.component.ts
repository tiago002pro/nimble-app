import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList
  type!: any
  showModalCategoty: boolean = false

  constructor(
    private categoryService: CategoryService,
  ){ }

  async ngOnInit() {
    this.categoryList = await this.categoryService.getAllCategories().toPromise().then((response) => response);
    console.log("cate", this.categoryList);
    this.chart2()
    
  }

  showSubCategoies(category) {
    console.log("category", category);
    
  }

  openModalCategory(value?) {
    this.showModalCategoty = value
    // this.getAllcategories()
  }

  chart2() {
    const ctx = document.getElementById('myChart2');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Despesas FIxas', 'Despesas Variveis', 'Investimento'],
        datasets: [{
          label: '# of Votes',
          data: [50, 30, 20,],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
