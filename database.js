// const data = {
//   person: [],
//   company: [
//     name,
//     birthday,
//     cpf,
//     street,
//     number,
//     complement,
//     zipcode,
//     district,
//     city,
//     state,
//     email,
//     phone
//   ]
// };

const data = {
  person: [],
  company: []
};

module.exports = {
  contacts: {
    //lista só informações de pessoas fisicas
    listPerson: () => {
      return data.person;
    },

    //lista informações de pessoas juridicas
    listCompany: () => {
      return data.company;
    },

    //junta informações de pessoas fisicas e juridicas
    //e apresenta em ordem alfabética
    listAllContacts: () => {
      var allContacts = {};
      allContacts = data.person.concat(data.company);
      return allContacts.sort(function(a, b) {
        if (a.name > b.name) {
          return 1;
        }
      });
    },

    //adiciona pessoa fisica
    addPerson: person => {
      person.id = data.person.length;
      data.person.push(person);
    },

    //adiciona pessoa juridica
    addCompany: company => {
      company.id = data.company.length;
      data.company.push(company);
    },

    //atualiza os dados de pessoa fisica
    setPerson: (index, person) => {
      data.person[index] = person;
    },

    //atualiza os dados de pessoa juridica
    setCompany: (index, company) => {
      data.company[index] = company;
    },

    //TO DO
    deletePerson: index => {
      data.person.splice(index, 1);
    },

    //TO DO
    deleteCompany: index => {
      data.company.splice(index, 1);
    }
  }
};
