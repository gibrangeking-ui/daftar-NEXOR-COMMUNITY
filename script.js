function generateCard() {
    const name = document.getElementById('userName').value;
    const origin = document.getElementById('userOrigin').value;
    const app = document.getElementById('userApp').value;

    if (name && origin && app) {
        document.getElementById('displayNm').innerText = name;
        document.getElementById('displayOrg').innerText = origin;
        document.getElementById('displayApp').innerText = app;
        
        document.getElementById('previewSection').classList.remove('hidden');
    } else {
        alert("Harap isi semua kolom pendaftaran!");
    }
}

function downloadCard() {
    const card = document.getElementById('introCard');
    
    html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        link.download = `NEXOR-Intro-${document.getElementById('displayNm').innerText}.png`;
        link.href = canvas.toDataURL();
        link.click();
        
        alert("Kartu Intro berhasil diunduh! Silakan kirimkan ke grup komunitas.");
    });
}
