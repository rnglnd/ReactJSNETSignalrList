using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ReactJSNETSignalrEditableList.Startup))]
namespace ReactJSNETSignalrEditableList
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
