# 🕵️‍♂️ Anonima - Chat sicura, pensata per l'anonimato estremo

**Anonima** è una web app di messaggistica realizzata per offrire un livello di privacy e sicurezza superiore rispetto alle comuni applicazioni di chat. È pensata per comunicazioni altamente riservate, in cui anonimato, criptazione e decentralizzazione sono fondamentali.

## 🧠 Filosofia del progetto

La maggior parte delle app di messaggistica end-to-end si basa su **username statici**, il che comporta un legame diretto tra utente e cronologia. Anonima rompe questo schema grazie all'uso di **due identificatori distinti**:

- 🔑 **ID statico** (generato una sola volta e salvato localmente come file): serve per recuperare le cronologie di chat.
- 🧭 **ID di sessione** (temporaneo, creato ogni volta che ci si connette): serve per stabilire connessioni univoche con altri utenti in quel momento.

> Questo sistema permette di comunicare in modo totalmente anonimo, senza registrazione, con cronologie chat che esistono solo se hai il tuo ID statico. Se perdi il file, perdi le chat. Niente è salvato sul server che possa collegarti a una persona reale.  
> Al database giungeranno solo chat completamente criptate e non è possibile risalire né al testo né a chi è in chat.

## 🔐 Differenze da una comune chat E2E

| Aspetto       | Altre Chat E2E         | Anonima                        |
|---------------|------------------------|--------------------------------|
| Username      | Fisso                  | ID temporaneo                  |
| Cronologia    | Recuperabile con account | Solo con file criptato        |
| Identità      | Tracciabile nel tempo  | Non tracciabile senza ID statico |
| Sicurezza     | Buona                  | Altissima                      |
| Anonimato     | Relativo               | Totale                         |

## ⚙️ Tecnologie utilizzate

### 🧩 Backend
- **Node.js** con **Express.js**
- **MongoDB** (per gestire solo chat criptate e ID)
- **JWT** per trasmissione sicura dell’ID statico (opzionale)
- **Librerie crittografiche**:
  - `crypto` (Node.js built-in):
    - Crittografia simmetrica (AES)
    - Crittografia asimmetrica (RSA)
    - Hashing (SHA256/Bcrypt)
  - `uuid`: per generare ID statici unici (UUID v4)

### 🧑‍💻 Frontend
- HTML, CSS, JavaScript
- UI hacker-style:
  - Sfondo nero
  - Bordi verdi
  - Font monospazio
  - Animazioni "terminal-style" (lettera per lettera)
- Interfaccia minimale:
  - Inserimento ID di sessione
  - Caricamento file contenente l’ID statico

## 🛠 Funzionamento

1. L’utente entra nell'app e sceglie un **ID di sessione temporaneo**.
2. Al primo accesso viene generato un **ID statico UUID v4**, criptato, hashato e salvato come file `.txt`.
3. L’utente comunica il suo ID di sessione al partner (es. via email o link esterno).
4. Quando due utenti si connettono, i rispettivi **ID statici vengono ordinati alfabeticamente**, uniti e **hashati** per ottenere un identificatore univoco della loro cronologia chat.
5. Se il file dell’ID statico non viene caricato, non si può accedere a nessuna cronologia.
6. Le chat vengono eliminate automaticamente dopo un periodo se l’ID statico non è stato utilizzato.

## 💣 Sicurezza al primo posto

- Nessuna registrazione
- Nessun salvataggio dati personali
- Nessun tracciamento tra sessioni
- Chat criptate end-to-end (AES/RSA)
- Accesso alle chat **solo** con possesso fisico dell’ID statico

## 🚧 Stato progetto

🧪 In sviluppo. Ogni feedback è benvenuto!

---
