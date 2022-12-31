# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class TestShipping(Document):
	def validate(self):
		# frappe.throw(frappe.utils.now())
		self.dor = frappe.utils.now()[:19]
		# doc = frappe.get_all('Test Shipping')
		# doc = frappe.get_doc('Test Shipping', 'TS02')

	def on_submit(self):
		# frappe.throw(frappe.utils.now())
		self.dor = frappe.utils.now()[:19]
	# pass
