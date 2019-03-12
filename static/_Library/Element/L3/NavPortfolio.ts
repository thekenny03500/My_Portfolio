interface opitonNavPortfolio extends option{
    init:optionNavPortfolioItem[]
}

interface optionNavPortfolioItem {
    Titre:string,
    Image:string,
    Init:optionNavPortfolioMiniItem[]
}

interface optionNavPortfolioMiniItem {
    Titre:string,
    Title:string,
    Link:string
}

class NavPortfolio implements ElementX{

    private Dock:DockPanel;
    private DivItem:Div;
    private Warp:Warppanel;
    private ListNavPortfolioItem:NavPortfolioItem[];
    private nbNav:number;

    constructor(option:opitonNavPortfolio){
        let mythis:NavPortfolio = this;

        //Instancation
        let laclasse : string ="NavPortfolio "+(option.class != null?option.class:"");
        mythis.Dock = new DockPanel({id:option.id,class:laclasse});
        mythis.Warp = new Warppanel({class:"WarpNavPortfolio"});
        mythis.DivItem = new Div({class:"DivNavPortfolio"});
        mythis.ListNavPortfolioItem = [];
        mythis.nbNav = 0;

        // Generation element base
        mythis.Dock.ajouter(mythis.Warp,EnumDockPosition.bot,"WarpNavConteneur");
        mythis.Dock.ajouter(new Bouton({
            texte:"Back",
            click:function (e) {
                mythis.Back();
                e();
            }}
            ),EnumDockPosition.left);
        mythis.Dock.ajouter(new Bouton({
            texte:"Next",
            click:function (e) {
                mythis.Next();
                e();
            }}
            ),EnumDockPosition.right);
        mythis.Dock.ajouter(mythis.DivItem,EnumDockPosition.top);

        // Generate init list
        if(option.init != null && option.init.length != 0) {
            option.init.forEach(function (e: optionNavPortfolioItem) {
                mythis.ajouter(e);
            });
            mythis.Actualise();
        }
    }

    private Next()
    {
        let mythis:NavPortfolio = this;
        if(mythis.ListNavPortfolioItem.length-1>mythis.nbNav)
            mythis.nbNav++;
        else
            mythis.nbNav = 0;
        mythis.Actualise();
    }

    private Back()
    {
        let mythis:NavPortfolio = this;
        if(0<mythis.nbNav)
            mythis.nbNav--;
        else
            mythis.nbNav = mythis.ListNavPortfolioItem.length-1;
        mythis.Actualise();
    }

    private Actualise()
    {
        let mythis : NavPortfolio = this;
        mythis.DivItem.Empty();
        mythis.Warp.Empty();

        mythis.DivItem.Ajouter(mythis.ListNavPortfolioItem[mythis.nbNav]);
        mythis.ListNavPortfolioItem[mythis.nbNav].generate().forEach(function (element:ElementX) {
            mythis.Warp.ajouter(element);
        });
    }

    public ajouter(option:optionNavPortfolioItem)
    {
        let mythis:NavPortfolio = this;

        let tempo : NavPortfolioItem = new NavPortfolioItem(option);

        if(tempo != null)
            mythis.ListNavPortfolioItem.push(tempo);
    }

    get x():JQuery{
        return this.Dock.x;
    }
}

class NavPortfolioItem implements ElementX{

    private stack:Stackpanel;
    private listMiniItem:optionNavPortfolioMiniItem[];

    constructor(option:optionNavPortfolioItem){
        let mythis = this;
        mythis.stack = new Stackpanel({class:"NavPortfolioItem"});
        mythis.stack.ajouter(new DivImage({class:"NavPortfolioItemImage",Image:option.Image, typeCadre: EnumTypeCadreImage.Sans}));
        mythis.stack.ajouter(new Label({text:option.Titre,class:"NavPortfolioItemTitre",type:EnumTypeLabel.Titre}));
        mythis.listMiniItem = option.Init;
    }

    public generate():ElementX[]
    {
        let mythis: NavPortfolioItem = this;
        let toSender : ElementX[] = []
        
        mythis.listMiniItem.forEach(function (miniItem:optionNavPortfolioMiniItem) {
            toSender.push(new Bouton({
                class:"NavPortfolioMiniItem",
                title:miniItem.Title,
                texte:miniItem.Titre,
                click:function (e) {
                    location.href = "/"+miniItem.Link;
                    e();
                }
            }))
        });
        
        return toSender;
    }

    get x():JQuery{
        return this.stack.x;
    }
}