//Swahili Date format

(function (factory) {
    if (typeof define === "function" && define.amd) {

       
        define(["../widgets/datepicker"], factory);
    } else {

       
        factory(jQuery.datepicker);
    }
}(function (datepicker) {

    datepicker.regional["sw"] = {
        closeText: "Tayari",
        prevText: "Kabla",
        nextText: "Inayofuata",
        currentText: "Leo",
        monthNames: ["Januari", "Februari", "Machi", "Aprili", "Mai", "Juni",
            "Julai", "Augusti", "Septemba", "Oktoba", "Novemba", "Desemba"],
        monthNamesShort: ["Jan", "Feb", "Mach", "Apr", "Mai", "Jun",
            "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        dayNames: ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
        dayNamesShort: ["J2", "J3", "J4", "J5", "Alh", "Ij", "J1"],
        dayNamesMin: ["J2", "J3", "J4", "J5", "Al", "Ij", "J1"],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };
    datepicker.setDefaults(datepicker.regional["sw"]);

    return datepicker.regional["sw"];

}));
