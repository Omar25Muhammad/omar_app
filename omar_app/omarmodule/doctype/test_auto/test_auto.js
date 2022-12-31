// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

frappe.ui.form.on('Test Auto', {
	refresh: function (frm) {
		// frappe.msgprint("Transferd To Archive Successfully ! <br> <a href='#Form/To Follow Up'>Submit Archive Here</a>")
	},
	link: function (frm) {
		// frappe.set_route('Form', 'To Follow Up')
		frappe.msgprint(`Transferd To Archive Successfully ! <br> <a href='/app/to-follow-up/'>Submit Archive Here</a>`);

	}
});

frappe.ui.form.on('Test Auto Child', {
	submit: function (frm, cdt, cdn) {
		// msgprint(frm.doc.name)
		var d = locals[cdt][cdn]
		console.log(d.idx)
		// d.action = 'alt'
		// frm.refresh_field('test_auto_child')
		console.log(d.action)

		frm.call({
			doc: frm.doc,
			method: 'omar',
			args: {doc_name: frm.doc.name, action: d.action, status: d.status, days: d.days},
			callback: function(r) {frappe.msgprint(r.message)}
		})
	}
})
