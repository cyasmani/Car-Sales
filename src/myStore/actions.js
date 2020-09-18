
export const AddFeature = "AddFeature";
export const RemoveFeature = "RemoveFeature";

export const addFeature = (data) => {
    console.log(data)
    return {
        type: AddFeature,
        payload: data,
    };
};

export const removeFeature = (data) => {
    return {
        type: RemoveFeature,
        payload: data,
    };
}