async function checkRulesetStatus() {
    const result = await chrome.declarativeNetRequest.getEnabledRulesets();
    document.getElementById('urlRewriteEnabled').checked = result.includes('ruleset_1');
}
checkRulesetStatus();
console.log(`chrome://extensions/?id=${chrome.runtime.id}`);
// document.getElementById('disableTxt').textContent = `chrome://extensions/?id=${chrome.runtime.id}`;

document.getElementById('copyLink').addEventListener('click', () => {
    navigator.clipboard.writeText(`chrome://extensions/?id=${chrome.runtime.id}`).then(() => {
        showToast('Link copied! Paste this URL in the address bar to disable this extension.');
    }).catch(err => {
        console.error('Kopiëren mislukt: ', err);
    });
});

// document.getElementById('copyLink').addEventListener('click', () => {
//     navigator.clipboard.writeText(`chrome://extensions/?id=${chrome.runtime.id}`).then(() => {
//         showToast('Link gekopieerd! Plak dit in je adresbalk.');
//     }).catch(err => {
//         console.error('Kopiëren mislukt: ', err);
//     });
// });

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

document.getElementById('urlRewriteEnabled').addEventListener('change', async function () {
    const urlRewriteEnabled = document.getElementById('urlRewriteEnabled').checked;
    try {
        await chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: urlRewriteEnabled ? ['ruleset_1'] : [],
            disableRulesetIds: urlRewriteEnabled ? [] : ['ruleset_1']
        });
        console.log(`ruleset_1 is now ${urlRewriteEnabled ? 'ENABLED' : 'DISABLED'}`);
        // chrome.runtime.reload()
    } catch (err) {
        console.error('Failed to toggle ruleset_1:', err);
    }
});
