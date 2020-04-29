function loadFirst(document_root) {
    let select = document.getElementById("ctl00_mainContent_dllCourse");
    let index = 0;
    for (let i = 0; i < select.length; i++){
        let option = select.options[i];
        if (option.text == "MKT1301") index = i  
        // Class change here
    }
    document.getElementById("ctl00_mainContent_dllCourse").selectedIndex = index;
    setTimeout(function(){  }, 3000);
    return true;
}

chrome.runtime.sendMessage({
    action: "loadFirst",
    source: loadFirst(document)
});