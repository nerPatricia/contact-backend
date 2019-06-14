const data = {
  person: [],
  company: []
};

module.exports = {
  contacts: {
    listPerson: () => {
      return data.person;
    },

    listCompany: () => {
      return data.company;
    },

    listAllContacts: () => {
      var allContacts = {};
      allContacts = data.person.concat(data.company);
      return allContacts.sort(function(a, b) {
        if (a.name > b.name) {
          return 1;
        }
      });
    },

    addPerson: person => {
      person.id = data.person.length;
      data.person.push(person);
    },

    addCompany: company => {
      company.id = data.company.length;
      data.company.push(company);
    },

    setPerson: (id, person) => {
      data.person[id] = person;
    },

    setCompany: (id, company) => {
      data.company[id] = company;
    },

    //TO DO
    deletePerson: id => {
      data.person.splice(id, 1);
    },

    //TO DO
    deleteCompany: id => {
      data.company.splice(id, 1);
    }
  }
};
