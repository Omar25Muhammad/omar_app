'''
Script No. 2 of the Series: Off The Hook.
    Official Release Date: Sep 26, 2022 | 7:00 a.m.

~~ This Series is Meant to Automate the Boring Jobs of Frappe Framework ~~

Script Description:
    Clearing the Databse data from DocTypes. In Other Words, Deleting the Documents
    The Script Allows you to Clear on Three Levels:
      - Individual DocTypes
      - Modules
      - Apps
    The first two levels are ready to use. The last is under development.

Script Usage:
    The Process of the script is pretty striaght-forward..
    Choose the level you want, then follow the instructions.
    One thing to be aware of is, when writing the doctypes/modules names; do not put space before the name.
    just comma followed with one space after it. As follows:
        Enter the Doctypes separated by coma:
        Doctype1, DocTypes2, DocTypes3...

Regards,
Eng. Omar M Shehada
'''

import frappe

# Defining the Eraser


def wipe_up(doctypes) -> list:
    # Clearing Data
    for doctype in doctypes:
        frappe.db.sql(f'''
            delete from `tab{doctype}`;
        ''')

        # Committing the changes
        frappe.db.commit()
        print(f'Bye-Bye! | {doctype}')

# To clear on the DocType level


def wipe_individually():
    # Initializing the black list!
    to_be_cleared = []

    # Specifying which DocTypes want to be said Bye-Bye!
    print('Enter the Doctypes separated by coma:')
    to_be_cleared = input().split(', ')

    # Double-checking
    print('R u sure? The followin\' DocTypes r gonna be wiped up:')
    for idx, doctype in enumerate(to_be_cleared, start=1):
        print(f'{idx}. {doctype}')

    # Confitm to go
    ans = input('Confirmed? y/n: ').lower()
    wipe_up(to_be_cleared) if ans == 'y' else print('Nothin\' changed!')

# To clear on the Module level


def wipe_modully(help=...):
    # help param: to remind

    # Initializing the Module black list!
    modules_names = []

    # Specifying which Moduless want to be said Bye-Bye!
    print('Enter the Modules separated by coma:')
    modules_names = input().split(', ')

    # Gettin' all doctypes of the system
    doctypes = frappe.get_list('DocType', pluck='name')

    # Initializing the DocType black list!
    to_be_cleared = []

    # Fillin' the list
    for i in range(len(doctypes)):
        if frappe.modules.get_doctype_module(doctypes[i]) in modules_names:
            to_be_cleared.append(doctypes[i])

    # Double-checking
    print('Re u sure? The followin\' DocTypes r gonna be wiped up:')
    for idx, doctype in enumerate(to_be_cleared, start=1):
        print(f'{idx}. {doctype}')

    # Confitm to go
    ans = input('Confirmed? y/n: ')
    wipe_up(to_be_cleared) if ans == 'y' else print('Nothin\' changed!')

# To clear on the App level


def wipe_apply(help):
    ...


# User Interface
ans = input('On what level do you wanna play?\n1. DocType\n2. Module\n3. App\n')
if ans == '1':
    wipe_individually()
elif ans == '2':
    wipe_modully()
else:
    quit('Sorry!')
