# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe import msgprint, throw
from frappe.model.document import Document
from frappe.desk.form import assign_to


class TestUsers(Document):
    pass
    # def before_save(self):
    #     # throw('Works!', title='Notification')

    #     recipients = [
    #         'omarmail092@gmail.com',
    #         'shehada.mk.omar@gmail.com'
    #     ]

    #     frappe.sendmail(
    #         recipients=recipients,
    #         subject=frappe._('Birthday Reminder'),
    #         template='birthday_reminder',
    #         # args=dict(
    #         #     reminder_text='reminder_text',
    #         #     birthday_persons='birthday_persons',
    #         #     message='message',
    #         # ),
    #         header=('Birthday Reminder 🎂')
    #     )
    #     msgprint('Email Has Sent!')
