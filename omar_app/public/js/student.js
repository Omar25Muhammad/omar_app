

frappe.ui.form.on('Student', {

    refresh: function (frm) {
        frm.add_custom_button(__('Say Hi!'), function () {
            //perform desired action such as routing to new form or fetching etc.
            frappe.msgprint(__('Hi!'), 'Saying Hi')
        }, __('Tools'));
    }

});


