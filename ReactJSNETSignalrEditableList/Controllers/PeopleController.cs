using Microsoft.AspNet.SignalR;
using ReactTestNetSignalrEditableList.Hubs;
using ReactTestNetSignalrEditableList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactTestNetSignalrEditableList.Controllers
{
    public class PeopleController : Controller
    {
        [HttpPost]
        public ActionResult SavePeople(PeopleModel model)
        {
            var context = GlobalHost.ConnectionManager.GetHubContext<PeopleHub>();

            PeopleModel person = new PeopleModel
            {
                Id = model.Id,
                Title = model.Title,
                Name = model.Name
            };

            context.Clients.All.setPerson(person.Id, person.Title, person.Name, false);

            return this.RedirectToAction("Index", "Home");
        }
    }
}