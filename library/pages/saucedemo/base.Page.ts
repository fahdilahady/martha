type tSideMenu = 'All Items' |'About' |'Logout' |'Reset App State';
const menuMappping: Record<tSideMenu, string> = {
  'All Items': 'inventory_sidebar_link',
  'Reset App State': 'reset_sidebar_link',
  About: 'about_sidebar_link',
  Logout: 'logout_sidebar_link',
};
export abstract class BasePage {
  hamburgerButton = () => cy.contains('.bm-burger-button button', 'Open Menu');

  sideMenu = (menu: tSideMenu) => cy.get(`.bm-item-list a[id=${menuMappping[menu]}]`);
}
