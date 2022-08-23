import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'accordion-component';
  colors: {
    titleBackgroundColor: string;
    detailsBackgroundColor: string;
    titleColor: string;
    detailsColor: string;
    titleBackgroundColorHover: string;
  }[] = [];
  selectedColorId = 1;
  items: { title: string; description: string }[] = [];

  constructor() {
    this.items = [
      {
        title: 'Header 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        title: 'Header 2',
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.',
      },
      {
        title: 'Header 3',
        description:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
      },
    ];
    this.colors = [
      {
        titleBackgroundColor: 'rgb(255, 255, 255)',
        titleBackgroundColorHover: 'rgb(237, 237, 237)',
        titleColor: 'rgb(10, 10, 10)',
        detailsBackgroundColor: 'rgb(237, 237, 237)',
        detailsColor: 'rgb(10, 10, 10)',
      },
      {
        titleBackgroundColor: '#191919',
        titleBackgroundColorHover: '#353535',
        titleColor: '#EFEFEF',
        detailsBackgroundColor: '#191919',
        detailsColor: '#EFEFEF',
      },
      {
        titleBackgroundColor: '#4781EE',
        titleBackgroundColorHover: '#6B9CF8',
        titleColor: '#F2F2F2',
        detailsBackgroundColor: '#E8C68E',
        detailsColor: '#202020',
      },
      {
        titleBackgroundColor: '#E73232',
        titleBackgroundColorHover: '#F44F4F',
        titleColor: '#F4F1F1',
        detailsBackgroundColor: '#1B1B1B',
        detailsColor: '#F4F1F1',
      },
      {
        titleBackgroundColor: '#AE3AB1',
        titleBackgroundColorHover: '#DC59DF',
        titleColor: '#F4F1F1',
        detailsBackgroundColor: '#1B1B1B',
        detailsColor: '#F4F1F1',
      },
    ];
  }
  addItem() {
    this.items.push({
      title: `Header ${this.items.length + 1}`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex tellus, ultrices id nibh tincidunt, dictum condimentum leo. Donec fringilla vehicula enim sed scelerisque. Nunc eget luctus lacus, ut rutrum ipsum. Nulla feugiat, lacus non ultrices semper, risus elit aliquam felis, at maximus dui lorem sit amet elit. Vivamus accumsan, nunc ut eleifend faucibus, justo enim volutpat nunc, nec hendrerit massa nisi accumsan mauris. Cras ut dui ut odio sodales condimentum. Etiam semper, eros eu aliquet pharetra, sem elit gravida sapien, sit amet aliquet quam tortor sed tellus. Suspendisse id egestas nisl.',
    });
  }
}
