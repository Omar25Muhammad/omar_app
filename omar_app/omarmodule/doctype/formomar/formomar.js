// Copyright (c) 2022, Me and contributors
// For license information, please see license.txt

frappe.ui.form.on('FormOmar', {
  validate: function(frm) {
    // frm.get_field('data').grid.cannot_add_rows = true;
    // frappe.model.delete_doc.delete_from_table
    frm.doc.tries = frm.doc.data[0].age
  },
  refresh: function(frm) {
    // frm.set_df_property('data', 'read_only', 1)

    frm.add_custom_button('Fill the Form', () => {
      frappe.new_doc('ToFormOmar', {

      })
    })
    frappe.msgprint(__('{0}', [frm.doc.data.length]))
    // if (frm.doc.data.length < frm.doc.tries) {
      // frm.get_field('data').grid.cannot_add_rows = false;
      for (let i = 0; i < 5; i++){
        let row = frm.add_child('data', {
          idx:1
      })
      }

    for (let row of frm.doc.data) {
      frappe.msgprint(__('{0}. Name: {1}. Age: {2}. Major: {3}',
      [row.idx, row.name1, row.age, row.major]))
  }
// }
  // if (frm.doc.data.length == 1){
  //   frm.get_field('data').grid.cannot_add_rows = true;
  // }

}
  // after_save: function(frm) {
  //   frappe.msgprint(__('Numebr of rows is {0}', [frm.doc.data.length]))
  //   for (let row of frm.doc.data) {
  //     // frappe.msgprint(__('{0}. {1}. {2}', [row.idx, row.name1, row.age]))
  //     if (row.idx == 6){
  //       frappe.throw("You've achieved the limit!")
  //     }
  //   }
  // }

});



// after_save: function(frm){
//
// }
