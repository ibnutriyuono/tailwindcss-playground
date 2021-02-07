export default (option) => {
  let url = 'https://e-commerce-server-ibnu.herokuapp.com'
  if (option) {
    url += option
  }
  return fetch(url)
}