interface optionExperienceView extends option{
    init?:optionExperienceViewItem[]
}

enum EnumTypeExperience{
    Etude="Etude",
    Travail="Travail"
}

interface optionExperienceViewItem extends option{
    type:EnumTypeExperience,
    Titre:string,
    Text:string
}

class ExperienceView implements ElementX
{
    private stack:Stackpanel;
    private SensDinsertion:boolean; // false = gauche ; true = droite

    constructor(option:optionExperienceView)
    {
        let mythis :ExperienceView =this;
        mythis.SensDinsertion = false

        mythis.stack = new Stackpanel({class:"ExpetienceView" , id:option.id});

        if(option.class)
            mythis.stack.addClass(option.class);

        if(option.init)
            option.init.forEach(function (Item) {
                mythis.AjouteItem(Item);
            })
    }

    public AjouteItem(ItemExperience:optionExperienceViewItem)
    {
        let mythis: ExperienceView = this;

        let image : DivImage;
        if(ItemExperience.type == EnumTypeExperience.Etude)
            image = new DivImage({Image:EnumTypeExperience.Etude.toString(),typeCadre:EnumTypeCadreImage.Standard});
        else
            image = new DivImage({Image:EnumTypeExperience.Travail.toString(),typeCadre:EnumTypeCadreImage.Standard});

        let text : DivConteneur = new DivConteneur({
            Titre: ItemExperience.Titre,
            ini: new Label({text:ItemExperience.Text,class:"TextExperiance"})
        });

        let Dock : DockPanel = new DockPanel({class:ItemExperience.class});
        Dock.ajouter(image,(mythis.SensDinsertion? EnumDockPosition.right:EnumDockPosition.left));
        Dock.ajouter(text,(mythis.SensDinsertion? EnumDockPosition.right:EnumDockPosition.left),"text");

        if(mythis.SensDinsertion)
            mythis.SensDinsertion = false;
        else
            mythis.SensDinsertion = true;

        mythis.stack.ajouter(Dock);
    }

    get x():JQuery
    {
        return this.stack.x;
    }
}

