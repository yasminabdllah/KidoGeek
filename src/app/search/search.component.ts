import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = "";

  @Input()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange() {
    this.searchTextChange.emit(this.searchText)
  }

  setSeachtextValue(inputElement: HTMLInputElement) {
    this.searchText = inputElement.value;
    this.onSearchTextChange();
  }
}
