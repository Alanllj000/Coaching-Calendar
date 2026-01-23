
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
        conditions_utilisation_pip=`<h2 class="text-xl font-bold mb-4 text-slate-900">Avant de commencer...</h2>


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
</div>`,

        
        
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
        conditions_utilisation_pip=`<h2 class="text-xl font-bold mb-4 text-slate-900">Before starting...</h2>


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
</div>`,
        


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
        conditions_utilisation_pip=`<h2 class="text-xl font-bold mb-4 text-slate-900">Bevor wir anfangen...</h2>


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
</div>`,


    }
};

// Initialisation de la langue (mémoire locale ou navigateur)
let currentLang = localStorage.getItem('userLang') || navigator.language.slice(0, 2) || 'fr';
if (!translations[currentLang]) currentLang = 'fr';


