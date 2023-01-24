const options = {
    container: 'luckysheet', // set the id of the DOM container
    title: "It's A Demo", // set the name of the table
    lang: 'en', // set language

    // More other settings...
    data: [
        {
            "name": "Sheet1", //Worksheet name
            "color": "", //Worksheet color
            "index": 0, //Worksheet index
            "status": 1, //Worksheet active status
            "order": 0, //The order of the worksheet
            "hide": 0,//Whether worksheet hide 
            "row": 36, //the number of rows in a sheet
            "column": 18, //the number of columns in a sheet
            "defaultRowHeight": 19, //Customized default row height
            "defaultColWidth": 73, //Customized default column width
            "celldata": [], //Initial the cell data
            "config": {
                "merge":{}, //merged cells
                "rowlen":{}, //Table row height
                "columnlen":{}, //Table column width
                "rowhidden":{}, //hidden rows
                "colhidden":{}, //hidden columns
                "borderInfo":{}, //borders
                "authority":{}, //Worksheet protection
            },
            "scrollLeft": 0, //Left and right scroll bar position
            "scrollTop": 315, //Up and down scroll bar position
            "luckysheet_select_save": [], //selected area
            "calcChain": [],//Formula chain
            "isPivotTable":false,//Whether is pivot table
            "pivotTable":{},//Pivot table settings
            "filter_select": {},//Filter range
            "filter": null,//Filter configuration
            "luckysheet_alternateformat_save": [], //Alternate colors
            "luckysheet_alternateformat_save_modelCustom": [], //Customize alternate colors	
            "luckysheet_conditionformat_save": {},//condition format
            "frozen": {}, //freeze row and column configuration
            "chart": [], //Chart configuration
            "zoomRatio":1, // zoom ratio
            "image":[], //image
            "showGridLines": 1, //Whether to show grid lines
        },
        {
            "name": "Sheet2",
            "color": "",
            "index": 1,
            "status": 0,
            "order": 1,
            "celldata": [],
            "config": {}
        },
        {
            "name": "Sheet3",
            "color": "",
            "index": 2,
            "status": 0,
            "order": 2,
            "celldata": [],
            "config": {},
        }
    ]
    
}

// Initialize the table
luckysheet.create(options)