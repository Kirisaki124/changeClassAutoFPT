function changeClass(document_root) {
    let select = document.getElementById("ctl00_mainContent_dllCourse");
    let index = 0;
    for (let i = 0; i < select.length; i++){
        let option = select.options[i];
        if (option.text == "MKT1301") index = i  
        // Class change here
    }
    
    document.getElementById("ctl00_mainContent_dllCourse").selectedIndex = index;
    document.getElementById('ctl00_mainContent_btSave').click()
    return "Running";
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: changeClass(document)
});