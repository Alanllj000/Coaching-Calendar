
const translations = {
    fr: {
        // --- AUTH & LOGIN ---
    CreerCompte: "Créer un compte",
    Seconnecter: "Se connecter",
    CreerCompte2: "Créer mon compte",
    auth_btn_login: "Se connecter",
    auth_btn_register: "Créer mon compte",
    auth_toggle_to_login: "Déjà un compte ? Se connecter",
    auth_toggle_to_register: "Créer un compte",
    placeholder_email: "Email",
    placeholder_password: "Mot de passe",
    placeholder_prenom: "Prénom",
    placeholder_nom: "Nom",
    placeholder_tel: "Téléphone",
    under_construction: "(En cours de création)",

    // --- MENU & NAVIGATION ---
    menu_settings: "Réglages",
    menu_inbox: "Boîte de réception",
    menu_create: "Créer Event",
    menu_logout: "Déconnexion",
    settings_lang: "Langue de l'app",

    // --- CALENDAR & DATE ---
    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    days_short: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    notif_same_day: "Le jour même",
    at: "à",
    days_long: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],

    // --- BUTTONS GÉNÉRIQUES ---
    btn_confirm: "Confirmer",
    btn_cancel: "Annuler",
    btn_save: "Enregistrer",
    delete: "Supprimer",
    status_full: "Complet",
    status_finished: "Terminé",
    status_pending: "En attente",
    btn_edit_reg: "Modifier Réservation",

    // --- ADMIN PANEL ---
    admin_panel_title: "Nouvel Événement",
    placeholder_title: "Titre",
    placeholder_loc: "Lieu",
    label_notes: "Notes Complémentaires",
    placeholder_notes: "Détails du coaching, matériel à prévoir...",
    placeholder_max: "Places Max",
    label_recurrence: "Récurrence",
    day_mon: "Lun", day_tue: "Mar", day_wed: "Mer", day_thu: "Jeu", day_fri: "Ven", day_sat: "Sam", day_sun: "Dim",
    btn_delete_event: "Supprimer l'événement",

    // --- PIP MODIFICATION SÉRIE ---
    edit_choice_title: "Modifier l'événement",
    edit_choice_subtitle: "Cet événement fait partie d'une série.",
    edit_mode_single: "Modifier cette séance uniquement",
    edit_mode_series: "Modifier toute la série",
    btn_confirm_edit: "Confirmer la modification",

    // --- PIP SUPPRESSION ÉVÉNEMENT ---
    pip_delete_title: "Supprimer l'événement",
    pip_delete_desc: "Voulez-vous supprimer cet événement ?",
    delete_mode_single: "Cet événement seulement",
    delete_mode_series: "Toute la série",

    // --- PIP RÉGLAGES (EMAIL / PWD) ---
    pip_pwd_title: "Modifier votre mot de passe",
    placeholder_pwd_current: "Mot de passe actuel",
    placeholder_pwd_new: "Nouveau mot de passe",
    placeholder_pwd_confirm: "Confirmer le nouveau mot de passe",
    pip_email_title: "Modifier votre email",
    placeholder_email_new: "Nouvel email",
    placeholder_pwd_verif: "Mot de passe",

    // --- PIP RAPPELS (CUSTOM REMINDERS) ---
    pip_reminder_title: "Rappel Personnalisé",
    label_days: "Jours",
    label_hours: "Heures",
    label_mins: "Mins",
    btn_add: "Ajouter",

    // --- PIP CONFIRMATIONS SÉCURITÉ ---
    pip_confirm_pwd_title: "Confirmer le mot de passe",
    pip_confirm_pwd_desc: "Veuillez confirmer votre mot de passe pour des raisons de sécurité.",
    placeholder_pwd: "Mot de passe",
    pip_signup_confirm_title: "Confirmer le compte",
    pip_signup_confirm_desc: "Veuillez confirmer votre mot de passe pour finaliser l'inscription.",
    placeholder_confirm_pwd: "Confirmer le mot de passe",
    btn_confirm_access: "Confirmer et Accéder",

    // --- PIP SUPPRESSION COMPTE ---
    pip_del_acc_title: "Supprimer le Compte ?",
    pip_del_acc_desc: "Cette action va définitivement supprimer votre compte ainsi que toutes vos données. Cette action est irréversible.",
    pip_del_acc_confirm: "Veuillez confirmer l'action.",
    btn_confirm_del_acc: "Oui, Supprimer",



    //--- PiP Inscription et modification d'inscription ---
    label_private_session: "Session Privée",
    private_warning_blocked: "Option bloquée.",
    placeholder_reg_notes: "Ex: Travailler les sauts...",
    step2_title_register: "S'inscrire",
    step2_title_edit: "Modifier l'inscription",
    step2_label_notes: "Notes pour le coach",
    btn_register_confirm: "Confirmer l'inscription",
    btn_modify_confirm: "Enregistrer les modifications",

        
    //--- PiP Eventdetails (Openevenetdetails()) ---
    label_members: "membres",
    event_card_subtitle: "Fiche de l'événement",
    label_consultation: "Consultation",
    label_location: "Lieu",
    label_date_time: "Date & Horaire",

    //--- HandleAuthSetp1 and 2 ---
    btn_continue_registration: "Poursuivre l'inscription",
    btn_continue_confirmation: "Poursuivre la confirmation",
    warning_action_required: "Action requise",
    desc_event_modified: "Les informations de cet événement ont été modifiées. Veuillez relire les nouveaux détails.",
    status_already_registered: "Vous êtes déjà inscrit",
    event_details_title: "Détails de l'événement",
    confirm_presence_prompt: "Souhaitez-vous confirmer votre présence à l'événement",
    label_date_on: "Le",
    not_defined: "Non défini",
    warmup_warning: "Une avance d'au minimum 15 minutes dédiée à un échauffement est nécessaire !",
    pip_step2_default_title: "Avant de valider...",
    btn_back: "Retour",
    btn_back_to_details: "Détails de l'événement",
    label_update_notes: "Mettre à jour vos notes :",
    step2_title_reconfirmation: "Reconfirmation",
    btn_finish_confirmation: "Terminer la confirmation",
    btn_unsubscribe: "Se désinscrire",
    msg_saving: "Enregistrement...",
    msg_save_success: "Modifications enregistrées !",
    msg_reg_success: "Inscription validée !",

        reglages_all:`<div id="profile-section" class="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
<p class="text-[10px] font-black uppercase text-slate-400 tracking-wider">Profil</p>
<div class="grid grid-cols-2 gap-4">
<input id="set-firstname" oninput="checkProfileChanges()" placeholder="Prénom" class="input-field" oninput="checkProfileChanges()">
<input id="set-lastname" oninput="checkProfileChanges()" placeholder="Nom" class="input-field" oninput="checkProfileChanges()">
</div>
<input id="set-phone" oninput="checkProfileChanges()" placeholder="Téléphone" class="input-field" oninput="checkProfileChanges()">
<div class="flex flex-col gap-2 p-4">
    <p class="text-[10px] font-black uppercase tracking-widest text-slate-400" data-i18n="settings_lang">Langue de l'application</p>
    
    <div class="flex bg-slate-100 p-1 rounded-2xl w-full max-w-sm border border-slate-200">
        <button onclick="changeLanguage('fr')" id="lang-fr" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300">
            <img src="https://flagcdn.com/w40/fr.png" class="w-5 h-4 object-cover rounded-sm shadow-sm" alt="FR">
            <span class="text-[10px] font-black uppercase">FR</span>
        </button>

        <button onclick="changeLanguage('en')" id="lang-en" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300">
            <img src="https://flagcdn.com/w40/gb.png" class="w-5 h-4 object-cover rounded-sm shadow-sm" alt="EN">
            <span class="text-[10px] font-black uppercase">EN</span>
        </button>

        <button onclick="changeLanguage('de')" id="lang-de" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300">
            <img src="https://flagcdn.com/w40/de.png" class="w-5 h-4 object-cover rounded-sm shadow-sm" alt="DE">
            <span class="text-[10px] font-black uppercase">DE</span>
        </button>
    </div>
</div>
<input id="set-email" type="email" class="input-field bg-slate-50 text-slate-400" disabled>
<button id="btn-update-profile" onclick="saveProfileInfo()" class="w-full py-4 bg-slate-100 text-slate-400 rounded-xl font-bold text-sm cursor-not-allowed transition-all duration-300">Mettre à jour le profil</button>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
<p class="text-[10px] font-black uppercase text-slate-400 tracking-wider">Sécurité</p>
<button onclick="openPasswordPip()" class="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl border border-slate-100 hover:bg-slate-100 transition">Modifier votre mot de passe</button>
<button onclick="openEmailPip()" class="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl border border-slate-100 hover:bg-slate-100 transition">Modifier votre email</button>
</div>

<!-- Notifications !-->
<div id="notif-section" class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6 relative">
<div class="flex items-center justify-between">
<div>
<p class="font-bold text-slate-800">Autoriser les Notifications</p>
<p class="text-xs text-slate-400">Recevoir des rappels sur cet appareil</p>
</div>
<label class="switch">
<input type="checkbox" id="notif-master" onchange="toggleNotifUI(); checkChanges()">
<span class="slider"></span>
</label>
</div>

<div id="notif-content-wrapper" class="space-y-4 pt-2 border-t border-slate-50 transition-all duration-300">
<p class="text-[10px] font-black uppercase text-slate-400 tracking-wider">Rappels avant un event</p>

<div class="flex items-center justify-between">
<span class="text-xs font-bold text-slate-600">1 semaine avant</span>
<label class="switch scale-75">
<input type="checkbox" id="notif-1s" onchange="checkChanges()">
<span class="slider"></span>
</label>
</div>

<div class="flex items-center justify-between">
<span class="text-xs font-bold text-slate-600">1 jour avant</span>
<label class="switch scale-75">
<input type="checkbox" id="notif-1j" onchange="checkChanges()">
<span class="slider"></span>
</label>
</div>

<div class="flex items-center justify-between">
<span class="text-xs font-bold text-slate-600">1 heure avant</span>
<label class="switch scale-75">
<input type="checkbox" id="notif-1h" onchange="checkChanges()">
<span class="slider"></span>
</label>
</div>

<div id="custom-reminders-list" class="space-y-3"></div>

<button id="btn-open-custom" onclick="openCustomReminderPip()" class="w-full py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs uppercase tracking-widest active:scale-95 transition">
+ Rappel personnalisé
</button>


</div>
</div>
<button id="btn-save-notif" onclick="saveNotificationPrefs()" disabled class="w-full py-4 bg-slate-200 text-slate-400 font-bold rounded-2xl transition mt-4 cursor-not-allowed">
Sauvegarder mes préférences
</button>

<div id="pip-custom-reminder" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm hidden items-center justify-center z-[200] p-6">
<div class="bg-white w-full max-w-xs rounded-3xl p-6 shadow-2xl animate-in zoom-in duration-200">
<p class="font-black text-slate-800 uppercase text-xs tracking-widest mb-6">Nouveau Rappel</p>

<div class="space-y-6">
<div>
<label class="text-[10px] font-bold text-slate-400 uppercase block mb-2">Combien de jours avant ?</label>
<div class="flex items-center gap-3">
<input type="number" id="in-remind-days" value="1" min="0" max="99" class="w-20 bg-slate-50 border-none rounded-xl p-3 font-bold text-slate-700 focus:ring-2 focus:ring-blue-500">
<span class="text-xs font-bold text-slate-500">jours avant</span>
</div>
</div>
<div>
<label class="text-[10px] font-bold text-slate-400 uppercase block mb-2">À quelle heure ?</label>
<input type="time" id="in-remind-time" value="09:00" class="w-full bg-slate-50 border-none rounded-xl p-3 font-bold text-slate-700 focus:ring-2 focus:ring-blue-500">
</div>
</div>

<div class="flex gap-3 mt-8">
<button onclick="closeCustomReminderPip()" class="flex-1 py-3 text-slate-400 font-bold text-xs uppercase">Annuler</button>
<button onclick="addCustomReminderToUI()" class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase shadow-lg shadow-blue-200">Ajouter</button>
</div>
</div>
</div>


<div class="pt-4">
<button onclick="openDeleteAccountPip()" class="w-full py-4 text-red-500 font-bold text-sm border border-red-100 rounded-2xl hover:bg-red-50 transition">Supprimer le Compte</button>
</div>`,
        
        
        conditions_utilisation_pip:`<h2 class="text-xl font-bold mb-4 text-slate-900">Avant de commencer...</h2>


<div class="bg-gray-50 rounded-2xl p-4 text-xs text-gray-600 overflow-y-auto mb-6 border border-gray-100 flex-1">
<h3 class="font-bold text-gray-900 mb-4 text-center text-sm">Conditions & Confidentialité</h3>

<div class="space-y-6">
<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">1. Responsable du traitement</h4>
<p class="leading-relaxed">Le service est géré par <strong>Alan Llorente</strong>. Contact : Alanllorentej@gmail.com. Seul le responsable a accès aux données (Art. 5 nDSG).</p>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">2. Données collectées</h4>
<p class="mb-2">Nous collectons : Nom, Prénom, Email, Téléphone et historique de participations.</p>
<p><strong>Usage :</strong> Uniquement pour la gestion de vos réservations et la sécurité de votre compte (Art. 6 nDSG).</p>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">3. Sécurité & Stockage</h4>
<ul class="list-disc ml-4 space-y-1 mb-4 text-xs"> 
<li>
<strong>Hébergement :</strong> Données sécurisées sur <strong>Supabase</strong>.<br>
<a href="https://supabase.com/terms" target="_blank" class="text-blue-600 underline">Voir leur politique de sécurité</a>
</li>
<li><strong>Protection :</strong> Une session expire après <strong>10 minutes d'inactivité</strong>.</li>
<li><strong>Confidentialité :</strong> Aucune donnée n'est vendue à des tiers (Art. 8 & 9 nDSG).</li>
</ul>

<p class="mb-2 text-xs">Des standards de sécurités reconnus (Supabase) sont utilisés afin de protéger vos données. Pour garantir une protection optimale, il est recommandé :</p>

<ol class="list-decimal ml-5 space-y-1 text-xs font-medium text-slate-700">
<li><strong>D'éviter</strong> de réutiliser un mot de passe lié à des <strong>informations sensibles</strong> (email, compte bancaire, etc...)</li>
<li>D'utiliser un mot de passe <strong>unique et non prévisible</strong></li>
<li>De ne jamais partager vos identifiants.</li>
</ol>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">4. Vos Droits</h4>
<p>Conformément aux Art. 25-29 nDSG, vous pouvez modifier vos données ou <strong>supprimer votre compte</strong> à tout moment via les réglages.</p>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">5. Conservation</h4>
<p>En cas de suppression, vos données sont effacées. Les données liées aux événements passés sont anonymisées ou supprimées sous <strong>3 mois maximum</strong>.</p>
</section>
</div>

<p class="text-[9px] text-gray-400 mt-6 text-center italic border-t pt-2">Dernière mise à jour : 26 Décembre 2025</p>
</div> <div class="flex items-start gap-3 mb-6">
<input type="checkbox" id="check-consent-initial" class="h-5 w-5 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer">
<label for="check-consent-initial" class="text-xs text-gray-500 font-medium cursor-pointer leading-tight">
J'ai lu et j'accepte les conditions d'utilisation et la politique de confidentialité.
</label>
</div>

<div class="flex gap-3 mt-auto">
<button onclick="cancelSignupConsent()" class="flex-1 py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition active:scale-95 text-sm">
Annuler
</button>
<button onclick="proceedToSignupForm()" class="flex-[2] py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-100 active:scale-95 text-sm">
Poursuivre
</button>
</div>`

        
        
    },
    en: {
        // --- AUTH & LOGIN ---
    CreerCompte: "Create Account",
    Seconnecter: "Log In",
    CreerCompte2: "Create my account",
    auth_btn_login: "Log In",
    auth_btn_register: "Create my account",
    auth_toggle_to_login: "Already have an account? Log in",
    auth_toggle_to_register: "Create an account",
    placeholder_email: "Email",
    placeholder_password: "Password",
    placeholder_prenom: "First Name",
    placeholder_nom: "Last Name",
    placeholder_tel: "Phone Number",
    under_construction: "(Under construction)",

    // --- MENU & NAVIGATION ---
    menu_settings: "Settings",
    menu_inbox: "Inbox",
    menu_create: "Create Event",
    menu_logout: "Logout",
    settings_lang: "App Language",

    // --- CALENDAR & DATE ---
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days_short: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    notif_same_day: "Same day",
    at: "at",
    days_long: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

    // --- BUTTONS GÉNÉRIQUES ---
    btn_confirm: "Confirm",
    btn_cancel: "Cancel",
    btn_save: "Save",
    delete: "Delete",
    status_full: "Full",
    status_finished: "Finished",
    status_pending: "Pending",
    btn_edit_reg: "Edit Reservation",

    // --- ADMIN PANEL ---
    admin_panel_title: "New Event",
    placeholder_title: "Title",
    placeholder_loc: "Location",
    label_notes: "Additional Notes",
    placeholder_notes: "Coaching details, equipment needed...",
    placeholder_max: "Max Slots",
    label_recurrence: "Recurrence",
    day_mon: "Mon", day_tue: "Tue", day_wed: "Wed", day_thu: "Thu", day_fri: "Fri", day_sat: "Sat", day_sun: "Sun",
    btn_delete_event: "Delete event",

    // --- PIP MODIFICATION SÉRIE ---
    edit_choice_title: "Edit Event",
    edit_choice_subtitle: "This event is part of a series.",
    edit_mode_single: "Edit this session only",
    edit_mode_series: "Edit entire series",
    btn_confirm_edit: "Confirm modification",

    // --- PIP SUPPRESSION ÉVÉNEMENT ---
    pip_delete_title: "Delete Event",
    pip_delete_desc: "Do you want to delete this event?",
    delete_mode_single: "This event only",
    delete_mode_series: "Entire series",

    // --- PIP RÉGLAGES (EMAIL / PWD) ---
    pip_pwd_title: "Change your password",
    placeholder_pwd_current: "Current password",
    placeholder_pwd_new: "New password",
    placeholder_pwd_confirm: "Confirm new password",
    pip_email_title: "Change your email",
    placeholder_email_new: "New email",
    placeholder_pwd_verif: "Password",

    // --- PIP RAPPELS (CUSTOM REMINDERS) ---
    pip_reminder_title: "Custom Reminder",
    label_days: "Days",
    label_hours: "Hours",
    label_mins: "Mins",
    btn_add: "Add",

    // --- PIP CONFIRMATIONS SÉCURITÉ ---
    pip_confirm_pwd_title: "Confirm Password",
    pip_confirm_pwd_desc: "Please confirm your password for security reasons.",
    placeholder_pwd: "Password",
    pip_signup_confirm_title: "Confirm Account",
    pip_signup_confirm_desc: "Please confirm your password to finalize your registration.",
    placeholder_confirm_pwd: "Confirm password",
    btn_confirm_access: "Confirm and Access",

    // --- PIP SUPPRESSION COMPTE ---
    pip_del_acc_title: "Delete Account?",
    pip_del_acc_desc: "This action will permanently delete your account and all your data. This action is irreversible.",
    pip_del_acc_confirm: "Please confirm this action.",
    btn_confirm_del_acc: "Yes, Delete",


    //--- PiP Inscription et modification d'inscription ---
    label_private_session: "Private Session",
    private_warning_blocked: "Option blocked.",
    placeholder_reg_notes: "E.g.: Work on jumps...",
    step2_title_register: "Register",
    step2_title_edit: "Edit Registration",
    step2_label_notes: "Notes for the coach",
    btn_register_confirm: "Confirm Registration",
    btn_modify_confirm: "Save Changes",


        
     //--- PiP Eventdetails (Openevenetdetails()) ---
    label_members: "members",
    event_card_subtitle: "Event Details",
    label_consultation: "View Only",
    label_location: "Location",
    label_date_time: "Date & Time",

        
    // --- HandleAuthStep 1 and 2 ---
    btn_continue_registration: "Continue registration",
    btn_continue_confirmation: "Continue confirmation",
    warning_action_required: "Action required",
    desc_event_modified: "The event details have been modified. Please review the new information.",
    status_already_registered: "You are already registered",
    event_details_title: "Event Details",
    confirm_presence_prompt: "Would you like to confirm your attendance for",
    label_date_on: "On",
    not_defined: "Not defined",
    warmup_warning: "A minimum of 15 minutes for warm-up is required before the session!",
    pip_step2_default_title: "Before validating...",
    btn_back: "Back",
    btn_back_to_details: "Go to Event Details",
    label_update_notes: "Update your notes:",
    step2_title_reconfirmation: "Reconfirmation",
    btn_finish_confirmation: "Complete confirmation",
    btn_unsubscribe: "Unsubscribe",
    msg_saving: "Saving...",
    msg_save_success: "Changes saved!",
    msg_reg_success: "Registration confirmed!",
    
        
    reglages_all: `
<div id="profile-section" class="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
    <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider">Profile</p>
    <div class="grid grid-cols-2 gap-4">
        <input id="set-firstname" oninput="checkProfileChanges()" placeholder="First Name" class="input-field">
        <input id="set-lastname" oninput="checkProfileChanges()" placeholder="Last Name" class="input-field">
    </div>
    <input id="set-phone" oninput="checkProfileChanges()" placeholder="Phone" class="input-field">
    <div class="flex flex-col gap-2 p-4">
        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">App Language</p>
        <div class="flex bg-slate-100 p-1 rounded-2xl w-full max-w-sm border border-slate-200">
            <button onclick="changeLanguage('fr')" id="lang-fr" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300">
                <img src="https://flagcdn.com/w40/fr.png" class="w-5 h-4 object-cover rounded-sm shadow-sm" alt="FR">
                <span class="text-[10px] font-black uppercase">FR</span>
            </button>
            <button onclick="changeLanguage('en')" id="lang-en" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300">
                <img src="https://flagcdn.com/w40/gb.png" class="w-5 h-4 object-cover rounded-sm shadow-sm" alt="EN">
                <span class="text-[10px] font-black uppercase">EN</span>
            </button>
            <button onclick="changeLanguage('de')" id="lang-de" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300">
                <img src="https://flagcdn.com/w40/de.png" class="w-5 h-4 object-cover rounded-sm shadow-sm" alt="DE">
                <span class="text-[10px] font-black uppercase">DE</span>
            </button>
        </div>
    </div>
    <input id="set-email" type="email" class="input-field bg-slate-50 text-slate-400" disabled>
    <button id="btn-update-profile" onclick="saveProfileInfo()" class="w-full py-4 bg-slate-100 text-slate-400 rounded-xl font-bold text-sm cursor-not-allowed transition-all duration-300">Update Profile</button>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
    <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider">Security</p>
    <button onclick="openPasswordPip()" class="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl border border-slate-100 hover:bg-slate-100 transition">Change your password</button>
    <button onclick="openEmailPip()" class="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl border border-slate-100 hover:bg-slate-100 transition">Change your email</button>
</div>

<div id="notif-section" class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6 relative">
    <div class="flex items-center justify-between">
        <div>
            <p class="font-bold text-slate-800">Enable Notifications</p>
            <p class="text-xs text-slate-400">Receive reminders on this device</p>
        </div>
        <label class="switch">
            <input type="checkbox" id="notif-master" onchange="toggleNotifUI(); checkChanges()">
            <span class="slider"></span>
        </label>
    </div>
    <div id="notif-content-wrapper" class="space-y-4 pt-2 border-t border-slate-50 transition-all duration-300">
        <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider">Reminders before an event</p>
        <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-600">1 week before</span>
            <label class="switch scale-75">
                <input type="checkbox" id="notif-1s" onchange="checkChanges()">
                <span class="slider"></span>
            </label>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-600">1 day before</span>
            <label class="switch scale-75">
                <input type="checkbox" id="notif-1j" onchange="checkChanges()">
                <span class="slider"></span>
            </label>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-600">1 hour before</span>
            <label class="switch scale-75">
                <input type="checkbox" id="notif-1h" onchange="checkChanges()">
                <span class="slider"></span>
            </label>
        </div>
        <div id="custom-reminders-list" class="space-y-3"></div>
        <button id="btn-open-custom" onclick="openCustomReminderPip()" class="w-full py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs uppercase tracking-widest active:scale-95 transition">
            + Custom reminder
        </button>
    </div>
</div>
<button id="btn-save-notif" onclick="saveNotificationPrefs()" disabled class="w-full py-4 bg-slate-200 text-slate-400 font-bold rounded-2xl transition mt-4 cursor-not-allowed">
    Save my preferences
</button>

<div id="pip-custom-reminder" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm hidden items-center justify-center z-[200] p-6">
    <div class="bg-white w-full max-w-xs rounded-3xl p-6 shadow-2xl animate-in zoom-in duration-200">
        <p class="font-black text-slate-800 uppercase text-xs tracking-widest mb-6">New Reminder</p>
        <div class="space-y-6">
            <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase block mb-2">How many days before?</label>
                <div class="flex items-center gap-3">
                    <input type="number" id="in-remind-days" value="1" min="0" max="99" class="w-20 bg-slate-50 border-none rounded-xl p-3 font-bold text-slate-700 focus:ring-2 focus:ring-blue-500">
                    <span class="text-xs font-bold text-slate-500">days before</span>
                </div>
            </div>
            <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase block mb-2">At what time?</label>
                <input type="time" id="in-remind-time" value="09:00" class="w-full bg-slate-50 border-none rounded-xl p-3 font-bold text-slate-700 focus:ring-2 focus:ring-blue-500">
            </div>
        </div>
        <div class="flex gap-3 mt-8">
            <button onclick="closeCustomReminderPip()" class="flex-1 py-3 text-slate-400 font-bold text-xs uppercase">Cancel</button>
            <button onclick="addCustomReminderToUI()" class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase shadow-lg shadow-blue-200">Add</button>
        </div>
    </div>
</div>

<div class="pt-4">
    <button onclick="openDeleteAccountPip()" class="w-full py-4 text-red-500 font-bold text-sm border border-red-100 rounded-2xl hover:bg-red-50 transition">Delete Account</button>
</div>
`,
        conditions_utilisation_pip:`<h2 class="text-xl font-bold mb-4 text-slate-900">Before starting...</h2>


<div class="bg-gray-50 rounded-2xl p-4 text-xs text-gray-600 overflow-y-auto mb-6 border border-gray-100 flex-1">
<h3 class="font-bold text-gray-900 mb-4 text-center text-sm">Terms and Privacy</h3>

<div class="space-y-6">
<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">1. Data Controller</h4>
<p class="leading-relaxed">The service is managed by <strong>Alan Llorente</strong>. Contact: Alanllorentej@gmail.com. Only the person in charge has access to the data (Art. 5 nDSG).</p>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">2. Data Collected</h4>
<p class="mb-2">We collect: First Name, Last Name, Email, Phone number, and participation history.</p>
<p><strong>Usage:</strong> Only for managing your bookings and the security of your account (Art. 6 nDSG).</p>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">3. Security & Storage</h4>
<ul class="list-disc ml-4 space-y-1 mb-4 text-xs"> 
<li>
<strong>Hosting:</strong> Secure data on <strong>Supabase</strong>.<br>
<a href="https://supabase.com/terms" target="_blank" class="text-blue-600 underline">See their security policy</a>
</li>
<li><strong>Protection:</strong> A session expires after <strong>10 minutes of inactivity</strong>.</li>
<li><strong>Privacy:</strong> No data is sold to third parties (Art. 8 & 9 nDSG).</li>
</ul>

<p class="mb-2 text-xs">Recognized security standards (Supabase) are used to protect your data. To ensure optimal protection, it is recommended:</p>

<ol class="list-decimal ml-5 space-y-1 text-xs font-medium text-slate-700">
<li><strong>Avoid</strong> reusing a password linked to <strong>sensitive information</strong> (email, bank account, etc...)</li>
<li>Use a <strong>unique and unpredictable</strong> password</li>
<li>Never share your login details.</li>
</ol>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">4. Your Rights</h4>
<p>In accordance with Articles 25-29 of the nDSG, you can modify your data or <strong>delete your account</strong> at any time via the settings.</p>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">5. Storage</h4>
<p>In case of deletion, your data is erased. Data related to past events is anonymized or deleted within <strong>a maximum of 3 months</strong>.</p>
</section>
</div>

<p class="text-[9px] text-gray-400 mt-6 text-center italic border-t pt-2">Last updated: December 26, 2025</p>
</div> <div class="flex items-start gap-3 mb-6">
<input type="checkbox" id="check-consent-initial" class="h-5 w-5 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer">
<label for="check-consent-initial" class="text-xs text-gray-500 font-medium cursor-pointer leading-tight">
I have read and I accept the terms of use and the privacy policy.
</label>
</div>

<div class="flex gap-3 mt-auto">
<button onclick="cancelSignupConsent()" class="flex-1 py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition active:scale-95 text-sm">
Cancel
</button>
<button onclick="proceedToSignupForm()" class="flex-[2] py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-100 active:scale-95 text-sm">
Continue
</button>
</div>`
        


    },
    de: {
        // --- AUTH & LOGIN ---
    CreerCompte: "Konto erstellen",
    Seconnecter: "Sich Anmelden",
    CreerCompte2: "Mein Konto erstellen",
    auth_btn_login: "Sich Anmelden",
    auth_btn_register: "Mein Konto erstellen",
    auth_toggle_to_login: "Bereits ein Konto? Einloggen",
    auth_toggle_to_register: "Konto erstellen",
    placeholder_email: "E-Mail",
    placeholder_password: "Passwort",
    placeholder_prenom: "Vorname",
    placeholder_nom: "Name",
    placeholder_tel: "Handynummer",
    under_construction: "(In Erstellung)",

    // --- MENU & NAVIGATION ---
    menu_settings: "Einstellungen",
    menu_inbox: "Posteingang",
    menu_create: "Event erstellen",
    menu_logout: "Abmelden",
    settings_lang: "App Sprache",

    // --- CALENDAR & DATE ---
    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    days_short: ["Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"],
    notif_same_day: "Am selben Tag",
    at: "um",
    days_long: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],

    // --- BUTTONS GÉNÉRIQUES ---
    btn_confirm: "Bestätigen",
    btn_cancel: "Abbrechen",
    btn_save: "Speichern",
    delete: "Löschen",
    status_full: "Ausgebucht",
    status_finished: "Beendet",
    status_pending: "Ausstehend",
    btn_edit_reg: "Reservierung bearbeiten",

    // --- ADMIN PANEL ---
    admin_panel_title: "Neues Ereignis",
    placeholder_title: "Titel",
    placeholder_loc: "Ort",
    label_notes: "Zusätzliche Notizen",
    placeholder_notes: "Coaching-Details, Ausrüstung...",
    placeholder_max: "Max. Plätze",
    label_recurrence: "Wiederholung",
    day_mon: "Mo", day_tue: "Di", day_wed: "Mi", day_thu: "Do", day_fri: "Fr", day_sat: "Sa", day_sun: "So",
    btn_delete_event: "Ereignis löschen",

    // --- PIP MODIFICATION SÉRIE ---
    edit_choice_title: "Ereignis bearbeiten",
    edit_choice_subtitle: "Dieses Ereignis ist Teil einer Serie.",
    edit_mode_single: "Nur diese Sitzung bearbeiten",
    edit_mode_series: "Ganze Serie bearbeiten",
    btn_confirm_edit: "Änderung bestätigen",

    // --- PIP SUPPRESSION ÉVÉNEMENT ---
    pip_delete_title: "Ereignis löschen",
    pip_delete_desc: "Möchten Sie dieses Ereignis löschen?",
    delete_mode_single: "Nur dieses Ereignis",
    delete_mode_series: "Ganze Serie",

    // --- PIP RÉGLAGES (EMAIL / PWD) ---
    pip_pwd_title: "Passwort ändern",
    placeholder_pwd_current: "Aktuelles Passwort",
    placeholder_pwd_new: "Neues Passwort",
    placeholder_pwd_confirm: "Neues Passwort bestätigen",
    pip_email_title: "E-Mail ändern",
    placeholder_email_new: "Neue E-Mail",
    placeholder_pwd_verif: "Passwort",

    // --- PIP RAPPELS (CUSTOM REMINDERS) ---
    pip_reminder_title: "Eigener Reminder",
    label_days: "Tage",
    label_hours: "Stunden",
    label_mins: "Min",
    btn_add: "Hinzufügen",

    // --- PIP CONFIRMATIONS SÉCURITÉ ---
    pip_confirm_pwd_title: "Passwort bestätigen",
    pip_confirm_pwd_desc: "Bitte bestätigen Sie Ihr Passwort aus Sicherheitsgründen.",
    placeholder_pwd: "Passwort",
    pip_signup_confirm_title: "Konto bestätigen",
    pip_signup_confirm_desc: "Bitte bestätigen Sie Ihr Passwort, um die Registrierung abzuschließen.",
    placeholder_confirm_pwd: "Passwort bestätigen",
    btn_confirm_access: "Bestätigen und Beitreten",

    // --- PIP SUPPRESSION COMPTE ---
    pip_del_acc_title: "Konto löschen?",
    pip_del_acc_desc: "Diese Aktion wird Ihr Konto und alle Ihre Daten dauerhaft löschen. Diese Aktion ist nicht rückgängig zu machen.",
    pip_del_acc_confirm: "Bitte bestätigen Sie diese Aktion.",
    btn_confirm_del_acc: "Ja, Löschen",


    //--- PiP Inscription et modification d'inscription ---
    label_private_session: "Privatsitzung",
    private_warning_blocked: "Option gesperrt.",
    placeholder_reg_notes: "Z.B.: Sprünge trainieren...",
    step2_title_register: "Anmelden",
    step2_title_edit: "Anmeldung bearbeiten",
    step2_label_notes: "Notizen für den Coach",
    btn_register_confirm: "Anmeldung bestätigen",
    btn_modify_confirm: "Änderungen speichern",



    //---PiP Details events (Openeventsdetails()) ---
    label_members: "Mitglieder",
    event_card_subtitle: "Ereignis-Details",
    label_consultation: "Nur Ansicht",
    label_location: "Ort",
    label_date_time: "Datum & Uhrzeit",

        
    // --- HandleAuthStep 1 and 2 ---
    btn_continue_registration: "Anmeldung fortsetzen",
    btn_continue_confirmation: "Bestätigung fortsetzen",
    warning_action_required: "Aktion erforderlich",
    desc_event_modified: "Die Details zu diesem Ereignis wurden geändert. Bitte lesen Sie die neuen Informationen.",
    status_already_registered: "Sie sind bereits angemeldet",
    event_details_title: "Ereignisdetails",
    confirm_presence_prompt: "Möchten Sie Ihre Teilnahme bestätigen für",
    label_date_on: "Am",
    not_defined: "Nicht definiert",
    warmup_warning: "Ein Aufwärmen von mindestens 15 Minuten vor Beginn ist erforderlich!",
    pip_step2_default_title: "Vor der Validierung...",
    btn_back: "Zurück",
    btn_back_to_details: "Zu den Ereignisdetails",
    label_update_notes: "Notizen aktualisieren:",
    step2_title_reconfirmation: "Rückbestätigung",
    btn_finish_confirmation: "Bestätigung abschließen",
    btn_unsubscribe: "Abmelden",
    msg_saving: "Speichern...",
    msg_save_success: "Änderungen gespeichert!",
    msg_reg_success: "Anmeldung bestätigt!",
        
    reglages_all: `
<div id="profile-section" class="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
    <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider">Profil</p>
    <div class="grid grid-cols-2 gap-4">
        <input id="set-firstname" oninput="checkProfileChanges()" placeholder="Vorname" class="input-field">
        <input id="set-lastname" oninput="checkProfileChanges()" placeholder="Nachname" class="input-field">
    </div>
    <input id="set-phone" oninput="checkProfileChanges()" placeholder="Telefon" class="input-field">
    <div class="flex flex-col gap-2 p-4">
        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">App-Sprache</p>
        <div class="flex bg-slate-100 p-1 rounded-2xl w-full max-w-sm border border-slate-200">
            <button onclick="changeLanguage('fr')" id="lang-fr" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300">
                <img src="https://flagcdn.com/w40/fr.png" class="w-5 h-4 object-cover rounded-sm shadow-sm" alt="FR">
                <span class="text-[10px] font-black uppercase">FR</span>
            </button>
            <button onclick="changeLanguage('en')" id="lang-en" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300">
                <img src="https://flagcdn.com/w40/gb.png" class="w-5 h-4 object-cover rounded-sm shadow-sm" alt="EN">
                <span class="text-[10px] font-black uppercase">EN</span>
            </button>
            <button onclick="changeLanguage('de')" id="lang-de" class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300">
                <img src="https://flagcdn.com/w40/de.png" class="w-5 h-4 object-cover rounded-sm shadow-sm" alt="DE">
                <span class="text-[10px] font-black uppercase">DE</span>
            </button>
        </div>
    </div>
    <input id="set-email" type="email" class="input-field bg-slate-50 text-slate-400" disabled>
    <button id="btn-update-profile" onclick="saveProfileInfo()" class="w-full py-4 bg-slate-100 text-slate-400 rounded-xl font-bold text-sm cursor-not-allowed transition-all duration-300">Profil aktualisieren</button>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
    <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider">Sicherheit</p>
    <button onclick="openPasswordPip()" class="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl border border-slate-100 hover:bg-slate-100 transition">Passwort ändern</button>
    <button onclick="openEmailPip()" class="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl border border-slate-100 hover:bg-slate-100 transition">E-Mail ändern</button>
</div>

<div id="notif-section" class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6 relative">
    <div class="flex items-center justify-between">
        <div>
            <p class="font-bold text-slate-800">Benachrichtigungen erlauben</p>
            <p class="text-xs text-slate-400">Erinnerungen auf cehserem Gerät erhalten</p>
        </div>
        <label class="switch">
            <input type="checkbox" id="notif-master" onchange="toggleNotifUI(); checkChanges()">
            <span class="slider"></span>
        </label>
    </div>
    <div id="notif-content-wrapper" class="space-y-4 pt-2 border-t border-slate-50 transition-all duration-300">
        <p class="text-[10px] font-black uppercase text-slate-400 tracking-wider">Erinnerungen vor einem Event</p>
        <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-600">1 Woche vorher</span>
            <label class="switch scale-75">
                <input type="checkbox" id="notif-1s" onchange="checkChanges()">
                <span class="slider"></span>
            </label>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-600">1 Tag vorher</span>
            <label class="switch scale-75">
                <input type="checkbox" id="notif-1j" onchange="checkChanges()">
                <span class="slider"></span>
            </label>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-600">1 Stunde vorher</span>
            <label class="switch scale-75">
                <input type="checkbox" id="notif-1h" onchange="checkChanges()">
                <span class="slider"></span>
            </label>
        </div>
        <div id="custom-reminders-list" class="space-y-3"></div>
        <button id="btn-open-custom" onclick="openCustomReminderPip()" class="w-full py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs uppercase tracking-widest active:scale-95 transition">
            + Eigene Erinnerung
        </button>
    </div>
</div>
<button id="btn-save-notif" onclick="saveNotificationPrefs()" disabled class="w-full py-4 bg-slate-200 text-slate-400 font-bold rounded-2xl transition mt-4 cursor-not-allowed">
    Einstellungen speichern
</button>

<div id="pip-custom-reminder" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm hidden items-center justify-center z-[200] p-6">
    <div class="bg-white w-full max-w-xs rounded-3xl p-6 shadow-2xl animate-in zoom-in duration-200">
        <p class="font-black text-slate-800 uppercase text-xs tracking-widest mb-6">Neue Erinnerung</p>
        <div class="space-y-6">
            <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase block mb-2">Wie viele Tage vorher?</label>
                <div class="flex items-center gap-3">
                    <input type="number" id="in-remind-days" value="1" min="0" max="99" class="w-20 bg-slate-50 border-none rounded-xl p-3 font-bold text-slate-700 focus:ring-2 focus:ring-blue-500">
                    <span class="text-xs font-bold text-slate-500">Tage vorher</span>
                </div>
            </div>
            <div>
                <label class="text-[10px] font-bold text-slate-400 uppercase block mb-2">Um wie viel Uhr?</label>
                <input type="time" id="in-remind-time" value="09:00" class="w-full bg-slate-50 border-none rounded-xl p-3 font-bold text-slate-700 focus:ring-2 focus:ring-blue-500">
            </div>
        </div>
        <div class="flex gap-3 mt-8">
            <button onclick="closeCustomReminderPip()" class="flex-1 py-3 text-slate-400 font-bold text-xs uppercase">Abbrechen</button>
            <button onclick="addCustomReminderToUI()" class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase shadow-lg shadow-blue-200">Hinzufügen</button>
        </div>
    </div>
</div>

<div class="pt-4">
    <button onclick="openDeleteAccountPip()" class="w-full py-4 text-red-500 font-bold text-sm border border-red-100 rounded-2xl hover:bg-red-50 transition">Konto löschen</button>
</div>
`,
        conditions_utilisation_pip:`<h2 class="text-xl font-bold mb-4 text-slate-900">Bevor wir anfangen...</h2>


<div class="bg-gray-50 rounded-2xl p-4 text-xs text-gray-600 overflow-y-auto mb-6 border border-gray-100 flex-1">
<h3 class="font-bold text-gray-900 mb-4 text-center text-sm">Bedingungen & Datenschutz</h3>

<div class="space-y-6">
<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">1. Verantwortlicher für die Datenverarbeitung</h4>
<p class="leading-relaxed">Der Dienst wird von <strong>Alan Llorente</strong> verwaltet. Kontakt: Alanllorentej@gmail.com. Nur der Verantwortliche hat Zugriff auf die Daten (Art. 5 nDSG).</p>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">2. Gesammelte Daten</h4>
<p class="mb-2">Wir erfassen: Name, Vorname, E-Mail, Telefon und Teilnahmehistorie.</p>
<p><strong>Verwendung:</strong> Ausschließlich zur Verwaltung Ihrer Reservierungen und zur Sicherheit Ihres Kontos (Art. 6 nDSG).</p>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">3. Sicherheit & Speicherung</h4>
<ul class="list-disc ml-4 space-y-1 mb-4 text-xs">
<li>
<strong>Hosting:</strong> Gesicherte Daten auf <strong>Supabase</strong>.<br>
<a href="https://supabase.com/terms" target="_blank" class="text-blue-600 underline">Sicherheitsrichtlinien ansehen</a>
</li>
<li><strong>Schutz:</strong> Eine Sitzung läuft nach <strong>10 Minuten Inaktivität</strong> ab.</li>
<li><strong>Datenschutz:</strong> Keine Daten werden an Dritte verkauft (Art. 8 & 9 nDSG).</li>
</ul>

<p class="mb-2 text-xs">Anerkannte Sicherheitsstandards (Supabase) werden verwendet, um Ihre Daten zu schützen. Um optimalen Schutz zu gewährleisten, wird empfohlen:</p>

<ol class="list-decimal ml-5 space-y-1 text-xs font-medium text-slate-700">
<li><strong>Vermeiden</strong> Sie die Wiederverwendung eines Passworts, das mit <strong>sensiblen Informationen</strong> (E-Mail, Bankkonto usw.) verbunden ist.</li>
<li>Verwenden Sie ein <strong>einzigartiges und nicht vorhersehbares</strong> Passwort.</li>
<li>Teilen Sie niemals Ihre Zugangsdaten.</li>
</ol>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">4. Ihre Rechte</h4>
<p>Gemäß den Art. 25-29 nDSG können Sie Ihre Daten jederzeit ändern oder <strong>Ihr Konto löschen</strong> über die Einstellungen.</p>
</section>

<section>
<h4 class="font-extrabold text-slate-900 text-[10px] uppercase tracking-wider mb-1">5. Aufbewahrung</h4>
<p>Im Falle einer Löschung werden Ihre Daten entfernt. Daten, die mit vergangenen Ereignissen verbunden sind, werden <strong>innerhalb von maximal 3 Monaten</strong> anonymisiert oder gelöscht.</p>
</section>
</div>

<p class="text-[9px] text-gray-400 mt-6 text-center italic border-t pt-2">Letzte Aktualisierung: 26. Dezember 2025</p>
</div> <div class="flex items-start gap-3 mb-6">
<input type="checkbox" id="check-consent-initial" class="h-5 w-5 mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer">
<label for="check-consent-initial" class="text-xs text-gray-500 font-medium cursor-pointer leading-tight">
Ich habe die Nutzungsbedingungen und die Datenschutzrichtlinie gelesen und akzeptiere sie.
</label>
</div>

<div class="flex gap-3 mt-auto">
<button onclick="cancelSignupConsent()" class="flex-1 py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition active:scale-95 text-sm">
Abbrechen
</button>
<button onclick="proceedToSignupForm()" class="flex-[2] py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-100 active:scale-95 text-sm">
Fortsetzen
</button>
</div>`


    }
};

// Initialisation de la langue (mémoire locale ou navigateur)
let currentLang = localStorage.getItem('userLang') || navigator.language.slice(0, 2) || 'fr';
if (!translations[currentLang]) currentLang = 'fr';


