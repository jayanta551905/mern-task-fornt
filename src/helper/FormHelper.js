import cogoToast from "cogo-toast";

let emailRegx = /\S+@\S+\.\S+/;
// let onlyNumberRegx = /^\d+\.?\d*/;
// let validFileExtension = ["jpg", "JPG", "jpeg", "JPEG", "png", "PNG"];
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;


class FormHelper {
    isEmpty(value){
        return value.length === 0;
    }
    isMobile(value){
        return MobileRegx.test(value);
    }
    // isImageValid(imgExtension){
    //     return validFileExtension.includes(imgExtension);
    // }
    // isNumber(value){
    //     return onlyNumberRegx.test(value);
    // }
    isEmail(value){
        return !emailRegx.test(value);
    }
    errorToast(msg){
        cogoToast.error(msg, {position:"bottom-center"})
    }
    successToast(msg){
        cogoToast.success(msg, {position: "bottom-center"})
    }
}

export const {isEmpty, isMobile, isEmail, errorToast, successToast} = new FormHelper();