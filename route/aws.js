const AWS = require('aws-sdk');

AWS.config.update({
    region: "ap-southeast-1",
    accessKeyId: "",
    secretAccessKey: "" 
});

let docClient = new AWS.DynamoDB.DocumentClient();

function getAll(res){
    let params = {
        TableName: "maytinh"
    };
    let maytinhs = [];
    docClient.scan(params, (err, data) => {
        if (err) {
            res.end(JSON.stringify({ error: 'ERROR' }));
        } else {
            if(data.Items.length === 0){
                res.end(JSON.stringify({ message: 'DATA NULL' }));
            }

            data.Items.forEach((item) => {
                maytinhs.push(item);
                // console.log(item);
            });

            res.render('list', {
                maytinhs
            });

            // Show by JSON
            // res.end(JSON.stringify(dssinhvien));
        }
    });
}

function addItem(sothutu, tenmaytinh, hang, gia, chitiet, res) {
    let params = {
        TableName: 'maytinh',
        Item: {
            sothutu: sothutu,
            tenmaytinh: tenmaytinh,
            hang: hang,
            gia: gia,
            chitiet: chitiet
        }
    };
    docClient.put(params, (err, data) => {
        if (err) {
            res.end(JSON.stringify({error: 'ERROR'}));
        } else {
            getAll(res);
        }
    });
}

module.exports = {
    getAll: getAll,
    addItem: addItem
}