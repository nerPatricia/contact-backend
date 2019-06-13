// const data = {
//   person: [
//     {
//       name,
//       birthday,
//       cpf,
//       address: [
//         {
//           street,
//           number,
//           complement,
//           zipcode,
//           district,
//           city,
//           state
//         }
//       ],
//       email,
//       phone
//     }
//   ],
//   company: [
//     {
//       fantasyName,
//       companyName,
//       openDate,
//       cnpj,
//       address: [{ street, number, complement, zipcode, district, city, state }],
//       email,
//       phone
//     }
//   ]
// };

const data = {
  person: [],
  company: []
};

module.exports = {
  contacts: {
    listUser: () => {
      return data.person;
    },

    listCompany: () => {
      return data.company;
    },

    addUser: person => {
      data.person.push(person);
    },

    addCompany: company => {
      data.company.push({ company });
    },

    setUser: (index, person) => {
      data.person[index].name = person.name;
      data.person[index].birthday = person.birthday;
      data.person[index].cpf = person.cpf;
      data.person[index].address.street = person.address.street;
      data.person[index].address.number = person.address.number;
      data.person[index].address.complement = person.address.complement;
      data.person[index].address.zipcode = person.address.zipcode;
      data.person[index].address.district = person.address.district;
      data.person[index].address.city = person.address.city;
      data.person[index].address.state = person.address.state;
      data.person[index].email = person.email;
      data.person[index].phone = person.phone;
    },

    setCompany: (index, company) => {
      data.company[index].fantasyName = company.fantasyName;
      data.company[index].companyName = company.companyName;
      data.company[index].openDate = company.openDate;
      data.company[index].cnpj = company.cnpj;
      data.company[index].address.street = company.address.street;
      data.company[index].address.number = company.address.number;
      data.company[index].address.complement = company.address.complement;
      data.company[index].address.zipcode = company.address.zipcode;
      data.company[index].address.district = company.address.district;
      data.company[index].address.city = company.address.city;
      data.company[index].address.state = company.address.state;
      data.company[index].email = company.email;
      data.company[index].phone = company.phone;
    },

    deleteUser: index => {
      data.person.splice(index, 1);
    },

    deleteCompany: index => {
      data.company.splice(index, 1);
    }
  }
};
