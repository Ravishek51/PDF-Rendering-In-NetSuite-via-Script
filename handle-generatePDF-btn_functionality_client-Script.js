/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define(['N/url', 'N/currentRecord'], function(url, currentRecord) {

    function pageInit(){
        // Add logic if needed
    }

    function clickPdf(context) {
        // Get the current Sales Order ID
        var salesOrderId = currentRecord.get().id;
        console.log("Sales Order ID: " + salesOrderId);

        // Resolve the Suitelet URL
        var suiteletUrl = url.resolveScript({
            scriptId: 'customscript2313',  // Replace with your Suitelet Script ID
            deploymentId: 'customdeploy1', // Replace with your Suitelet Deployment ID
            params: {
                salesOrderId: salesOrderId  // Pass the Sales Order ID as a parameter
            }
        });

        // Open the Suitelet-generated PDF in a new window
        window.open(suiteletUrl, '_blank');

        console.log("Button clicked and PDF generation initiated");
    }

    return {
        pageInit: pageInit,
        clickPdf: clickPdf
    };
});
