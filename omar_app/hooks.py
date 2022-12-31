from . import __version__ as app_version
import frappe

app_name = "omar_app"
app_title = "Omar App"
app_publisher = "Me"
app_description = "An app to practise ERPNexp & Frappe framework"
app_icon = "octicon octicon-file-directory"
app_color = "green"
app_email = "shehada.mk.omar@gmail.com"
app_license = "NYUSIM"

# Includes in <head>
# ------------------
fixtures = frappe.get_list('DocType', filters=[['module', 'in',  'OmarModule'], [
                           'name', '!=', 'con1']], pluck='name')
# include js, css files in header of desk.html
# app_include_css = "/assets/omar_app/css/omar_app.css"
# app_include_js = "/assets/omar_app/js/omar_app.js"

# include js, css files in header of web template
# web_include_css = "/assets/omar_app/css/omar_app.css"
# web_include_js = "/assets/omar_app/js/omar_app.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "omar_app/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
doctype_js = {
    # "doctype" : "public/js/doctype.js",
    "Student": "cus_student.js",
}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {"Student": "public/js/cus_student.js",
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "omar_app.install.before_install"
# after_install = "omar_app.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "omar_app.uninstall.before_uninstall"
# after_uninstall = "omar_app.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "omar_app.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"omar_app.tasks.all"
# 	],
# 	"daily": [
# 		"omar_app.tasks.daily"
# 	],
# 	"hourly": [
# 		"omar_app.tasks.hourly"
# 	],
# 	"weekly": [
# 		"omar_app.tasks.weekly"
# 	]
# 	"monthly": [
# 		"omar_app.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "omar_app.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "omar_app.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "omar_app.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

user_data_fields = [
    {
        "doctype": "{doctype_1}",
        "filter_by": "{filter_by}",
        "redact_fields": ["{field_1}", "{field_2}"],
        "partial": 1,
    },
    {
        "doctype": "{doctype_2}",
        "filter_by": "{filter_by}",
        "partial": 1,
    },
    {
        "doctype": "{doctype_3}",
        "strict": False,
    },
    {
        "doctype": "{doctype_4}"
    }
]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"omar_app.auth.validate"
# ]

# Translation
# --------------------------------

# Make link fields search translated document names for these DocTypes
# Recommended only for DocTypes which have limited documents with untranslated names
# For example: Role, Gender, etc.
# translated_search_doctypes = []
