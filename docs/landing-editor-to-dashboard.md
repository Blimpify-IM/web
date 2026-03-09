# Landningssida → Kom igång → Dashboard: spara redigering

## Nuvarande läge

- **Landningssida** (`/editor`): Editorn sparar till `localStorage` under nycklarna:
  - `blimpify-website-editor-design` (DesignPanelValues)
  - `blimpify-website-editor-edit` (EditValues)
- **"Kom igång"** länkar till **app.blimpify-im.com/sv/signup** (annan origin).
- **Signup** läser idag **inte** dessa nycklar och skapar inget projekt från utkastet.

Därför **fungerar det inte än** att redigera på landningssidan och sedan få det sparade i dashboarden efter skapa konto – kopplingen är inte byggd.

---

## Vad som behövs för att det ska fungera

### 1. Samma datamodell

Landningseditorn använder **template-26feb20** (EditValues + DesignPanelValues). Dashboard-editorn har egen struktur (filer, versioner, m.m.). För att utkast från landningen ska bli ett “första projekt” i dashboarden behöver antingen:

- **A)** Ett API som tar emot `editValues` + `designValues` (samma format som landningen) och skapar en ny website-version / första projekt för användaren, **eller**
- **B)** Att landningseditorn med tiden blir **samma** editor som i dashboarden (samma route/komponenter), så att sparning sker mot samma backend när användaren är inloggad (kräver mer ombyggnad).

### 2. Hur utkastet når dashboarden (origin)

Landning och signup/dashboard är **olika origin** (t.ex. blimpify.im vs app.blimpify-im.com), så dashboarden kan **inte** läsa landningens `localStorage`. Därför måste utkastet skickas på ett av sätten nedan.

**Variant A – Draft-token (rekommenderat)**

1. Användaren klickar **Kom igång** på landningssidan.
2. Landningssidan (eller en API-route på samma sida) skickar utkastet till backend, t.ex.:
   - `POST /api/draft` (web) eller im-api endpoint som sparar i tabell/cache med kortlivad token.
3. Backend svarar med en **draft-token** (t.ex. UUID).
4. Omdirigera till signup **med** token:  
   `app.blimpify-im.com/sv/signup?draft=TOKEN`  
   (ev. även `from_editor=1` om ni vill särskilja flödet).
5. Efter lyckad signup: redirect till dashboard, t.ex.  
   `app.blimpify-im.com/sv?draft=TOKEN`  
   eller direkt till editorn med token.
6. Dashboard (eller första sidan efter inloggning) ser `draft=TOKEN`, anropar API för att hämta utkastet, skapar projekt/website-version från det och rensar token.

**Variant B – Samma origin**

- Om landning och dashboard **servas under samma domän** (t.ex. blimpify.im/editor och blimpify.im/sv/signup) kan dashboarden efter redirect läsa `localStorage` och skicka innehållet till ett “skapa projekt från utkast”-API. Då behövs ingen draft-token, men kräver att båda apparna delar origin.

---

## Rekommendation

- **Kort sikt:** Implementera **draft-token-flödet** (Variant A):  
  - Endpoint som sparar `editValues` + `designValues` (samma nycklar/format som i `EditorPreviewBlock`) och returnerar en token.  
  - “Kom igång”-länken byggs så att utkastet först skickas till denna endpoint, sedan redirect till signup med `?draft=TOKEN`.  
  - Efter signup: dashboard läser `draft`, hämtar utkastet, skapar projekt, rensar token.
- **Lång sikt:** Överväg att landningseditorn blir **samma** editor som i dashboarden (samma UI och samma sparning mot backend när användaren är inloggad), så att man inte behöver två olika flöden.

---

## Nycklar och typer (för implementation)

- **localStorage-nycklar:**  
  `EditorPreviewBlock.STORAGE_KEY_DESIGN`, `EditorPreviewBlock.STORAGE_KEY_EDIT`
- **Format:**  
  `DesignPanelValues` (DesignPanelPreview), `EditValues` (StructureEditorSidebar) – samma som template-26feb20.

Se `web/components/editor-preview/EditorPreviewBlock.tsx` och `web/lib/template-26feb20.ts`.
