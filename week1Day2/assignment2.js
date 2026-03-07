
/*a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value*/


function launchBrowser(browserName){
    if (browserName=='Chrome'){
        console.log(`Chrome browser launched successfully!`)
    }else if(browserName=='FireFox'){
        console.log(`Mozilla FireFox browser launched successfully!`)
    }else if(browserName=='Safari'){
        console.log(`Safari browser launched successfully!`)
    }else if(browserName=='Edge'){
        console.log(`Microsoft Edge browser launched successfully!`)
    }else{
        console.log(`Invalid browser name. Couldn't not launch the broswer!`)
    }
}
launchBrowser('45iuChrome6')

/*b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the v*/

function runTests(testType){
    switch (testType) {
        case "Smoke":
            console.log("Smoke testing is completed!")
            break;
        case "Sanity":
            console.log("Sanity testing is completed!")
            break;
        case "Segression":
            console.log("Regression testing is completed!")
            break;
        case "SIT":
            console.log("SIT is completed!")
            break;         
        default:
            console.log("UAT is completed!")
            break;
    }
}
runTests("SIT")