// Invoice Management
const invoiceForm = document.getElementById('invoiceForm');
const invoicesList = document.getElementById('invoicesList');

let invoices = JSON.parse(localStorage.getItem('invoices')) || [];

// Display invoices on page load
if (invoiceForm) {
    displayInvoices();
    invoiceForm.addEventListener('submit', handleAddInvoice);
}

function handleAddInvoice(e) {
    e.preventDefault();
    
    const invoice = {
        id: Date.now(),
        invoiceNo: document.getElementById('invoiceNo').value,
        invoiceCurrency: document.getElementById('invoiceCurrency').value,
        totalAmount: document.getElementById('totalAmount').value,
        terms: document.getElementById('terms').value,
        transportDocNo: document.getElementById('transportDocNo').value,
        transportDate: document.getElementById('transportDate').value,
        consignee: document.getElementById('consignee').value,
        supplierName: document.getElementById('supplierName').value,
        notes: document.getElementById('notes').value,
        addedAt: new Date().toLocaleDateString()
    };
    
    invoices.unshift(invoice);
    localStorage.setItem('invoices', JSON.stringify(invoices));
    
    invoiceForm.reset();
    displayInvoices();
    
    showNotification('Invoice added successfully!', 'success');
}

function displayInvoices() {
    if (invoices.length === 0) {
        invoicesList.innerHTML = '<tr><td colspan="6" class="text-center">No invoices added yet</td></tr>';
        return;
    }
    
    invoicesList.innerHTML = invoices.map(invoice => `
        <tr>
            <td>${invoice.invoiceNo}</td>
            <td>${invoice.supplierName}</td>
            <td>${invoice.totalAmount}</td>
            <td>${invoice.invoiceCurrency}</td>
            <td>${invoice.transportDate}</td>
            <td>
                <button class="btn btn-delete" onclick="deleteInvoice(${invoice.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function deleteInvoice(id) {
    if (confirm('Are you sure you want to delete this invoice?')) {
        invoices = invoices.filter(inv => inv.id !== id);
        localStorage.setItem('invoices', JSON.stringify(invoices));
        displayInvoices();
        showNotification('Invoice deleted successfully!', 'success');
    }
}

// Contact Form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toLocaleString()
    };
    
    // Store in localStorage for demonstration
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.unshift(formData);
    localStorage.setItem('messages', JSON.stringify(messages));
    
    contactForm.reset();
    showNotification('Message sent successfully! We will get back to you soon.', 'success');
}

// Notification Function
function showNotification(message, type) {
    const messageEl = document.getElementById('formMessage');
    if (messageEl) {
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;
        
        setTimeout(() => {
            messageEl.className = 'form-message';
        }, 5000);
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add current year to footer
const footerYearElements = document.querySelectorAll('footer p');
footerYearElements.forEach(el => {
    if (el.textContent.includes('2026')) {
        el.textContent = el.textContent.replace('2026', new Date().getFullYear());
    }
});

console.log('Website loaded successfully!');