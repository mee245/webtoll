import { Component } from '@angular/core' ;
import { Contact } from '../contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  contacts: Array<Contact> = [];

    addContact(id: { value: string; }, userid: { value: string; }, title: { value: string; }, body: { value: string; }) {
        const contact = new Contact(id.value, userid.value, title.value, body.value);
        this.contacts.push(contact);
        id.value = '';
        userid.value = '';
        title.value = '';
        body.value = '';
    }

    removeContact(contact: Contact) {
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    }
}


