export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'tiles',
        data: {
          menu: {
            title: 'Tiles',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 1
          }
        },
        children: [
          {
            path: 'widgets',
            data: {
              menu: {
                title: 'Widgets',
              }
            }
          },
          {
            path: 'themes',
            data: {
              menu: {
                title: 'Themes'
              }
            }
          }
        ]
      },
      {
        path: 'groups',
        data: {
          menu: {
            title: 'Groups',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 2
          }
        },
        children: [
          {
            path: 'events',
            data: {
              menu: {
                title: 'Events'
              }
            }
          },
          {
            path: 'folders',
            data: {
              menu: {
                title: 'Folders'
              }
            }
          },
          {
            path: 'categories',
            data: {
              menu: {
                title: 'Categories'
              }
            }
          },
          {
            path: 'procedures',
            data: {
              menu: {
                title: 'Procedures'
              }
            }
          }
        ]
      },
      {
        path: 'mobile-app',
        data: {
          menu: {
            title: 'Mobile App',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 3
          }
        },
        children: [
          {
            path: 'pages',
            data: {
              menu: {
                title: 'Pages'
              }
            }
          },
          {
            path: 'settings',
            data: {
              menu: {
                title: 'Settings'
              }
            }
          },
          {
            path: 'user-profile',
            data: {
              menu: {
                title: 'User Profile'
              }
            }
          }
        ]
      },
      {
        path: 'engines',
        data: {
          menu: {
            title: 'Engines',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 4
          }
        },
        children: [
          {
            path: 'notifications',
            data: {
              menu: {
                title: 'Notifications'
              }
            }
          },
          {
            path: 'smart',
            data: {
              menu: {
                title: 'SMART'
              }
            }
          },
          {
            path: 'end-user-roles',
            data: {
              menu: {
                title: 'End User Roles'
              }
            }
          },
          {
            path: 'in-app-membership',
            data: {
              menu: {
                title: 'In-app Membership'
              }
            }
          },
          {
            path: 'health-status-rules',
            data: {
              menu: {
                title: 'Health Status Rules'
              }
            }
          },
          {
            path: 'report-generator',
            data: {
              menu: {
                title: 'Report Generator'
              }
            }
          },
          {
            path: 'profile-builder',
            data: {
              menu: {
                title: 'Profile Builder'
              }
            }
          }
        ]
      },
      {
        path: 'life-stream',
        data: {
          menu: {
            title: 'Life Stream',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 5
          }
        },
        children: [
          {
            path: 'streaming-panel',
            data: {
              menu: {
                title: 'Streaming Panel'
              }
            }
          },
          {
            path: 'stream-url',
            data: {
              menu: {
                title: 'Stream URL'
              }
            }
          },
          {
            path: 'user-access',
            data: {
              menu: {
                title: 'User Access'
              }
            }
          },
          {
            path: 'reports',
            data: {
              menu: {
                title: 'Reports'
              }
            }
          }
        ]
      },
      {
        path: 'analytics',
        data: {
          menu: {
            title: 'Analytics',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 6
          }
        },
        children: [
          {
            path: 'activity-reports',
            data: {
              menu: {
                title: 'Activity Reports'
              }
            }
          },
          {
            path: 'end-users',
            data: {
              menu: {
                title: 'End Users'
              }
            }
          },
          {
            path: 'trend-reports',
            data: {
              menu: {
                title: 'Trend Reports'
              }
            }
          }
        ]
      },
      {
        path: 'master-controls',
        data: {
          menu: {
            title: 'Master Controls',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 7
          }
        },
        children: [
          {
            path: 'event-triggers',
            data: {
              menu: {
                title: 'Event Triggers'
              }
            }
          },
          {
            path: 'photos',
            data: {
              menu: {
                title: 'Photos'
              }
            }
          },
          {
            path: 'videos',
            data: {
              menu: {
                title: 'Videos'
              }
            }
          },
          {
            path: 'push-notifications',
            data: {
              menu: {
                title: 'Push Notifications'
              }
            }
          }
        ]
      },
      {
        path: 'admin',
        data: {
          menu: {
            title: 'Admin',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 8
          }
        },
        children: [
          {
            path: 'studio-users',
            data: {
              menu: {
                title: 'Studio Users'
              }
            }
          },
          {
            path: 'organizations',
            data: {
              menu: {
                title: 'Organizations'
              }
            }
          },
          {
            path: 'packages',
            data: {
              menu: {
                title: 'Packages'
              }
            }
          },
          {
            path: 'procedure-mapping',
            data: {
              menu: {
                title: 'Procedure Mapping'
              }
            }
          },
          {
            path: 'auth-and-security',
            data: {
              menu: {
                title: 'Auth and Security'
              }
            }
          },
          {
            path: 'studio-role-definitions',
            data: {
              menu: {
                title: 'Studio Role Definitions'
              }
            }
          }
        ]
      },
      {
        path: 'tools',
        data: {
          menu: {
            title: 'Tools',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 9
          }
        },
        children: [
          {
            path: 'help',
            data: {
              menu: {
                title: 'Help'
              }
            }
          },
          {
            path: 'background-generator',
            data: {
              menu: {
                title: 'Background Generator'
              }
            }
          },
          {
            path: 'email-support',
            data: {
              menu: {
                title: 'Email Support'
              }
            }
          },
          {
            path: 'how-to-video-help',
            data: {
              menu: {
                title: 'How-To Video Help'
              }
            }
          }
        ]
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'Editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'CKEditor',
              }
            }
          }
        ]
      },
      //{
      //  path: 'components',
      //  data: {
      //    menu: {
      //      title: 'Components',
      //      icon: 'ion-gear-a',
      //      selected: false,
      //      expanded: false,
      //      order: 250,
      //    }
      //  },
      //  children: [
      //    {
      //      path: 'treeview',
      //      data: {
      //        menu: {
      //          title: 'Tree View',
      //        }
      //      }
      //    }
      //  ]
      //},
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'UI Features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'Modals',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Form Elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'Smart Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'Line Maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Menu Level 1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'External Link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
