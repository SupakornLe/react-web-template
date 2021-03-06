import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'Form Page', icon: <Web/>, link: '/form' },
    { text: 'Table Page', icon: <Web/>, link: '/table' },
    { text: 'Admin Role Main', icon: <GridOn />, link: '/rolemain'},
    { text: 'User Main', icon: <GridOn />, link: '/usermain'},
    { text: 'Type Item Product Main', icon: <GridOn />, link: '/typeitemproductmain'},
    { text: 'Notifications Main', icon: <GridOn />, link: 'notificationsmain'},
    { text: 'Asset Main', icon: <GridOn />, link: 'assetmain'},
    { text: 'Contract Main', icon: <GridOn />, link: 'contractmain'},
    { text: 'Contact Main', icon: <GridOn />, link: 'contactmain'},
    { text: 'Holiday Main', icon: <GridOn />, link: 'holidaymain'},
    { text: 'Month Main', icon: <GridOn />, link: 'monthmain'},
    { text: 'Taxi Main', icon: <GridOn />, link: 'taximain'},
    { text: 'Approve Task None Sr', icon: <Web />, link: '/approvetasknonesr'},
    { text: 'SLA Form', icon: <Web />, link: '/slaform'},
    { text: 'SLA Team Form', icon: <Web />, link: '/slateamform'},
    { text: 'SLA Team Support Form', icon: <Web />, link: '/slateamsupportform'},
    { text: 'Sla Period Form', icon: <Web />, link: '/slaperiodform'},
    { text: 'Sla Table Page', icon: <Web />, link: '/slatable'},
    { text: 'Team Sla', icon: <Web />, link: '/teamsla'},
    { text: 'Team Sla Edit Team', icon: <Web />, link: '/teamslaeditteam'},
    { text: 'Team Sla Add Member', icon: <Web />, link: '/teamslaaddmember'},
    { text: 'Team Sla Member List', icon: <Web />, link: '/teamslamemberlist'},
    { text: 'Team Sla User List', icon: <Web />, link: '/teamslauserlist'},
    { text: 'Leave Table', icon: <Web />, link: '/leavetable'},
    { text: 'History Leave Table', icon: <Web />, link: '/historyleavetable'},
    { text: 'Profile Change Password', icon: <Web />, link: '/profilechangepassword'},
    { text: 'Profile Change Password', icon: <Web />, link: '/profilesetpasswordremedy'},
    { text: 'Profile Picture', icon: <Web />, link: '/profilepicture'},
    { text: 'Profile Signature', icon: <Web />, link: '/profilesignature'},
    { text: 'BarChart V', icon: <Web />, link: '/BarChartV'}



  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
