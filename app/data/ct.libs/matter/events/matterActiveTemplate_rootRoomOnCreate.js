{
    const [templateName] = [/*%%ENTITY_NAME%%*/];
    ct.matter.rulebookActive.push({
        mainTemplate: templateName,
        otherTemplate: [/*%%template%%*/][0],
        // eslint-disable-next-line no-unused-vars
        func: function (other) {
            /*%%USER_CODE%%*/
        }
    });
}
