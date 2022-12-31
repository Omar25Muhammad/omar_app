# Copyright (c) 2022, Me and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document
from googletrans import Translator
import datetime
import cv2


class GoogleTranslator(Document):

    @frappe.whitelist()
    def frm_call(self, msg):
        # self.qr = 'Pythonista'
        # return 'I\'m a freaking awesome Pythonista!'
        import time
        time.sleep(0.5)
        # return 'Pythonista'
        trans = Translator()
        text = self.text
        # self.year = datetime.datetime.today().year
        try:
            out = trans.translate(text, dest=self.pick_a_lang[:2])
            self.translated_text = out.text
        except:
            self.translated_text = 'Try it. It works!'

    def validate(self):
        frappe.throw('Camera')
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

        cv2.imwrite('/home/omix/omar/c3.png', frame)
        cap.release()
        cv2.destroyAllWindows()
