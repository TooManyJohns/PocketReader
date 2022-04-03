const cvstfjs = require('@microsoft/customvision-tfjs');

export async function getModel() {

    let model = new cvstfjs.ObjectDetectionModel();
    await model.loadModelAsync("model/model.json");
    return await model;
}