import EditableBase from '../../src/model/editableBase';
import { commonRules } from '../../src/model/commonRules';
import { StringLengthRuleArgs } from '../../src/model/commonRuleArgs';

export default class Person extends EditableBase {
    private _name: string;
    private _jobTitle: string;
    private _age: number;
    private _isInsane: boolean;

    constructor(name: string, jobTitle: string, age: number, isInsane: boolean) {
        super();
        this._name = name;
        this._jobTitle = jobTitle;
        this._age = age;
        this._isInsane = isInsane;
    }

    get name() : string {
        return this._name;
    }
    set name(value: string) {
        if(this._name != value) {
            this._name = value;
            this.propertyHasChanged("name");
        }
    }

    get jobTitle() : string {
        return this._jobTitle;
    }
    set jobTitle(value: string) { 
        if(this._jobTitle != value) {
            this._jobTitle = value;
            this.propertyHasChanged("jobTitle");
        }
    }    

    get age() : number {
        return this._age;        
    }
    set age(value: number) {
        if(this._age != value) {
            this._age = value;
            this.propertyHasChanged("age");
        }
    }

    get isInsane() : boolean {
        return this._isInsane;
    }
    set isInsane(value: boolean) {
        if(this._isInsane != value) {
            this._isInsane = value;
            this.propertyHasChanged("isInsane");
        }
    }

    addBusinessRules() {
        this.validationRules.addRule("name", commonRules.stringRequired);
        this.validationRules.addRule("name", commonRules.stringMinLength, new StringLengthRuleArgs(2, "name"));
        this.validationRules.addRule("name", commonRules.stringMaxLength, new StringLengthRuleArgs(15, "name"));
        this.validationRules.addRule("jobTitle", commonRules.stringRequired);
        this.validationRules.addRule("age", (target, args) => { 
            args.description = "Age must be between 17 and 95";
            return this._age >= 17 && this._age <= 95;
        });        
    }
}

