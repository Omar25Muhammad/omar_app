// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

function pass_key(frm) {
	let secretphrase = 'omar';

	if (frm.doc.pass == secretphrase)
		$('.primary-action').prop('hidden', false);
		
	else
		$('.primary-action').prop('hidden', true);
}
let x = []
let chk_array = []
let chk_array2 = []
frappe.ui.form.on('Database Ereaser', {

	refresh: function (frm) {
		if (frm.is_new())
			frm.set_intro('Developer Omar M Shehada Welcomes You!')
		
		if (frm.doc.docstatus == 1)
			frm.toggle_display(['btn', 'c_btn', 'chk'], false)

		set_css(frm);

		$('.primary-action').prop('hidden', true);

		pass_key(frm);
	},

	on_submit: function (frm) {
	},

	pass: function (frm) {
		pass_key(frm);
	},

	modules: function (frm) {
		let module = frm.doc.modules;
		if (module != '')
			frm.toggle_reqd('tbl', true)
			if (module == '')
		frm.toggle_reqd('tbl', false)
			
		// console.log(module)
			frappe.call( {
				method: 'omar_app.omarmodule.doctype.database_ereaser.database_ereaser.get_doctypes',
				args: {module: module}
			}).done((r) => {
				// console.log(r)
				frm.doc.tbl = []
            	$.each(r.message, function(_i, e){
                	let entry = frm.add_child('tbl')
					entry._doctype = e.name;
					console.log(e.name)
				})
				refresh_field('tbl')
			})
	},

	btn: function (frm) { 
		// frm.doc.tbl = ''
	// 	for (let i = 0; i < 5; i++) {
	// 		let row = frm.add_child('tbl', {
	// 		_doctype: 'Database Ereaser'
	// 	})
	// }
	frappe.call( {
		method: 'omar_app.omarmodule.doctype.database_ereaser.database_ereaser.get_all_doctypes',
		args: {}
	}).done((r) => {
		console.log(r)
		frm.doc.tbl = []
		$.each(r.message, function(_i, e){
			let entry = frm.add_child('tbl')
			entry._doctype = e.name;
			console.log(e.name)
		})
		refresh_field('tbl')
	})
	},

	c_btn: function (frm) {
		frm.doc.modules = ''
		frm.doc.tbl = []
		refresh_field('tbl')
		refresh_field('modules')
		// refresh_field('tbl')
	},

	m_tbl: function (frm) {
		// if (frm.doc.m_tbl) {
		// 	for (let i in frm.doc.m_tbl) {
		// 		console.log(frm.doc.m_tbl[i]._name)
		// 		x[i] = frm.doc.m_tbl[i]._name
		// 		let module = x[i]

		// 	frappe.call( {
		// 		method: 'omar_app.omarmodule.doctype.database_ereaser.database_ereaser.get_doctypes',
		// 		args: {module: module}
		// 	}).done((r) => {
		// 		// console.log(r)
		// 		// frm.doc.tbl = []
		// 		$.each(r.message, function (_i, e) {
		// 			console.log(e)
		// 			let entry = frm.add_child('tbl')
		// 			// if (!(e.name in frm.doc.tbl[_i]._doctype))
		// 			entry._doctype = e.name;
		// 			// console.log(count(entry._doctype))
		// 			// frm.doc.m_tbl = []
		// 			console.log(e.name)
		// 		})
		// 		refresh_field('tbl')
		// 		// frm.doc.m_tbl = []
		// 	})
		// 	}
		// }
	},
	
	chk: function (frm) {
		console.clear()

		// if (frm.doc.tbl == '')
		chk_array = []
		chk_array2 = []	
		for (let i in frm.doc.tbl) {
			if (arr_counter(chk_array, chk_array[i]) > 1)
				continue
			else
				chk_array[i] = frm.doc.tbl[i]._doctype
		}
		console.log(chk_array)

		console.log('~~~Validation Time~~~')

		for (let i in chk_array){
			if (!(arr_counter(chk_array, chk_array[i]) > 1)) {
				chk_array2.push(chk_array[i])
			}
		}
		console.log(chk_array2)

		// -------------------------------------------------------- //

		if (frm.doc.m_tbl) {
			for (let i in frm.doc.m_tbl) {
				console.log(frm.doc.m_tbl[i]._name)
				x[i] = frm.doc.m_tbl[i]._name
				let module = x[i]

			frappe.call( {
				method: 'omar_app.omarmodule.doctype.database_ereaser.database_ereaser.get_doctypes',
				args: {module: module}
			}).done((r) => {
				// console.log(r)
				frm.doc.tbl = []
				$.each(r.message, function (_i, e) {
					console.log(e)
					let entry = frm.add_child('tbl')
					// if (!(e.name in frm.doc.tbl[_i]._doctype))
					entry._doctype = e.name;
					// console.log(count(entry._doctype))
					// frm.doc.m_tbl = []
					console.log(e.name)
				})
				refresh_field('tbl')
				// frm.doc.m_tbl = []
			})
			}
		}

		// -------------------------------------------------------- //

	},
	
});

function arr_counter(arr, num){
	let counter = 0
	for (let i in arr)
	{
		if (num == arr[i])
			counter += 1
	}
  return counter
};

function set_css(frm) {

	// lst = {
	// 	'position': 'absolute',
	// 	'left': '133px',
	// 	'top': '-41px'
	// }
	// $("[data-fieldname='c_btn']").css=(lst)
	document.querySelectorAll("[data-fieldname='c_btn']")[1].style.position = 'absolute';
	document.querySelectorAll("[data-fieldname='c_btn']")[1].style.left = '133px';
	document.querySelectorAll("[data-fieldname='c_btn']")[1].style.top = '-41px';

	document.querySelectorAll("[data-fieldname='chk']")[1].style.position = 'absolute';
	document.querySelectorAll("[data-fieldname='chk']")[1].style.left = '231px';
	document.querySelectorAll("[data-fieldname='chk']")[1].style.top = '-41px';
	document.querySelectorAll("[data-fieldname='chk']")[1].style.color = 'blanchedalmond';
	document.querySelectorAll("[data-fieldname='chk']")[1].style.background = 'brown';
	document.querySelectorAll("[data-fieldname='chk']")[1].style.font_style = 'oblique';
}


