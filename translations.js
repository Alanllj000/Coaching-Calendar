
const translations = {
    fr: {
        conect: "Se connecter",
        CreerCompte: "Créer un compte",
        Seconnecter: "Se connecter",
        CreerCompte2: "Créer mon compte",
        settings_lang: "Langue de l'app",
        placeholder_password: "Mot de Passe",
        placeholder_prenom:"Prénom",
        placeholder_nom:"Nom",
        placeholder_tel:"Téléphone",


        
        
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
        CreerCompte: "Create Account",
        Seconnecter: "Log In ",
        CreerCompte2: "Create my Account",
        settings_lang: "App Language",
        placeholder_password:"Password",
        placeholder_prenom:"First Name",
        placeholder_nom:"Last Name",
        placeholder_tel:"Phone Number",

        
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
        Seconnecter: "Sich Anmelden",
        CreerCompte2: "Mein konto erstellen",
        settings_lang: "App Sprache",
        placeholder_password:"Passwort",
        placeholder_prenom:"Vorname",
        placeholder_nom:"Name",
        placeholder_tel:"Handy Nummer",


        
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


