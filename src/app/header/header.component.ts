import { Component } from '@angular/core';
import { ServiceService } from '../serviceFolder/service.service';
import { HostListener } from '@angular/core';
import { DarkModeService } from '../serviceFolder/dark-mode.service';
import { CartService } from '../serviceFolder/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  filteredProducts: any[] = [];
  searchText = '';
  totalQuantity: number = 0;



  constructor(private apiService: ServiceService, private darkModeService: DarkModeService,
    private cart: CartService
    
    ) { }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }



  ngOnInit(): void {
    this.totalQuantity = this.cart.getTotalQuantity();

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
