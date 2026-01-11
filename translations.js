const translations = {
    fr: {
        conect: "Se connecter",
        calendar: "Calendrier",
        location: "Lieu",
        coach_notes: "Notes du Coach",
        capacity: "Capacité",
        close: "Fermer les détails",
        full: "Complet",
        members: "membres",
        edit: "Modifier",
        consultation: "Consultation",
        date_label: "Date & Horaire",
        sheet_info: "Fiche de l'événement"
    },
    en: {
        calendar: "Calendar",
        location: "Location",
        coach_notes: "Coach Notes",
        capacity: "Capacity",
        close: "Close details",
        full: "Full",
        members: "members",
        edit: "Edit",
        consultation: "View only",
        date_label: "Date & Time",
        sheet_info: "Event Details",
        conect: "Log In"
    },
    de: {
        calendar: "Kalender",
        location: "Ort",
        coach_notes: "Coach-Notizen",
        capacity: "Kapazität",
        close: "Details schließen",
        full: "Ausgebucht",
        members: "Mitglieder",
        edit: "Bearbeiten",
        consultation: "Ansicht",
        date_label: "Datum & Uhrzeit",
        sheet_info: "Event-Details",
        conect: "Sich Anmelden"
    }
};

// Initialisation de la langue (mémoire locale ou navigateur)
let currentLang = localStorage.getItem('userLang') || navigator.language.slice(0, 2) || 'fr';
if (!translations[currentLang]) currentLang = 'fr';
