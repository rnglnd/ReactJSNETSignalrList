using Microsoft.AspNet.SignalR;
using ReactTestNetSignalrEditableList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactTestNetSignalrEditableList.Hubs
{
    public class PeopleHub : Hub
    {
        public void GetPeople()
        {
            List<PeopleModel> testData = new List<PeopleModel>
            {
                new PeopleModel
                {
                    Id = 1,
                    Title = "Mr",
                    Name = "Jim"
                },
                new PeopleModel
                {
                    Id = 2,
                    Title = "Mr",
                    Name = "Bob"
                },
                new PeopleModel
                {
                    Id = 3,
                    Title = "Mr",
                    Name = "Bill"
                },
                new PeopleModel
                {
                    Id = 4,
                    Title = "Dr",
                    Name = "Ben"
                },
                new PeopleModel
                {
                    Id = 5,
                    Title = "Miss",
                    Name = "Jill"
                }
            };

            Clients.All.setPeople(testData.ToArray());
        }

        public void GetPerson(int id)
        {
            PeopleModel person = new PeopleModel();

            switch (id)
            {
                case 1:
                    person.Id = 1;
                    person.Title = "Mr";
                    person.Name = "Jim";
                    break;
                case 2:
                    person.Id = 2;
                    person.Title = "Mr";
                    person.Name = "Bob";
                    break;
                case 3:
                    person.Id = 3;
                    person.Title = "Mr";
                    person.Name = "Bill";
                    break;
                case 4:
                    person.Id = 4;
                    person.Title = "Mr";
                    person.Name = "Ben";
                    break;
                case 5:
                    person.Id = 5;
                    person.Title = "Miss";
                    person.Name = "Jill";
                    break;
            }

            Clients.All.setPerson(person.Id, person.Title, person.Name, false);
        }
    }
}