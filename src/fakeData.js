var Identity = require('fake-identity');
const fakePersonCount = 20;

export const persons = [...Array(fakePersonCount)].fill(0)
  .map((__, index) => 
  ({
    fullname: [ Identity.generate().firstName,  Identity.generate().lastName],
    image: "http://i.pravatar.cc/250?" + index,
    positions:  [Identity.generate().department],
    social: [{
       linkedIn: "www.linkedin.com",
       twitter: "www.twitter.com",
       email:  Identity.generate().emailAddress
    }]
}));