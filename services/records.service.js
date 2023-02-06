const db = require('../db/conn');
const Record = db.Records;

module.exports = {
    create,
    edit, 
    getAll,
    deleteOne,
    getOne
};

async function create(recordParam, res) {
    console.log('create with ', recordParam);
    const record = new Record(recordParam);

    console.log('just created record', record);
    await record.save();
    return 'done';

}

async function edit(id, recordParam) {    
    const record = await Record.findById(id);

    // copy userParam properties to user
    Object.assign(record, recordParam);

    return await record.save();
}

async function getOne(id) {    
    const record = await Record.findById(id);

    return await record;
}


async function deleteOne(id) {
    return await Record.findByIdAndRemove(id);
}

async function getAll() {
    if (Record) {
        return await Record.find();
    } else {
        return [];
    }
}

