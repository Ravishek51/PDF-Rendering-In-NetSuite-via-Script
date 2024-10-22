/**
 * @NApiVersion 2.x 
 * @NScriptType UserEventScript
 */
define(['N/log','N/ui/serverWidget','N/record'],function(log,serverWidget,record){


    function beforeLoad(context){
        log.debug("trigger type ",context.type);
        var form = context.form
        var curentRecord = context.newRecord;
        if(context.type === context.UserEventType.VIEW){

            form.addButton({
                id:'custpage_btn',
                label:'Genrate PDF',
                functionName:'clickPdf'
            })


        }
    
    }
    return{
        beforeLoad:beforeLoad
    }
})
