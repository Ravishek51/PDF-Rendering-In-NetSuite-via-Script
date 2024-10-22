/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(['N/record', 'N/render', 'N/log'], function(record, render, log) {
    function onRequest(context) {
        if (context.request.method === 'GET') {
            // Get the Sales Order ID from the request parameters
            var salesOrderId = context.request.parameters.salesOrderId;

            if (salesOrderId) {
                try {
                    // Load the Sales Order record
                    var salesOrderRecord = record.load({
                        type: record.Type.SALES_ORDER,
                        id: salesOrderId
                    });

                    // Create a render object for the PDF
                    var pdfRender = render.create();
                    pdfRender.setTemplateById('CUSTTMPL_109_4115328_SB1_14'); // Your template ID
                    pdfRender.addRecord('record', salesOrderRecord);

                    // Render the PDF
                    var pdfFile = pdfRender.renderAsPdf();

                    // Write the PDF file to the response
                    context.response.writeFile({
                        file: pdfFile,
                        isInline: true // Show PDF in the browser
                    });
                } catch (e) {
                    log.error({
                        title: 'Error loading Sales Order or generating PDF',
                        details: e.message
                    });
                    context.response.write('An error occurred while generating the PDF: ' + e.message);
                }
            } else {
                context.response.write('Sales Order ID is missing.');
            }
        }
    }

    return {
        onRequest: onRequest
    };
});
