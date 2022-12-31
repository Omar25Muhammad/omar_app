# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class con2(Document):
	frappe.msgprint('omar')
	# self.con2 = 'omar'
	def before_save(self):
		self.name_ = 'omar'
