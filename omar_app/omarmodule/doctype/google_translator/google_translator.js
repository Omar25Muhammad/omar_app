// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

frappe.ui.form.on('Google Translator', {
	// validate: function(frm) {
	//   frm.set_value('qr', 'Let it go.')
	//
	//   var val = frm.doc.qr;
	//   frappe.msgprint(val)
	// }
	refresh: function (frm) {

		frm.set_value('year', new Date().getFullYear())

		frm.set_intro('Enter a text -> Pick up a language to translate to -> Hit Do Translate! -------> **You need to be ONLINE**')

		// Making edits on the css level
		set_css(frm);
	},

	btn: function (frm) {
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

frappe.ui.form.on("Google Translator", "btn", function (frm) {
	// var val = frm.doc.data;
	// frappe.msgprint(val)
	// frm.set_value('data', 'What is my MF name?!')
	// frm.set_value('adta')

	// Call from Python

	// frappe.call({
	// 	method: "omarmodule.google_translator.btn",
	// 	callback: function(r) {};
	// });


});



// Making edits on the css level
function set_css(frm) {
	// document.querySelectorAll("[data-fieldname='section_break_23']")[1].style.color = 'green'
	// document.querySelectorAll("[data-fieldname='section_break_23']")[1].style.background = 'black'
	document.querySelectorAll("[data-fieldname='text']")[1].style.color = '#202020'
	document.querySelectorAll("[data-fieldname='text']")[1].style.fontWeight = 'bold'
	document.querySelectorAll("[data-fieldname='text']")[1].style.background = '#12ff21'

}
