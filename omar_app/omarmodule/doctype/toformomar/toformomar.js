// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

frappe.ui.form.on('ToFormOmar', {
	validate: function(frm) {
    frappe.new_doc('FormOmar', {

    })
		let row = frm.add_child('ToFormOmar', 'data', {
			name1: 'Omar',
			age: 22,
			major: 'Telecom'
	})
	}
});
