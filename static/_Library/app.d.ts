declare class MyEvent {
    static ScrollEvent(handler: (scrollTop: number) => void): void;
}
declare class WebCall {
    static call(fonction: (ici: JQuery) => void): void;
}
interface ElementX {
    x: JQuery;
}
interface option {
    class?: string;
    id?: string;
}
interface optionCode extends option {
    text: string;
}
declare class Code implements ElementX {
    private Code;
    constructor(option: optionCode);
    Ajouter(Element: ElementX): void;
    Empty(): void;
    addClass(uneclass: string): void;
    readonly x: JQuery;
}
interface optionDiv extends option {
    title?: string;
}
declare class Div implements ElementX {
    private div;
    constructor(option: optionDiv);
    Ajouter(Element: ElementX): void;
    Empty(): void;
    addClass(uneclass: string): void;
    readonly x: JQuery;
}
interface optionObject extends option {
    data: string;
    type: string;
}
declare class Objectview implements ElementX {
    private div;
    constructor(option: optionObject);
    addClass(uneclass: string): void;
    readonly x: JQuery;
}
interface optionPre extends option {
}
declare class Pre implements ElementX {
    private Pre;
    constructor(option: optionPre);
    Ajouter(Element: ElementX): void;
    Empty(): void;
    addClass(uneclass: string): void;
    readonly x: JQuery;
}
interface optionSpan extends option {
    Icone?: string;
    text?: string;
}
declare class Span implements ElementX {
    private Span;
    constructor(option: optionSpan);
    readonly x: JQuery;
}
interface optionsBackGround extends option {
    image: string;
}
declare class BackGround implements ElementX {
    private div;
    constructor(option: optionsBackGround);
    Ajoute(Element: ElementX): void;
    readonly x: JQuery;
}
interface optionBando extends option {
    Text: string;
}
declare class Bando implements ElementX {
    private div;
    constructor(option: optionBando);
    readonly x: JQuery;
}
declare enum EnumBoutonType {
    Standard = 0,
    IconeUnique = 1,
    textUnique = 2,
    Big = 3
}
interface optionBouton extends option {
    texte?: string;
    icone?: string;
    title?: string;
    typeBouton?: EnumBoutonType;
    click: (e: () => void) => void;
}
declare class Bouton implements ElementX {
    private bouton;
    constructor(option: optionBouton);
    private hide;
    private generatTypeBouton;
    private generatInit;
    readonly x: JQuery;
}
interface optionDivConteneur extends option {
    Titre?: string;
    ini?: ElementX;
}
declare class DivConteneur implements ElementX {
    private divConteneur;
    private divContenu;
    constructor(option: optionDivConteneur);
    ajouter(Element: ElementX): DivConteneur;
    readonly x: JQuery;
}
interface optionDivEvent extends option {
    MouseClick?: () => void;
    MouseHover?: () => void;
    MouseOut?: () => void;
    title?: string;
    Init: ElementX;
}
declare class DivEvent implements ElementX {
    private div;
    constructor(option: optionDivEvent);
    addclass(uneclass: string): void;
    readonly x: JQuery;
}
interface optionDockPanel extends option {
}
declare enum EnumDockPosition {
    top = 1,
    bot = 2,
    left = 3,
    right = 4
}
declare class DockPanel implements ElementX {
    private div;
    private LastDiv;
    constructor(option: optionDockPanel);
    ajouter(Element: ElementX, Position: EnumDockPosition, Class?: string): void;
    readonly x: JQuery;
}
interface optionHighLightCode extends option {
    style: EnumStyleHighLightCode;
    Langage: EnumLangageHighLightCode;
    text: string;
}
declare enum EnumStyleHighLightCode {
    A11yDark = "a11y-dark",
    AtomOneDark = "Atom-One-Dark",
    Darcula = "darcula",
    GruvboxDark = "gruvbox-dark",
    VimHybrid = "vim-hybrid",
    Lightfair = "lightfair",
    MonokaiSublime = "Monokai-Sublime",
    Railscasts = "railscasts",
    TomorrowNight = "Tomorrow-Night",
    TomorrowNightEighties = "Tomorrow-Night-Eighties",
    visualStudio2015dark = "visualStudio2015dark"
}
declare enum EnumLangageHighLightCode {
    TypeScript = "typescript",
    Csharp = "cs",
    Json = "json",
    Css = "css",
    Xml = "xml",
    MarkDown = "markdown",
    Java = "java",
    JavaScript = "javascript",
    Python = "python",
    Sql = "sql",
    Php = "php"
}
declare class HighLight_Code implements ElementX {
    private Highblock;
    constructor(option: optionHighLightCode);
    readonly x: JQuery;
}
interface optionImage extends option {
    Image: string;
    typeCadre: EnumTypeCadreImage;
}
declare enum EnumTypeCadreImage {
    Sans = "sans",
    Round = "Round",
    Standard = "Standard",
    StandardRound = "StandardRound"
}
declare class DivImage implements ElementX {
    private div;
    constructor(option: optionImage);
    readonly x: JQuery;
}
interface optionLabel extends option {
    title?: string;
    text: string;
    type?: EnumTypeLabel;
    Decoration?: EnumDecoLabel;
}
declare enum EnumDecoLabel {
    Aucune = "",
    Souligner = "Souligner"
}
declare enum EnumTypeLabel {
    Standard = "Standard",
    BigText = "GrosText",
    Titre = "Titre"
}
declare class Label implements ElementX {
    private leLabel;
    private letext;
    constructor(option: optionLabel);
    readonly x: JQuery;
}
interface optionPage extends option {
    initHeader?: ElementX;
    initContaine?: ElementX;
    HeaderFix?: boolean;
}
declare class Page implements ElementX {
    private page;
    private header;
    private containte;
    constructor(option: optionPage);
    private animation;
    addClass(lesClass: string): void;
    Ajouteheader(unElement: ElementX): void;
    AjouteContainte(unElement: ElementX): void;
    readonly x: JQuery;
}
interface optionViewpdf extends option {
    filepath: string;
}
declare class Viewpdf implements ElementX {
    private view;
    constructor(option: optionViewpdf);
    addClass(uneclass: string): void;
    readonly x: JQuery;
}
interface optionWarppanel extends option {
    init?: ElementX[];
}
declare class Warppanel implements ElementX {
    private Warp;
    private laClass;
    constructor(option: optionWarppanel);
    addClass(uneclass: string): void;
    Empty(): void;
    ajouter(element: ElementX): void;
    readonly x: JQuery;
}
interface optionBoxer extends option {
    BeforeOpen?: (ici: Boxer) => void;
    AfterClose?: (ici: Boxer) => void;
    Init?: ElementX;
}
declare class Boxer {
    private div;
    private divBoxer;
    private Contenu;
    private isHover;
    private option;
    constructor(option: optionBoxer);
    Afficher(): void;
    Fermer(): void;
    Ajouter(unElement: ElementX): void;
    Empty(): void;
}
interface optionStackpanel extends option {
    init?: ElementX[];
}
declare class Stackpanel implements ElementX {
    private Stack;
    private laClass;
    constructor(option: optionStackpanel);
    addClass(uneclass: string): void;
    Empty(): void;
    ajouter(element: ElementX): void;
    readonly x: JQuery;
}
interface optionCompetenceView extends option {
    init?: optionCompetenceViewItem[];
}
interface optionCompetenceViewItem extends option {
    Titre: string;
    Icone: string;
    Pourcentage: number;
    color: EnumColorCompetenceView;
}
declare enum EnumColorCompetenceView {
    Violet = "Violet",
    Rouge = "Rouge",
    Bleu = "Bleu",
    Bleu_Foncer = "Bleu_Foncer",
    Bleu_Claire = "Bleu_Claire",
    Cyan = "Cyan",
    Orange = "Orange",
    Jaune = "Jaune",
    Gris = "Gris"
}
declare class CompetenceView implements ElementX {
    private warp;
    constructor(option: optionCompetenceView);
    private GenerateBarre;
    ajouter(option: optionCompetenceViewItem): void;
    readonly x: JQuery;
}
interface optionExperienceView extends option {
    init?: optionExperienceViewItem[];
}
declare enum EnumTypeExperience {
    Etude = "Etude",
    Travail = "Travail"
}
interface optionExperienceViewItem extends option {
    type: EnumTypeExperience;
    Titre: string;
    Text: string;
}
declare class ExperienceView implements ElementX {
    private stack;
    private SensDinsertion;
    constructor(option: optionExperienceView);
    AjouteItem(ItemExperience: optionExperienceViewItem): void;
    readonly x: JQuery;
}
interface opitonNavPortfolio extends option {
    init: optionNavPortfolioItem[];
}
interface optionNavPortfolioItem {
    Titre: string;
    Image: string;
    Init: optionNavPortfolioMiniItem[];
}
interface optionNavPortfolioMiniItem {
    Titre: string;
    Title: string;
    Link: string;
}
declare class NavPortfolio implements ElementX {
    private Dock;
    private DivItem;
    private Warp;
    private ListNavPortfolioItem;
    private nbNav;
    constructor(option: opitonNavPortfolio);
    private Next;
    private Back;
    private Actualise;
    ajouter(option: optionNavPortfolioItem): void;
    readonly x: JQuery;
}
declare class NavPortfolioItem implements ElementX {
    private stack;
    private listMiniItem;
    constructor(option: optionNavPortfolioItem);
    generate(): ElementX[];
    readonly x: JQuery;
}
