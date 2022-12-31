// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

frappe.ui.form.on('Essa', {
	// refresh: function(frm) {

	// }cur_frm.doc.naming.slice(0,7)
	validate: function(frm) {
		frm.doc.naming = frm.doc.number + '-' + frm.doc.year + '-' + frm.doc.action
		frm.refresh_field('naming')

		// frm.doc.basedonnumber = frm.doc.naming.slice(0, frm.doc.naming.indexOf('-'))
		// frm.refresh_field('basedonnumber')
	}
});
