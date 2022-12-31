# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class VisitorsData(Document):

    @frappe.whitelist
    def frm_call(self, msg):
        # self.qr = 'Pythonista'
        return msg
