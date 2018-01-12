import webapp2
from webapp2_extras import routes
import jinja2
import os
import time
import datetime

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader('frontend'),
    autoescape=True, trim_blocks=True,
    extensions=['jinja2.ext.with_'])
jinja_env.globals['uri_for'] = webapp2.uri_for

class BaseHandler(webapp2.RequestHandler):
    def __init__(self, request=None, response=None):
        self.initialize(request, response)

        self.tv = {}
        self.tv["version"] = os.environ['CURRENT_VERSION_ID']
        self.now = datetime.datetime.now()

    def render(self, template_path=None, force=False):
        self.response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        self.response.headers['Pragma'] = 'no-cache'
        self.response.headers['Expires'] = '0'
        self.response.headers['X-Frame-Options'] = 'DENY'

        self.tv['BASE_URL'] = self.request.application_url
        self.tv['current_timestamp'] = time.mktime(self.now.timetuple())
        self.tv['CURRENT_URI'] = self.request.uri
        self.tv['PH_DATETIME'] = datetime.datetime.now() + datetime.timedelta(hours=8)

        template = jinja_env.get_template(template_path)
        self.response.out.write(template.render(self.tv))

class MainPage(BaseHandler):
    def get(self):
        self.render("index.html")

app = webapp2.WSGIApplication([
    routes.DomainRoute(
        r'<:localhost|richardandchristy-187402\.appspot\.com|richardandchristy\.com|www\.richardandchristy\.com>', [
            webapp2.Route(
                '/',
                handler=MainPage
            ),
        ]
    )
], debug=True)
