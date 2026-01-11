const translations = {
    fr: {
        conect: "Se connecter",
        CreerCompte: "Créer un compte",

        
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
        conect: "Log In",
        CreerCompte: "Create Account",

        
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
        sheet_info: "Event Details"
    },
    de: {
        CreerCompte: "Konto erstellen",
        conect: "Sich Anmelden",


        
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
    }
};

// Initialisation de la langue (mémoire locale ou navigateur)
let currentLang = localStorage.getItem('userLang') || navigator.language.slice(0, 2) || 'fr';
if (!translations[currentLang]) currentLang = 'fr';
