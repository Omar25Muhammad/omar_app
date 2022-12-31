// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

frappe.ui.form.on('con1', {
	refresh: function(frm) {
		set_css(frm);
		if (frm.doc.docstatus == 1)
			frm.toggle_display('opn', true)
		else
			frm.toggle_display('opn', false)
	},
	on: function(frm) {
    if (frm.doc.on == 1)
      {frm.set_df_property('img', 'read_only', 1);}
    else
      {frm.set_df_property('img', 'read_only', 0);}
	}
});

frappe.ui.form.on('con1', 'opn', function(frm){
		// Actions Here..
		// console.log('Works!')
		window.open(frm.doc.img, '_blank')
	});

	function set_css(frm){
	  document.querySelectorAll("[data-fieldname='opn']")[1].style.fontWeight = 'bold'
	  document.querySelectorAll("[data-fieldname='opn']")[1].style.background = '#1579d0'
		document.querySelectorAll("[data-fieldname='opn']")[1].style.padding = '12px'
		document.querySelectorAll("[data-fieldname='opn']")[1].style.fontSize = '17px'
		document.querySelectorAll("[data-fieldname='opn']")[1].style.marginTop = '35px'
		document.querySelectorAll("[data-fieldname='opn']")[1].style.marginLeft = '143px'

	}
