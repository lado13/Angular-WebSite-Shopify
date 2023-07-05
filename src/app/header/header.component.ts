import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  filteredProducts: any[] = [];
  searchText = '';


  constructor(private apiService: ServiceService) { }

  ngOnInit(): void {

  }

  filterProducts(): void {

    if (this.searchText.trim() === '') {

      this.filteredProducts = [];
      return;

    }

    this.apiService.searchProductsByTitle(this.searchText).subscribe(
      (response: any) => {

        this.filteredProducts = response;
        console.log(response);

      },
      (error: any) => {

        console.error('Error occurred while fetching products:', error);

      }
    );
  }




  showDiv: boolean = true;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {

    const clickedElement = event.target as HTMLElement;
    const isInsideDiv = clickedElement.closest('div');

    if (!isInsideDiv) {

      this.hideDiv();

    }
    else {

      this.showDiv = true;

    }
  }

  hideDiv() {

    this.showDiv = false;

  }


}
