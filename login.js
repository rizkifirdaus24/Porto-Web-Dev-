document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIC FOR LOGIN PAGE ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = document.getElementById('email');
            const loginError = document.getElementById('loginError');
            const email = emailInput.value.toLowerCase();

            if (email.endsWith('@gmail.com')) {
                loginError.style.display = 'none';
                window.location.href = 'dashboard.html';
            } else {
                loginError.style.display = 'block';
            }
        });
    }

    // --- LOGIC FOR LOGOUT BUTTON (IN SIDEBAR) ---
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'login.html';
        });
    }

    // --- LOGIC FOR DATA PELANGGAN PAGE ---
    const biodataForm = document.getElementById('biodataForm');
    const biodataTableBody = document.getElementById('biodataTableBody');

    if (biodataForm && biodataTableBody) {
        function addDataRow(nama, waktu, keterangan) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${nama}</td>
                <td>${waktu}</td>
                <td>${keterangan || '-'}</td>
                <td><button class="btn btn-sm btn-danger btn-delete">Hapus</button></td>
            `;
            biodataTableBody.appendChild(newRow);
        }

        biodataForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nama = document.getElementById('nama').value;
            const waktu = document.getElementById('waktu').value;
            const keterangan = document.getElementById('keterangan').value;

            addDataRow(nama, waktu, keterangan);
            biodataForm.reset();
        });

        biodataTableBody.addEventListener('click', function(event) {
            if (event.target.classList.contains('btn-delete')) {
                event.target.closest('tr').remove();
            }
        });
    }
});

