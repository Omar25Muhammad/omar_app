// frappe.listview_settings['priority'] = {
// 	hide_name_column: true,
// 	// filters: [["status", "=", "Not Yet"]],
// 	add_fields: ["status", 'priority'],
// 	get_indicator: function (doc) {
// 		if (doc.status) {
// 			if (doc.status == 'Active') {
// 				return [__('Active'), 'green', 'status,=,Active'],[__('Omar'), 'green', 'priority,=,Omar']
// 			}
// 			else if (doc.status == 'Disactive') {
// 				return [__('Discactive'), 'green', 'status,=,Disactive']
// 			}
// 		}
// 	},
// 	// get_indicator: function (doc) {
// 	// 	if (doc.priority) {
// 	// 		if (doc.priority == 'Omar') {
// 	// 			return[__('Omar'), 'green', 'priority,=,Omar']
// 	// 		}
// 	// 		else if (doc.priority == 'Muhammed') {
// 	// 			return[__('Muhammed'), 'orange', 'priority,=,Muhammed']
// 	// 		}
// 	// 		else if (doc.priority == 'Khadir') {
// 	// 			return[__('Khadir'), 'yellow', 'priority,=,Khadir']
// 	// 		}
// 	// 	}
	
// 	// 	},
// 	onload(listview) {
// 			// frappe.msgprint('omar')
// 		}
// };
