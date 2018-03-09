import * as React from 'react';
import BoundUserControl from '../../../src/ui/boundUserControl';
import CompositionTemplateProps from '../../../src/ui/templates/compositionTemplateProps';
import { BoundUITemplateProps } from '../../../src/ui/boundUiTemplateProps';
import Binding from '../../../src/ui/binding';

export const BoundCheckbox : React.SFC<CompositionTemplateProps> = (parentProps) => {
    // get the crap out
    var { datacontext, targetProperty, ...cleanedProps } = parentProps;

    const CheckboxTemplate : React.SFC<BoundUITemplateProps> = (props) => {        
        var { id, ...stupidProps } = props.filteredUiProps;
        return (
            <input type="checkbox"    
                onChange={(actualEvent) => {}}                            
                onClick={(actualEvent) => { 
                    // capture the id.
                    const cbox = document.getElementById(id!) as HTMLInputElement;
                    props.databind(cbox.checked);
                }}                
                {...props.filteredUiProps} />
        )
    }

    return (
        <BoundUserControl binding={new Binding(datacontext, 'checked', targetProperty)}
            template={CheckboxTemplate}
            {...cleanedProps} />
    )
}