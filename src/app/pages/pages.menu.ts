export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: 'Home',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Statistics',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 2
          }
        }
      },
      {
        path: 'products',
        data: {
          menu: {
            title: 'Food Products',
            icon: 'ion-pizza',
            selected: false,
            expanded: false,
            order: 3
          }
        },
        children: [
          {
            path: 'beef',
            data: {
              menu: {
                title: 'Meat',
              }
            }
          },
          {
            path: 'chicken',
            data: {
              menu: {
                title: 'Chicken',
              }
            }
          },
          {
            path: 'dairy',
            data: {
              menu: {
                title: 'Dairy'
              }
            }
          },
          {
            path: 'fruits-and-vegetables',
            data: {
              menu: {
                title: 'Fruits and Vegetables'
              }
            }
          },
          {
            path: 'grains',
            data: {
              menu: {
                title: 'Grains',
              }
            }
          },
        ]
      }
    ]
  }
];
