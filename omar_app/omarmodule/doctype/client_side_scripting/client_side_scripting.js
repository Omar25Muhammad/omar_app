// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Client Side Scripting', {
  // Those are called events
  /*
        msgprint: as info
        throw: as error

  */
	// refresh: function(frm) {
  //   frappe.msgprint('Top of morning to you!')
	// }

  // onload: function(frm) {
  //   frappe.msgprint('Onloada event')
  // }

  // validate: function(frm) {
  //   frappe.msgprint('Validate event') // when saving the document
  // }

  // before_save: function(frm) {
  //   frappe.throw('Before Saving event') // it will not make me save the doc
  // }

  // after_save: function(frm) {
  //   frappe.throw('After Saving event')
  // }

  // enable: function(frm) {
  //   frappe.msgprint('You\'ve modified the enable check')
  // }

  // age: function(frm) {
  //   frappe.msgprint('You\'ve entered your age')
  // }

  // before_submit: function(frm) {
  //   frappe.msgprint('You are AWARE that once submit the doc, there is NO way back. Right?')
  // }

  // ####################################################

  // Fetching Data //

frappe.ui.form.on('Client Side Scripting', {

  validate:function(frm){
    // frm.set_value('full_name', frm.doc.first_name + ' ' + frm.doc.middle_name + ' ' + frm.doc.last_name)
    let row = frm.add_child('family_members', {
      name_: 'Ali',
      age: 19,
      relation: 'None'
    })
    
  }
});

// frappe.ui.form.on('Family Member', {
//   name_: function(frm) {
//       frappe.msgprint('From Child Table: Family Member, Name Field. Hi!')=
//   }
// })
