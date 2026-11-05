
let currentLanguage = "ar";

function toggleLanguage() {
    currentLanguage = currentLanguage === "ar" ? "en" : "ar";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-ar][data-en]").forEach(element => {
        element.textContent = element.getAttribute("data-" + currentLanguage);
    });

    document.getElementById("languageToggle").textContent =
        currentLanguage === "ar" ? "EN" : "AR";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const service = document.getElementById("clientService").value;
    const message = document.getElementById("clientMessage").value.trim();

    if (!name || !email || !service || !message) {
        alert("يرجى تعبئة جميع الحقول.");
        return;
    }

    const whatsappMessage =
        "مرحباً طارق، لدي طلب خدمة جديد:\n\n" +
        "الاسم: " + name + "\n" +
        "البريد الإلكتروني: " + email + "\n" +
        "الخدمة: " + service + "\n" +
        "تفاصيل المشروع: " + message;

    const whatsappURL =
        "https://wa.me/972594036837?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});
