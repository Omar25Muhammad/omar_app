# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document

class OfTestShipping(Document):
	def before_save(self):
		# frappe.throw('Works')
		our_submitted_list = frappe.db.get_list('Test Shipping', fields=['name', 'name_', 'dor'], filters={'docstatus':1}, pluck='name')
		if 'TS06' in our_submitted_list:
			# frappe.throw(_('Yes. TS06 is submmited'))
			self.data_1 = 'Yes. TS06 is submmited'
		else:
			# frappe.throw(_('No. TS06 is either drafted or canceled'))
			self.data_1 = 'No. TS06 is either drafted or canceled'
