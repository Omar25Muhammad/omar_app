# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Sourcing(Document):
    def validate(self):
        if self.status == 'Open':
            rnv = {}
            purchasing_type_doc = frappe.get_doc(
                'Purchasing Types', self.purchasing_type)
            for i in purchasing_type_doc.actions:
                rnv[i.value] = i.role

            for i in sorted(rnv):
                if self.estimated_costing <= i:
                    # frappe.throw(f'You\'ve got to talk to {rnv[i]}')
                    # frappe.set_value('Sourcing', self.name,
                    #                  self.approver, rnv[i])
                    frappe.msgprint(f'You\'ve got to talk to {rnv[i]}')
                    self.approver = rnv[i]
                    break
            else:
                self.approver = 'Board'
                frappe.msgprint(
                    f'Since the value {self.estimated_costing} is so big, it needs to be discussed with the Board')
