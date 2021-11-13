class Checkout {
  _state = {
    mode: 'off'
  }
  get state() {
    return this._state
  }
  set state(newState) {
    this._state = newState
    this.template = `<h2>${newState.mode}</h2>`

    document.querySelector('#checkout').innerHTML = this.template
  }

  template

  constructor() {
    console.log(this.state)
    
    document.querySelector('#checkout').innerHTML = this.template

    setTimeout(() => {
      this.state = {
        mode: 'on'
      }
      
      console.log(this)
    }, 2300)
  }
}