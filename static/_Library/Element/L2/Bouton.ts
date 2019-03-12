enum EnumBoutonType{
    Standard,
    IconeUnique,
    textUnique,
    Big
}

interface optionBouton extends option{
    texte?:string,
    icone?:string,
    title?:string,
    typeBouton?:EnumBoutonType
    click:(e:()=>void)=>void
}

class Bouton implements ElementX{

    private bouton : DivEvent;

    constructor(option:optionBouton) {
        let mythis : Bouton = this;
        mythis.bouton = new DivEvent({
            class:"Bouton "+ mythis.generatTypeBouton(option.typeBouton)+(option.class != null ? option.class:""),
            id:option.id,
            title:option.title,
            MouseClick:function () {
                mythis.hide();
                option.click(function (){mythis.x.show();});
            },
            Init: mythis.generatInit(option)
        });
    }

    private hide()
    {
        let mythis:Bouton = this;
        mythis.bouton.x.hide();
    }

    private generatTypeBouton(type:EnumBoutonType):string
    {
        switch (type) {
            case (EnumBoutonType.textUnique):
                return "BoutonTextUnique";
            case (EnumBoutonType.IconeUnique):
                return "BoutonIconeUnique";
            case (EnumBoutonType.Big):
                return "BoutonBig";
            default:
                return "";
        }
    }

    private generatInit(option:optionBouton):ElementX
    {
        let init : Div = new Div({class:"BoutonInit"});
        switch (option.typeBouton) {
            case (EnumBoutonType.textUnique):
                init.Ajouter(new Label({class:"BoutonText",text: option.texte,type:EnumTypeLabel.Standard}));
                break;
            case (EnumBoutonType.IconeUnique):
                init.Ajouter(new Span({class:"BoutonIcone",Icone:option.icone}));
                break;
            default:
                if(option.icone != null)
                    init.Ajouter(new Span({class:"BoutonIcone",Icone:option.icone}));
                init.Ajouter(new Span({class:"BoutonText",text: option.texte}));
        }
        return init;
    }

    get x():JQuery{
        return this.bouton.x;
    }
}