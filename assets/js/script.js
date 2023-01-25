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
            "celldata": [
                {
                    "r": 0,
                    "c": 0,
                    "v": {
                        ct: { fa: "General", t: "g" },
                        m: "value1",
                        v: "First Name"
                    }
                }, {
                    "r": 0,
                    "c": 1,
                    "v": {
                        ct: { fa: "General", t: "g" },
                        m: "value2",
                        v: "Second Name"
                    }
                }, {
                    "r": 0,
                    "c": 2,
                    "v": {
                        ct: { fa: "General", t: "g" },
                        m: "value3",
                        v: "Salary"
                    }
                }
            ], //Initial the cell data
            "config": {
                "merge": {}, //merged cells
                "rowlen": {}, //Table row height
                "columnlen": {}, //Table column width
                "rowhidden": {}, //hidden rows
                "colhidden": {}, //hidden columns
                "borderInfo": {}, //borders
                "authority": {
                    selectLockedCells: 1, //Select locked cells
                    selectunLockedCells: 1, //Select unlocked cells
                    formatCells: 1, //Format cells
                    formatColumns: 1, //Format columns
                    formatRows: 1, //Format rows
                    insertColumns: 1, //Insert columns
                    insertRows: 1, //Insert rows
                    insertHyperlinks: 1, //Insert hyperlinks
                    deleteColumns: 1, //Delete columns
                    deleteRows: 1, //Delete rows
                    sort: 1, //Sort
                    filter: 1, //Filter
                    usePivotTablereports: 1, //Use Pivot Table reports
                    editObjects: 1, //Edit objects
                    editScenarios: 1, //Edit scenarios   
                    sheet: 1, //If it is 1 or true, the worksheet is protected; if it is 0 or false, the worksheet is not protected.
                    hintText: "", //The text of the pop-up prompt
                    algorithmName: "None",//Encryption scheme: MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
                    saltValue: null, //The salt parameter for password decryption is a random value set by yourself

                    allowRangeList: [{ //Range protection
                        name: "area", //Name
                        password: "1", //Password
                        hintText: "", //Prompt text
                        algorithmName: "None",//Encryption scheme: MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
                        saltValue: null, //The salt parameter for password decryption is a random value set by yourself
                        sqref: "$C$1:$D$5" //Protected range
                    }],
                }, //Worksheet protection
            },
            "scrollLeft": 0, //Left and right scroll bar position
            "scrollTop": 315, //Up and down scroll bar position
            "luckysheet_select_save": [], //selected area
            "calcChain": [],//Formula chain
            "isPivotTable": false,//Whether is pivot table
            "pivotTable": {},//Pivot table settings
            "filter_select": {},//Filter range
            "filter": null,//Filter configuration
            "luckysheet_alternateformat_save": [], //Alternate colors
            "luckysheet_alternateformat_save_modelCustom": [], //Customize alternate colors	
            "luckysheet_conditionformat_save": {},//condition format
            "frozen": {
                type: 'row',
                range: { row_focus: 0, column_focus: 2 }
            }, //freeze row and column configuration
            "chart": [], //Chart configuration
            "zoomRatio": 1, // zoom ratio
            "image": [], //image
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