// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

frappe.ui.form.on('camera', {

	refresh: function (frm) {
		// frappe.throw('omaromaromaromaromar')
	},
	cam_btn: function (frm) {
		frm.call({
			doc: frm.doc,
			method: 'frm_call',

			callback: function (r) { }
		});
	},
	btn: function (frm) {
		// frappe.throw('fds')
		const capture = new frappe.ui.Capture()
		capture.open()
		capture.click((data) => {

		})
	}
});
