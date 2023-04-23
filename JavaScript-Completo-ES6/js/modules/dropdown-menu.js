import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenu, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenu);

    // Define toutchstart e click como argumento
    // padrão de events casa o usuário não define
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'active';

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona a
  // função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdownmenu
  addDropdownMenuEvent() {
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenu.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
