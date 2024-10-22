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
     var lineCount = curentRecord.getLineCount({
        sublistId:'item'

     });

     for(var i =0;i<lineCount;i++){

        var item = curentRecord.getSublistValue({
            sublistId:'item',
            fieldId:'item',
            line:i
        });
        var amount = curentRecord.getSublistValue({
            sublistId:'item',
            fieldId:'amount',
            line:i
        });
        var orderd = curentRecord.getSublistValue({
            sublistId:'item',
            fieldId:'orderpriority	',
            line:i
        });
        var Qunatity = curentRecord.getSublistValue({
            sublistId:'item',
            fieldId:'quantity',
            line:i
        });
        var Description = curentRecord.getSublistValue({
            sublistId:'item',
            fieldId:'description',
            line:i
        });
        var price = curentRecord.getSublistValue({
            sublistId:'item',
            fieldId:'price',
            line:i
        })

     }
    //  log.debug()

        log.debug("Item ",item);
        log.debug("Amount ",amount);
        // log.debug("Description  ",description);
        log.debug("Code wokring Successful");

    }
    return{
        beforeLoad:beforeLoad
    }
})