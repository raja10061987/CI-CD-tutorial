import CompletedDateTime from '@salesforce/schema/Task.CompletedDateTime';
import { LightningElement,track,wire } from 'lwc';

export default class MyFirstComponent extends LightningElement 
{
    @track code;
    @track name;

    method1()
    {
        console.log('this is meyhod1');
    }


}