export const getRandomPrice = () => Math.random() * 100

export const priceString = number => 'R$ ' + number.toFixed(2).replace('.', ',')

export const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

export const localStorage = {
  getItem: name => JSON.parse(window.localStorage.getItem(name)),
  setItem: (name, value) => window.localStorage.setItem(name, JSON.stringify(value)),
}
