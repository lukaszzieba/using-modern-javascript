var _ = require('lodash');

var users = [
    {id: 1, name: "Lukasz", roles: ['admin'] },
    {id: 2, name: "Foo", roles: ['registred', "mod"] },
    {id: 3, name: "Bar ", roles: ['registred'] },
    {id: 4, name: "Buzz", roles: ['admin', 'mod'] }
]


var admins = _(users)
    .filter(u => _.includes(u.roles, 'admin'))
    .map('name')
    .value();

console.log(admins);