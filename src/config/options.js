/*Configurações gerais da sessao WA-AUTOMATE*/

const options = (start)=>{
    const options = {
        sessionId: "LINS_SESSION",
        multiDevice: true, //required to enable multiDevice support
        authTimeout: 60, //wait only 60 seconds to get a connection with the host account device
        blockCrashLogs: true,
        disableSpins: true,
        headless: false,
        hostNotificationLang: 'PT_BR',
        logConsole: false,
        popup: true,
        qrTimeout: 0, //0 means it will wait forever for you to scan the qr code
        cacheEnabled: false,
    }
    return options;
}

export {options}