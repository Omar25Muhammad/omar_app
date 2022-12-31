// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

frappe.ui.form.on('Visitors Data', {
	smile: function (frm) {
		frm.call({
			doc: frm.doc,
			method: 'frm_call',
			args: {
				msg: 'Hallo!'
			},
			freeze: true,
			freeze_message: __("Translating..."),
			callback: function (r) {
				frappe.msgprint(r.message)
			}
		});
	}
});

frappe.ui.form.on('Visitors Data', 'smile', function (frm) {

});
