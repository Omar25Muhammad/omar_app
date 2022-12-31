# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe import whitelist
from frappe.model.document import Document
import datetime


class TestAuto(Document):

    @frappe.whitelist()
    def omar(self, doc_name, action, status, days):
        # if not frappe.db.exists('Test Insert', td.name):
        # due_date = datetime.date.today() + datetime.timedelta(days=days)

        def due(start_date, days):
            delta = datetime.timedelta(days=1)
            end_date = start_date + datetime.timedelta(days=days)
            while start_date <= end_date:
                if start_date.weekday() == 4 or start_date.weekday() == 5:
                    end_date += delta
                start_date += delta
            return start_date - delta

        td = frappe.get_doc(
            {'doctype': 'To Follow Up', 'name1': doc_name, 'action': action, 'status': status, 'due': due(datetime.date.today(), days)})
        td.insert()
        frappe.db.commit()
        return 'Document Created Succesfully!'
