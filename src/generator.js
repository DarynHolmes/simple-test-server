const config = require('../config.json')
const faker = require('faker')

module.exports = () => {
  const data = { items: [] }
  // Create 1000 users
  for (let i = 1; i <= config.numberOfRows; i++) {
    console.log(`generating row ${i} of ${config.numberOfRows}`);
    // data.products.push({ id: i, name: `user${i}` })
    const address = faker.address
    const commerce = faker.commerce
    const company = faker.company
    const date = faker.date
    const internet = faker.internet
    const name = faker.name
    const system = faker.system

    data.items.push({
      "id": faker.system,
      "country": address.country(),
      "country": address.country(),
      "city": address.city(),
      "department": commerce.department(),
      "productName": commerce.productName(),
      "price": commerce.price(),
      "productAdjective": commerce.productAdjective(),
      "companyName": company.companyName(),
      "catchPhrase": company.catchPhrase(),
      "bs": company.bs(),
      "bsAdjective": company.bsAdjective(),
      "bsBuzz": company.bsBuzz(),
      "bsNoun": company.bsNoun(),
      "past": date.past(),
      "recent": date.recent(),
      "month": date.month(),
      "weekday": date.weekday(),
      "avatar": internet.avatar(),
      "email": internet.email(),
      "userName": internet.userName(),
      "ip": internet.ip(),
      "mac": internet.mac(),
      "firstName": name.firstName(),
      "lastName": name.lastName(),
      "jobTitle": name.jobTitle(),
      "title": name.title(),
      "fileName": system.fileName(),
      "commonFileName": system.commonFileName(),
      "mimeType": system.mimeType(),
      "semver": system.semver(),

      "country2": address.country(),
      "country2": address.country(),
      "city2": address.city(),
      "department2": commerce.department(),
      "productName2": commerce.productName(),
      "price2": commerce.price(),
      "productAdjective2": commerce.productAdjective(),
      "companyName2": company.companyName(),
      "catchPhrase2": company.catchPhrase(),
      "bs2": company.bs(),
      "bsAdjective2": company.bsAdjective(),
      "bsBuzz2": company.bsBuzz(),
      "bsNoun2": company.bsNoun(),
      "past2": date.past(),
      "recent2": date.recent(),
      "month2": date.month(),
      "weekday2": date.weekday(),
      "avatar2": internet.avatar(),
      "email2": internet.email(),
      "userName2": internet.userName(),
      "ip2": internet.ip(),
      "mac2": internet.mac(),
      "firstName2": name.firstName(),
      "lastName2": name.lastName(),
      "jobTitle2": name.jobTitle(),
      "title2": name.title(),
      "fileName2": system.fileName(),
      "commonFileName2": system.commonFileName(),
      "mimeType2": system.mimeType(),
      "semver2": system.semver(),

      "country3": address.country(),
      "country3": address.country(),
      "city3": address.city(),
      "department3": commerce.department(),
      "productName3": commerce.productName(),
      "price3": commerce.price(),
      "productAdjective3": commerce.productAdjective(),
      "companyName3": company.companyName(),
      "catchPhrase3": company.catchPhrase(),
      "bs3": company.bs(),
      "bsAdjective3": company.bsAdjective(),
      "bsBuzz3": company.bsBuzz(),
      "bsNoun3": company.bsNoun(),
      "past3": date.past(),
      "recent3": date.recent(),
      "month3": date.month(),
      "weekday3": date.weekday(),
      "avatar3": internet.avatar(),
      "email3": internet.email(),
      "userName3": internet.userName(),
      "ip3": internet.ip(),
      "mac3": internet.mac(),
      "firstName3": name.firstName(),
      "lastName3": name.lastName(),
      "jobTitle3": name.jobTitle(),
      "title3": name.title(),
      "fileName3": system.fileName(),
      "commonFileName3": system.commonFileName(),
      "mimeType3": system.mimeType(),
      "semver3": system.semver(),

      "email4": internet.email(),
      "userName4": internet.userName(),
      "ip4": internet.ip(),
      "mac4": internet.mac(),
      "firstName4": name.firstName(),
      "lastName4": name.lastName(),
      "jobTitle4": name.jobTitle(),
      "title4": name.title(),
      "fileName4": system.fileName(),
      "commonFileName4": system.commonFileName(),
      "mimeType4": system.mimeType(),
      "semver4": system.semver(),
    })
  }
  return data
}