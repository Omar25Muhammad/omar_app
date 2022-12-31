# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


@frappe.whitelist()
def get_doctypes(module):
    docs = frappe.db.sql(
        f'''select name from `tabDocType` where module='{module}';''', as_dict=True)
    return docs


@frappe.whitelist()
def get_all_doctypes():
    docs = frappe.db.sql(
        f'''select name from `tabDocType`;''', as_dict=True)
    return docs


class DatabaseEreaser(Document):
    def on_submit(self):
        for i in self.tbl:
            frappe.db.sql(f'''DELETE FROM `tab{i._doctype}`;''')
            frappe.db.commit()
            frappe.msgprint(f'Bye-Bye: {i._doctype}')
