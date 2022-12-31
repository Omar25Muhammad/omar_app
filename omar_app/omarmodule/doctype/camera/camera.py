# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document


class camera(Document):

    @frappe.whitelist()
    def frm_call(self):
        # frappe.throw('ff')
        # import os
        # os.system('start microsoft.windows.camera:')
        # def validate(self):
        import cv2
        cap = cv2.VideoCapture(0)

        if not cap.isOpened():
            raise IOError('Cannot open camera. Check out the settings.')

        while True:
            ret, frame = cap.read()
            frame = cv2.resize(frame, None, fx=1, fy=1,
                               interpolation=cv2.INTER_AREA)
            cv2.imshow('Smile!', frame)

            c = cv2.waitKey(1)
            if c == 32:  # ASCII Code for space
                break

        # cv2.imwrite('/home/omix/omar/c3.png', frame)
        cap.release()
        cv2.destroyAllWindows()
